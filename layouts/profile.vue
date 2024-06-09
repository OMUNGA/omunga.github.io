<template>
  <div class="min-h-screen dark:bg-gray-900">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/components";
</script>
