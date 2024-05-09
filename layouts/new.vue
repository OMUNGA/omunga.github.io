<template>
  <div class="min-h-screen dark:bg-brand-dark">
    <header class="h-16 flex items-center container mx-auto">
      <div class="w-full flex items-center justify-between mx-4">
        <UButton
          to="/"
          variant="ghost"
          color="gray"
          class="text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
          icon="i-heroicons-arrow-left-20-solid"
          label="home"
        />
        <UAvatar
          :src="AvatarImage"
          @click="isOpen = true"
          alt="User User"
          size="lg"
          class="cursor-pointer"
        />
        <Aside v-model="isOpen" />
      </div>
    </header>
    <section>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import AvatarImage from "@/public/avatar.jpg";

const isOpen = ref(false);
</script>
