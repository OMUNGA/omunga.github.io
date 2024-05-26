<template>
  <UCard>
    <div v-if="article" class="w-full flex gap-4">
      <div class="w-full flex flex-col gap-2">
        <div class="w-full flex gap-4">
          <UAvatar :src="AvatarImage" alt="User User" size="lg" />
          <div
            class="text-slate-900 dark:text-white flex flex-col justify-around text-black/50"
          >
            <span>{{ article.user.name }}</span>
            <span class="text-xs">{{ article.createdAt }}</span>
          </div>
        </div>
        <div
          class="block sm:hidden md:block lg:hidden rounded overflow-hidden w-full h-[150px]"
        >
          <img class="object-cover w-full h-full" src="/project.png" alt="" />
        </div>
        <div class="">
          <span class="font-bold text-2xl text-slate-900 dark:text-white">{{
            article.title
          }}</span>
        </div>
        <div class="">
          <span class="text-slate-600 dark:text-slate-400 font-light">
            In the fast-evolving landscape of web development, staying abreast
            of the latest tools can significantly impact the efficiency,
            quality, and innovation of your projects.
          </span>
        </div>
        <div
          class="flex justify-center sm:justify-start md:justify-center lg:justify-start gap-2 mt-4"
        >
          <UBadge
            variant="solid"
            color="gray"
            class="font-normal"
            size="md"
            :ui="{ rounded: 'rounded-full' }"
            v-for="tag in article.tags"
            >{{ tag }}</UBadge
          >
        </div>
      </div>
      <div class="hidden sm:flex md:hidden lg:flex items-center">
        <div class="rounded overflow-hidden">
          <img class="object-cover w-full" src="/project.png" alt="" />
        </div>
      </div>
    </div>
    <template v-else>
      <CardSkeleton />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { CardSkeleton } from "@/components";
import AvatarImage from "@/public/avatar.jpg";
import type { IArticle } from "@/types/article";

defineProps<{
  article: IArticle;
}>();
</script>
