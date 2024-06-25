<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="md"
    class="w-full max-w-lg"
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
            type: type || 'articles',
          },
        })
    "
  />
</template>

<script setup lang="ts">
const data = ref<string>("");
const type = ref<string>("");

const { query } = useRoute();

watchEffect(() => {
  data.value = query.q as string;
  type.value = query.type as string;
});
</script>
