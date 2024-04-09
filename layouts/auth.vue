<template>
  <div class="min-h-screen dark:bg-brand-dark">
    <header class="h-16 flex items-center container mx-auto mx-4">
      <div class="w-full flex items-center justify-between">
        <OButton
          to="/"
          variant="unstyle"
          class="cursor-pointer flex items-center gap-2 bg-transparent border-0 text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
        >
          <div class="i-material-symbols-arrow-left-alt-rounded text-2xl"></div>
          <span> Home </span>
        </OButton>
        <div class="flex gap-2 items-center">
          <ThemeToggle />
          <div class="text-brand-border-white dark:text-brand-border-dark">
            |
          </div>
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
import { OButton, SocialMedia, ThemeToggle } from "@/components";
</script>
