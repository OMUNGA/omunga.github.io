<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <NotFound />
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { NotFound } from "@/components";
const appStore = useAppStore();

onBeforeMount(() => {
  appStore.updateThemeApp();
});

useRouter().beforeResolve((to, from, next) => {
  if (!document.startViewTransition) return;

  return new Promise((resolve) => {
    // @ts-ignore
    document.startViewTransition(async () => {
      resolve();
      await next();
    });
  });
});

const theme = ref({
  color: "red",
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
  width: 100%;
  height: 100vh;
}
</style>
