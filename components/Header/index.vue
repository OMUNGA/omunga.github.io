<template>
  <header
    class="h-16 flex w-full shadow-sm bg-white/75 dark:bg-brand-dark/75 backdrop-blur dark:shadow-[#1C273D]/50 sticky top-0"
  >
    <Container>
      <div class="h-full w-full flex justify-between items-center gap-4">
        <div class="flex justify-center items-center">
          <OButton variant="unstyle" class="bg-transparent border-0" to="/">
            <Logo />
          </OButton>
        </div>
        <div class="w-[500px]">
          <OInput placeholder="Pesquise por um assunto">
            <template #icon>
              <div
                class="i-ic-outline-search text-2xl text-black/35 dark:text-white/35"
              ></div>
            </template>
          </OInput>
        </div>
        <div class="flex gap-2 items-center">
          <div class="flex gap-4">
            <OButton variant="link" to="login"> Entrar </OButton>

            <OButton class="text-nowrap" to="register"> Criar conta </OButton>
          </div>
          <div class="text-brand-border-white dark:text-brand-border-dark">
            |
          </div>
          <div class="flex gap-2 items-center">
            <Menu :isOpen="isOpen">
              <OButton
                variant="unstyle"
                class="bg-transparent border-0"
                @click="toggleMenu"
              >
                <div
                  class="i-carbon-sun dark:i-carbon-moon cursor-pointer text-2xl text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
                ></div>
              </OButton>
            </Menu>

            <div class="text-brand-border-white dark:text-brand-border-dark">
              |
            </div>

            <OButton variant="unstyle" class="bg-transparent border-0">
              <div
                class="i-grommet-icons-github text-2xl cursor-pointer text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
              ></div>
            </OButton>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { Logo, OButton, OInput, Menu, Container } from "@/components";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>
