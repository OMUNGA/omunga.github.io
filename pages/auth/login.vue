<template>
  <Container>
    <div>
      <div class="flex items-center justify-between pt-8">
        <OButton
          to="/"
          variant="unstyle"
          class="cursor-pointer flex items-center gap-2 bg-transparent border-0 text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
        >
          <div class="i-material-symbols-arrow-left-alt-rounded text-2xl"></div>
          <span> Home </span>
        </OButton>
        <div class="flex gap-2 items-center">
          <ThemeToggle />
          <SocialMedia />
        </div>
      </div>
      <div class="flex flex-col items-center mt-16 gap-4">
        <Logo variant="full" class="scale-100" />
        <div
          class="bg-[#fefefe] dark:bg-brand-shadow/10 gap-4 flex flex-col relative w-[300px] p-[20px] rounded-md border border-solid border-brand-border-white dark:border-brand-border-dark"
        >
          <div class="w-full">
            <OInput placeholder="username">
              <template #label>
                <span class="dark:text-white text-sm">Username</span>
              </template>
            </OInput>
          </div>
          <div class="w-full">
            <OInput placeholder="password" type="password">
              <template #label>
                <span class="dark:text-white text-sm">Password</span>
              </template>
            </OInput>
          </div>
          <div class="w-full text-right">
            <OButton
              variant="unstyle"
              class="cursor-pointer font-semibold dark:font-normal bg-transparent border-0 text-brand-primary"
              >Esqueceu a senha?</OButton
            >
          </div>
          <div class="w-full">
            <OButton class="w-full">Entrar</OButton>
          </div>
          <span class="text-xs dark:text-white/50 text-black/50 text-center"
            >ou continuar com</span
          >
          <div class="flex gap-4">
            <OButton
              class="opacity-70 hover:opacity-100 w-full px-[18px] py-[14px] rounded-md border-0 dark:bg-brand-border-dark bg-brand-border-white cursor-pointer flex justify-center items-center"
              variant="unstyle"
            >
              <div class="i-logos-google-icon text-2xl" />
            </OButton>
            <OButton
              class="opacity-70 hover:opacity-100 w-full px-[18px] py-[14px] rounded-md border-0 dark:bg-brand-border-dark bg-brand-border-white cursor-pointer flex justify-center items-center"
              variant="unstyle"
            >
              <div
                class="i-grommet-icons-github dark:text-slate-300 text-2xl"
              />
            </OButton>
          </div>
          <span class="text-sm dark:text-white/50 text-black/50 text-center">
            Novo no omunga?
            <OButton
              variant="unstyle"
              class="bg-transparent border-0 text-brand-primary font-semibold dark:font-normal cursor-pointer"
              >Criar conta</OButton
            >
          </span>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import {
  OInput,
  Container,
  OButton,
  SocialMedia,
  ThemeToggle,
} from "~/components";

definePageMeta({
  alias: "/login",
  layout: "auth",
});
</script>
