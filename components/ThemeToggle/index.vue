<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="bg-transparent border-0">
        <div
          class="i-carbon-sun dark:i-carbon-moon cursor-pointer text-2xl text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
        ></div>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-0 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="w-[150px] shadow-sm ring-black/5 absolute right-0 origin-top-left focus:outline-none mt-3 py-[6px] bg-white dark:bg-brand-dark rounded-md right-0 border border-solid border-brand-border-white dark:border-brand-border-dark"
      >
        <MenuItem>
          <div
            @click="useDark('light')"
            class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]"
          >
            <div
              class="i-carbon-sun cursor-pointer text-2xl text-black/80 dark:text-slate-300"
            ></div>
            <span class="dark:text-white/90">Light</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div
            @click="useDark('dark')"
            class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]"
          >
            <div
              class="i-carbon-moon cursor-pointer text-2xl text-black/80 dark:text-slate-300"
            ></div>
            <span class="dark:text-white/90">Dark</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div
            @click="useDark('system')"
            class="flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-[18px] py-[6px]"
          >
            <div
              class="i-carbon-laptop cursor-pointer text-2xl text-black/80 dark:text-slate-300"
            ></div>
            <span class="dark:text-white/90">System</span>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { OButton } from "@/components";
</script>
