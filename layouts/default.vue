<template>
  <div class="min-h-screen">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/components";
</script>
