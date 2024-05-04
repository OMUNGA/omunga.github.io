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
              class="fixed top-0 right-0 w-full h-screen max-w-[220px] sm:max-w-xs bg-white rounded-lg shadow-lg p-4 text-base font-semibold text-slate-900 dark:bg-[#0C121E] border border-l-solid border-brand-border-white dark:border-brand-border-dark drop-shadow-lg dark:text-slate-400 dark:highlight-white/5"
            >
              <div class="absolute top-2 right-2">
                <OButton
                  @click="closeModal"
                  variant="unstyle"
                  class="outline-none focus:outline-none cursor-pointer p-0 border-0 bg-transparent text-black/35 dark:text-white/35"
                >
                  <div
                    class="i-material-symbols-close-rounded text-2xl"
                    aria-hidden="true"
                  ></div>
                </OButton>
              </div>
              <div
                class="flex mt-2 flex-col divide-y divide-solid divide-black/5 dark:divide-white/5"
              >
                <div class="py-1">
                  <OButton
                    :to="'/@' + user.username"
                    variant="unstyle"
                    class="border-0 bg-transparent w-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded"
                  >
                    <div class="flex gap-2 p-2">
                      <Avatar src="/avatar.jpg" class="w-10 h-10" />
                      <div class="flex flex-col">
                        <span
                          class="font-bold text-sm text-slate-900 dark:text-white"
                          >{{ user.name }}</span
                        >
                        <span
                          class="text-sm text-slate-600 dark:text-slate-400 font-light"
                          ><span class="text-xs">@</span
                          >{{ user.username }}</span
                        >
                      </div>
                    </div>
                  </OButton>
                </div>

                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-pen-fountain text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Criar artigo
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-forum text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Criar forum
                    </span>
                  </OButton>
                </div>

                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-material-symbols-book-3-rounded text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Teus artigos
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-mdi-google-circles-communities text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Teus foruns
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-bookmark text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Tuas recomendações
                    </span>
                  </OButton>
                </div>
                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-settings text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Editar perfil
                    </span>
                  </OButton>
                  <div class="border-0 w-full py-1 flex flex-col">
                    <ThemeToggle>
                      <template #button>
                        <OButton
                          variant="unstyle"
                          class="w-full bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                        >
                          <div
                            class="i-carbon-sun dark:i-carbon-moon text-xl text-brand-dark dark:text-slate-600"
                          ></div>
                          <span class="text-slate-900 dark:text-white">
                            Trocar tema
                          </span>
                        </OButton>
                      </template>
                    </ThemeToggle>
                  </div>
                </div>
                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    @click="handleLogout"
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <span class="text-slate-900 dark:text-white"> Sair </span>
                  </OButton>
                </div>
              </div>
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
import { OButton } from "@/components";
import { useAuthStore } from "~/store";

const { isAuthenticated, user, logout } = useAuthStore();

const isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

async function handleLogout() {
  const response = await logout();
  if (response) return reloadNuxtApp();
}

defineExpose({ openModal, closeModal });
</script>
