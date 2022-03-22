import Vue from "vue";
import App from "@/App.vue";
import Chakra from "@chakra-ui/vue";
import router from "./router";
import customTheme from "@/theme";

Vue.config.productionTip = false;

Vue.use(Chakra, {
  extendTheme: customTheme,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
