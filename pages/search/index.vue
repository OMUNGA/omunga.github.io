<template>
  <div v-if="q" class="">pesquisar por: {{ q }}</div>
  <div v-else class="">não tem query</div>
</template>

<script setup lang="ts">
const { q } = useRoute().query;
</script>
