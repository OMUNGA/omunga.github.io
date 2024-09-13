<template>
  <div class="w-full flex flex-col items-center">
    <header class="h-16 flex items-center container mx-auto">
      <div class="w-full flex items-center justify-between">
        <UButton
          to="/"
          variant="ghost"
          color="gray"
          class="text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
          icon="i-heroicons-arrow-left-20-solid"
          label="home"
        />

        <div class="flex gap-2 items-center">
          <ThemePicker />
          <ThemeToggle />
          <SocialMedia />
        </div>
      </div>
    </header>
    <div class="w-full max-w-3xl mt-12 flex flex-col items-center">
      <span class="text-6xl font-bold text-slate-900 dark:text-slate-300"
        ><span class="text-primary">O</span>munga</span
      >
      <UInput
        class="w-full mt-8"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
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
                type: 'articles',
              },
            })
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref<string>("");
</script>
