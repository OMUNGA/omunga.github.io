<template>
  <div class="min-h-screen dark:bg-gray-900">
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
        <div class="flex gap-4 items-center">
          <ThemePicker />
          <button @click="isOpen = true">
            <UAvatar
              :src="user.photo"
              :alt="user.name"
              size="md"
              class="cursor-pointer"
            />
          </button>
        </div>
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
import { useAuthStore } from "~/store";

const { user } = storeToRefs(useAuthStore());
const isOpen = ref(false);
</script>
