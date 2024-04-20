<template>
  <div
    class="max-w-80 py-5 px-4 gap-6 flex flex-col items-start rounded border border-solid border-brand-border-white dark:border-brand-border-dark"
  >
    <span class="text-base font-semibold dark:text-white text-slate-900"
      >Topicos mais pesquisados</span
    >
    <div class="flex flex-wrap gap-2">
      <Chip
        class="cursor-pointer hover:bg-black/5 dark:hover:bg-white/5"
        v-for="(topic, index) in topics"
        :id="index.toString()"
        >{{ topic }}</Chip
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chip } from "@/components";
const { topics } = defineProps<{ topics: string[] }>();
</script>
