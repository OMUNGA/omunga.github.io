<template>
  <div
    class="gap-6 p-5 flex rounded border border-solid border-brand-border-white dark:border-brand-border-dark"
  >
    <div class="w-full flex flex-col gap-2">
      <div class="w-full flex gap-4">
        <Avatar />
        <div
          class="text-slate-900 dark:text-white flex flex-col justify-around text-black/50"
        >
          <span>Miguel Domingos</span>
          <span class="text-xs">20 Abril 2024</span>
        </div>
      </div>
      <div
        class="block sm:hidden md:block lg:hidden rounded overflow-hidden w-full h-[150px]"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/project.png"
          alt=""
        />
      </div>
      <div class="text-center sm:text-left md:text-center lg:text-left">
        <span class="font-bold text-2xl text-slate-900 dark:text-white"
          >24 Frontend Development Tools You Should Know in 2024</span
        >
      </div>
      <div class="text-center sm:text-left md:text-center lg:text-left">
        <span class="text-slate-600 dark:text-slate-400 font-light">
          In the fast-evolving landscape of web development, staying abreast of
          the latest tools can significantly impact the efficiency, quality, and
          innovation of your projects.
        </span>
      </div>
      <div
        class="flex justify-center sm:justify-start md:justify-center lg:justify-start gap-2.5 mt-5"
      >
        <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30">Vue.js</Chip>
        <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30">Framework</Chip>
        <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30">Frontend</Chip>
      </div>
    </div>
    <div class="hidden sm:flex md:hidden lg:flex items-center">
      <div class="rounded overflow-hidden">
        <img class="object-cover w-full" src="@/assets/project.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, Chip } from "@/components";
</script>
