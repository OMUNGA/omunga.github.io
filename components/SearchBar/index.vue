<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="md"
    color="white"
    :trailing="false"
    placeholder="Pesquise assunto..."
    v-model="data"
    @keyup.enter="
      () =>
        navigateTo({
          path: '/search',
          query: {
            q: data,
          },
        })
    "
  />
</template>

<script setup lang="ts">
const data = ref<string>("");
</script>
