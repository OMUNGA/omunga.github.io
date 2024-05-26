<template>
  <header
    class="h-16 z-10 sticky flex w-full shadow-sm bg-white dark:bg-omunga-dark dark:shadow-omunga-shadow/50 top-0"
  >
    <UContainer class="w-full">
      <div class="w-full h-full flex justify-between items-center gap-4">
        <Logo @click="() => navigateTo('/')" class="cursor-pointer" />
        <UInput
          class="hidden md:block w-full max-w-lg"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="md"
          color="white"
          :trailing="false"
          placeholder="Pesquise por um assunto..."
        />
        <template v-if="isAuthenticated">
          <div class="flex items-center gap-4">
            <div class="flex gap-2">
              <UButton
                variant="outline"
                class="dark:hover:bg-transparent hidden sm:flex"
                label="Novo"
                size="lg"
                to="/new"
              />
              <UButton
                icon="i-heroicons-magnifying-glass-20-solid"
                variant="ghost"
                color="gray"
                class="flex sm:hidden"
              />
              <UButton
                icon="i-heroicons-bell-20-solid"
                variant="ghost"
                color="gray"
              >
              </UButton>
            </div>

            <UAvatar
              :src="AvatarImage"
              @click="isOpen = true"
              alt="User User"
              size="md"
              class="cursor-pointer"
            />
            <Aside v-model="isOpen" />
          </div>
        </template>
        <template v-else>
          <div class="hidden md:flex items-center gap-2">
            <div class="flex items-center">
              <UButton to="/login" color="white" variant="ghost" size="lg">
                <span class="font-normal"> Entrar </span>
              </UButton>

              <UButton
                class="text-nowrap"
                to="/register"
                color="primary"
                variant="solid"
                size="lg"
              >
                <span class="text-white font-normal"> Criar conta </span>
              </UButton>
            </div>
            <div class="flex items-center">
              <ThemeToggle />
              <SocialMedia />
            </div>
          </div>
          <div class="flex md:hidden">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-magnifying-glass-20-solid"
            />
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-bars-3-bottom-right-20-solid"
              @click="isOpenModal = true"
            />
            <Modal v-model="isOpenModal">
              <template #content>
                <div class="absolute top-4 right-4">
                  <UButton
                    icon="i-heroicons-x-mark-20-solid"
                    @click="isOpenModal = false"
                    variant="solid"
                    color="gray"
                  >
                  </UButton>
                </div>
                <div class="flex flex-col gap-4 items-start">
                  <ULink
                    to="/login"
                    active-class="text-gray-700"
                    inactive-class="text-omunga-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  >
                    Entrar
                  </ULink>

                  <ULink
                    to="/register"
                    active-class="text-gray-700"
                    inactive-class="text-omunga-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  >
                    Criar conta
                  </ULink>

                  <ULink
                    to="https://github.com/OMUNGA"
                    active-class="text-gray-700"
                    inactive-class="text-omunga-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  >
                    Github
                  </ULink>
                  <div
                    class="border-0 w-full border-t-1 border-solid border-black/15 dark:border-white/15"
                  >
                    <ThemeToggle :label="true" />
                  </div>
                </div>
              </template>
            </Modal>
          </div>
        </template>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import { Logo, ThemeToggle, SocialMedia, Modal } from "@/components";
import { useAuthStore } from "~/store";
import AvatarImage from "@/public/avatar.jpg";

const { isAuthenticated } = useAuthStore();
const isOpenModal = ref(false);
const isOpen = ref(false);
</script>
