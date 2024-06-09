<template>
  <UCard>
    <div v-if="article" class="w-full flex gap-4">
      <div class="w-full flex flex-col gap-2">
        <div class="w-full flex gap-4">
          <ULink :to="`/@${article.user.username}`">
            <UAvatar :src="AvatarImage" alt="User User" size="lg" />
          </ULink>
          <div
            class="text-slate-900 dark:text-white flex flex-col justify-center text-black/50"
          >
            <ULink :to="`/@${article.user.username}`">
              <span>{{ article.user.name }}</span>
            </ULink>
            <span class="text-xs">{{
              formatDistance(article.createdAt, new Date(), { addSuffix: true })
            }}</span>
          </div>
        </div>
        <div
          class="block cursor-pointer sm:hidden md:block lg:hidden rounded overflow-hidden w-full h-[150px]"
        >
          <ULink
            class="w-full h-full"
            :to="`/@${article.user.username}/${article.slug}`"
          >
            <img
              class="object-cover w-full h-full"
              :src="article.cover || '/project.png'"
              alt=""
            />
          </ULink>
        </div>
        <div class="">
          <span class="font-bold text-2xl text-slate-900 dark:text-white">{{
            article.title
          }}</span>
        </div>
        <div class="">
          <span class="text-slate-600 dark:text-slate-400 font-light">
            {{ article.description }}
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
        <div class="rounded overflow-hidden cursor-pointer w-[150px] h-[150px]">
          <ULink
            class="w-full h-full"
            :to="`/@${article.user.username}/${article.slug}`"
          >
            <img
              class="object-cover w-full h-full"
              :src="article.cover"
              alt=""
            />
          </ULink>
        </div>
      </div>
    </div>
    <template v-else>
      <CardSkeleton />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { formatDistance } from "date-fns";
import { CardSkeleton } from "@/components";
import AvatarImage from "@/public/avatar.jpg";
import type { IArticle } from "@/types/article";

defineProps<{
  article: IArticle;
}>();
</script>
