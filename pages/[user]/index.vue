<template>
  <span v-if="user[0].startsWith('@')">
    user: {{ useRoute().params.user }}
  </span>
  <span v-else> user not found </span>
</template>

<script setup lang="ts">
const { user } = useRoute().params;
</script>
