<template>
  <UCard>
    <div v-if="user" class="w-full flex items-start gap-4">
      <UAvatar size="xl" :src="user.photo" :alt="user.name" />
      <div class="w-full flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <ULink :to="`/@${user.username}`">
            <span class="text-primary text-lg">{{ user.name }}</span>
          </ULink>
          <ULink :to="`/@${user.username}`">
            <span class="text-sm font-light opacity-50">{{
              user.username
            }}</span>
          </ULink>
        </div>
        <div class="text-sm">{{ user.bio }}</div>
        <div class="text-sm font-light opacity-50">
          cape town | south africa
        </div>
      </div>
      <UButton color="white" size="lg" variant="solid" label="seguir" />
    </div>
    <template v-else>
      <CardSkeleton />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { IUserSchema } from "~/types";
import { CardSkeleton } from "@/components";

defineProps<{
  user: IUserSchema;
}>();
</script>
