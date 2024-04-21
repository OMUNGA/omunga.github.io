<template>
  <div class="min-h-screen">
    <Header />
    <section class="pt-16">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/components";
</script>
