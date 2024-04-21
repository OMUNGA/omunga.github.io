<template>
  <header
    class="h-16 fixed z-50 flex w-full shadow-sm bg-white dark:bg-brand-dark dark:shadow-brand-shadow/50 top-0"
  >
    <Container>
      <div class="h-16 w-full flex justify-between items-center gap-4">
        <div class="sm:flex justify-center items-center">
          <OButton variant="unstyle" class="bg-transparent border-0" to="/">
            <Logo />
          </OButton>
        </div>
        <div class="hidden md:block w-[500px]">
          <OInput placeholder="Pesquise por um assunto">
            <template #icon>
              <div
                class="i-ic-outline-search text-2xl text-black/35 dark:text-white/35"
              ></div>
            </template>
          </OInput>
        </div>
        <div class="hidden md:flex gap-2 items-center">
          <div class="flex gap-4">
            <OButton variant="link" to="login"> Entrar </OButton>

            <OButton class="text-nowrap" to="register"> Criar conta </OButton>
          </div>
          <div class="text-brand-border-white dark:text-brand-border-dark">
            |
          </div>
          <div class="flex gap-2 items-center">
            <ThemeToggle />
            <div class="text-brand-border-white dark:text-brand-border-dark">
              |
            </div>
            <SocialMedia />
          </div>
        </div>
        <div class="flex justify-center gap-4 items-center md:hidden">
          <OButton
            variant="unstyle"
            class="border-0 cursor-pointer bg-transparent p-2 text-black/35 dark:text-white/35"
          >
            <div class="i-ic-outline-search text-2xl"></div>
          </OButton>
          <OButton
            @click="modalRef.openModal()"
            variant="unstyle"
            class="border-0 cursor-pointer bg-transparent p-2 text-black/35 dark:text-white/35"
          >
            <div
              class="i-material-symbols-menu-rounded text-3xl"
              aria-hidden="true"
            ></div>
          </OButton>
          <Modal ref="modalRef">
            <template #content>
              <div class="absolute top-4 right-4">
                <OButton
                  @click="modalRef.closeModal"
                  variant="unstyle"
                  class="cursor-pointer border-0 bg-transparent text-black/35 dark:text-white/35"
                >
                  <div
                    class="i-material-symbols-close-rounded text-2xl"
                    aria-hidden="true"
                  ></div>
                </OButton>
              </div>
              <div class="flex flex-col gap-4 items-start">
                <OButton
                  to="login"
                  variant="unstyle"
                  class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                  >Entrar</OButton
                >
                <OButton
                  to="register"
                  variant="unstyle"
                  class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                  >Criar Conta</OButton
                >
                <OButton
                  variant="unstyle"
                  class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                  >Github</OButton
                >
                <div
                  class="border-0 w-full border-t-1 border-solid border-black/15 dark:border-white/15"
                >
                  <div class="mt-4 flex gap-4">
                    <span class="font-normal">Mudar Tema</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </template>
          </Modal>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import {
  Logo,
  OButton,
  OInput,
  Container,
  ThemeToggle,
  SocialMedia,
  Modal,
} from "@/components";

const modalRef = ref(null);
</script>
