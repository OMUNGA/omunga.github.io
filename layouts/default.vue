<template>
  <div class="min-h-screen dark:bg-brand-dark">
    <Header />
    <section>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/components";
</script>
