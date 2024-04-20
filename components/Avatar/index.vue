<template>
  <div class="w-12 h-12 rounded-full overflow-hidden">
    <img class="w-full object-cover" src="@/assets/avatar.jpg" alt="" />
  </div>
</template>

<script setup lang="ts">
const { src } = defineProps<{ src?: string }>();
</script>
