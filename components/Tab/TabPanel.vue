<template>
  <div v-show="panel == selectedPanel">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { panel } = defineProps<{ panel: string }>();
const selectedPanel = inject("selectedPanel");
</script>
