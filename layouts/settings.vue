<template>
  <div class="min-h-screen bg-gray-900">
    <Header />
    <UContainer>
      <div class="w-full flex flex-col mt-6 gap-4">
        <div class="w-full">
          <div class="flex items-center gap-4">
            <UAvatar :src="user.photo" size="lg" />
            <h1>
              {{ user.name }} <span>({{ user.username }})</span>
            </h1>
          </div>
        </div>
        <div class="w-full flex gap-8">
          <UVerticalNavigation :links="links"> </UVerticalNavigation>
          <div class="w-full">
            <slot />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import AvatarImage from "@/public/avatar.jpg";
import { Header } from "@/components";
import { useAuthStore } from "@/store";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const links = [
  {
    label: "Profile",
    icon: "i-heroicons-home",
    to: "/settings/profile",
  },
  {
    label: "Account",
    icon: "i-heroicons-cog-6-tooth",
    to: "/settings/admin",
  },
  {
    label: "Security",
    icon: "i-heroicons-finger-print-20-solid",
    to: "/settings/security",
  },
];
</script>
