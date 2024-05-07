<template>
  <Container>
    <div class="flex flex-col items-center py-8 gap-4">
      <div class="flex flex-col items-center gap-4">
        <Logo variant="full" class="scale-100" />
        <span class="text-sm dark:text-white/50 text-black/50">
          Crie a sua conta
          <span class="text-xs text-brand-primary font-semibold">Omunga</span> e
          desfrute já</span
        >
      </div>
      <div
        class="bg-[#fefefe] dark:bg-brand-shadow/10 gap-4 flex flex-col relative w-[300px] p-[20px] rounded-md border border-solid border-brand-border-white dark:border-brand-border-dark"
      >
        <div class="w-full">
          <OInput placeholder="Nome" v-model="data.name">
            <template #label>
              <span class="dark:text-white text-sm">Nome</span>
            </template>
          </OInput>
        </div>
        <div class="w-full">
          <OInput placeholder="username" v-model="data.username">
            <template #label>
              <span class="dark:text-white text-sm">Username</span>
            </template>
          </OInput>
        </div>
        <div class="w-full">
          <OInput placeholder="email" v-model="data.email">
            <template #label>
              <span class="dark:text-white text-sm">Email</span>
            </template>
          </OInput>
        </div>
        <div class="w-full">
          <OInput
            placeholder="password"
            type="password"
            v-model="data.password"
          >
            <template #label>
              <span class="dark:text-white text-sm">Password</span>
            </template>
          </OInput>
        </div>
        <div class="w-full">
          <OButton class="w-full" @click="handleRegister()"
            >Criar conta</OButton
          >
        </div>
        <span class="text-xs dark:text-white/50 text-black/50 text-center"
          >ou criar conta com</span
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
            <div class="i-grommet-icons-github dark:text-slate-300 text-2xl" />
          </OButton>
        </div>
        <span class="text-sm dark:text-white/50 text-black/50 text-center">
          Já tem conta omunga?
          <OButton
            variant="unstyle"
            to="/login"
            class="bg-transparent border-0 text-brand-primary font-semibold dark:font-normal cursor-pointer"
            >Entrar</OButton
          >
        </span>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { OInput, Container, OButton } from "~/components";
import { useUser } from "@/composables";
definePageMeta({
  alias: "/register",
  layout: "auth",
});

const { register } = useUser();
interface IRegister {
  name: string;
  username: string;
  email: string;
  password: string;
}

const data = reactive<IRegister>({
  name: "",
  username: "",
  email: "",
  password: "",
});

async function handleRegister() {
  const response = await register({ ...data });

  if (response?.statusCode == 200) {
    navigateTo("/login");
  } else {
    console.log(response);
  }
}
</script>
