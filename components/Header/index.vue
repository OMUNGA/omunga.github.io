<template>
  <header
    class="h-16 flex w-full shadow-sm bg-white/75 dark:bg-brand-dark/75 backdrop-blur dark:shadow-brand-shadow/50 sticky top-0"
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
            <ThemeToggle />
            <div class="text-brand-border-white dark:text-brand-border-dark">
              |
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import {
  Logo,
  OButton,
  OInput,
  Container,
  ThemeToggle,
  SocialMedia,
} from "@/components";
</script>
