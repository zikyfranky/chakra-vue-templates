export const API_URL = "https://api.github.com/graphql";

export type Repo = {
  id: string;
  name: string;
  url: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
};

export interface Stargazers {
  totalCount: number;
}

export interface Response {
  user: {
    repository: {
      stargazers: Stargazers;
    };
  };
}
export const fetchData = async <R>(query: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data }: { data: R } = await res.json();
  return data;
};

export const fetchStargazers = async () => {
  const query = `
    query {
      user (login: "hauptrolle") {
        repository(name: "chakra-vue-templates") {
          stargazers {
            totalCount
          }
        }
      }
    }
  `;

  const data = await fetchData<Response>(query);

  return data.user.repository.stargazers;
};
