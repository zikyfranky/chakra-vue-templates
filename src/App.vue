<template>
  <CThemeProvider>
    <router-view />
  </CThemeProvider>
</template>

<script lang="ts">
import { CThemeProvider } from "@chakra-ui/vue";

export default {
  components: {
    CThemeProvider,
  },
};
</script>

<style></style>
