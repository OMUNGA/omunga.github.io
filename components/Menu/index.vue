<template>
  <div class="relative">
  <slot/>
  <div v-if="props.isOpen" class="absolute z-50 top-[150%] min-w-[75px] py-[6px] bg-white dark:bg-brand-dark rounded-md right-0 border border-solid border-brand-border-white dark:border-brand-border-dark ">
    <div class="flex flex-col">
      <div @click="useDark('light')" class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]">
        <div class="i-carbon-sun cursor-pointer text-2xl text-black/80 dark:text-slate-300"></div>
        <span class="dark:text-white/90">Light</span>
      </div>

      <div @click="useDark('dark')" class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]">
          <div class="i-carbon-moon cursor-pointer text-2xl text-black/80 dark:text-slate-300"></div>
        <span class="dark:text-white/90">Dark</span>
      </div>
      <div @click="useDark('system')" class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]">
          <div class="i-carbon-laptop cursor-pointer text-2xl text-black/80 dark:text-slate-300"></div>
        <span class="dark:text-white/90">System</span>
      </div>
     
    </div>
  </div>
    <!--
      Flyout menu, show/hide based on flyout menu state.
  
      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    -->
  
  </div>
  </template>
  
<script setup lang="ts">
import {useDark} from "@/composables"
import type {SystemThemeTypes} from "@/composables/useDark"

interface IMenu {
  isOpen?: boolean
  items?: IMenuItem[]
}

interface IMenuItem {
  label: string
  icon?: string
  onClick: (theme: SystemThemeTypes)=> void
}

const props = withDefaults(defineProps<IMenu>(),{
  isOpen: false
})

</script>