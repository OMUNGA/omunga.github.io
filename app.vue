<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
const appStore = useAppStore();

onBeforeMount(() => {
  appStore.updateThemeApp();
});
</script>

<style>
* {
  font-family: Roboto;
}
html,
body {
  padding: 0;
  margin: 0;
}

/* html.dark {
  background-color: #111827;
  scrollbar-color: #1e293b #111827;
} */
</style>
