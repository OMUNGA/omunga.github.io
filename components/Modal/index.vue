<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="model = false" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 h-screnn w-screen">
        <div class="absolute top-4 right-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
            >
              <slot name="content" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const model = defineModel();
</script>
