<template>
  <div v-bind="$attrs" class="cursor-pointer rounded-full overflow-hidden">
    <img class="w-full object-cover" :src alt="" />
  </div>
</template>

<script setup lang="ts">
const img = useImage();
const { src } = withDefaults(defineProps<{ src?: string }>(), {
  src: "/empty-avatar.jpeg",
});
</script>
