<template>
  <div class="min-h-screen dark:bg-brand-dark">
    <header class="h-16 flex items-center container mx-auto">
      <div class="w-full flex items-center justify-between mx-4">
        <OButton
          to="/"
          variant="unstyle"
          class="cursor-pointer flex items-center gap-2 bg-transparent border-0 text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
        >
          <div class="i-material-symbols-arrow-left-alt-rounded text-2xl"></div>
          <span> Home </span>
        </OButton>
        <div @click="authenticatedModal.openModal">
          <Avatar src="/avatar.jpg" class="w-10 h-10" />
        </div>

        <Aside ref="authenticatedModal" />
      </div>
    </header>
    <section>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { OButton } from "@/components";

const authenticatedModal = ref(null);
</script>
