<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-100">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-brand-dark/30 backdrop-blur-[2px]" />
      </TransitionChild>

      <div class="fixed inset-0 h-screnn w-screen">
        <div class="absolute top-4 right-4">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-100 translate-x-full"
            enter-to="opacity-100 translate-x-0 scale-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100 translate-x-0"
            leave-to="opacity-0 translate-x-full"
          >
            <DialogPanel
              class="fixed top-0 right-0 w-full h-screen max-w-xs bg-white rounded-lg shadow-lg p-4 text-base font-semibold text-slate-900 dark:bg-[#0C121E] border border-l-solid border-brand-border-white dark:border-brand-border-dark drop-shadow-lg dark:text-slate-400 dark:highlight-white/5"
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

const isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

defineExpose({ openModal, closeModal });
</script>
