<template>
  <div class="h-screen container dark:bg-brand-dark">
    <Header />
    <main>
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">
import {Header} from "@/components"
</script>