<template>
  <div class="min-h-screen dark:bg-gray-900">
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
    <section>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { SocialMedia, ThemeToggle, ThemePicker } from "@/components";
</script>
