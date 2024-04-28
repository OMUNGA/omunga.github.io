<template>
  <div>
    <div class="flex gap-2">
      <OButton
        variant="unstyle"
        class="bg-transparent border-0 cursor-pointer text-base text-slate-900 dark:text-white"
        @click="selectedPanel = panel"
        v-for="panel in Panels"
        >{{ panel }}</OButton
      >
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { OButton } from "@/components";
const slots = defineSlots();
const Panels = ref(slots.default().map((panel: any) => panel.props.panel));
const selectedPanel = ref(Panels.value[0]);

provide("selectedPanel", selectedPanel);
</script>
