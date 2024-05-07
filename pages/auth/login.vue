<template>
  <Container>
    <div class="flex flex-col items-center py-8 gap-4">
      <div class="flex flex-col items-center gap-4">
        <Logo variant="full" class="scale-100" />
        <span class="text-sm dark:text-white/50 text-black/50"
          >Faça login na sua conta
          <span class="text-xs text-brand-primary font-semibold">Omunga</span> e
          desfrute já</span
        >
      </div>
      <div
        class="bg-[#fefefe] dark:bg-brand-shadow/10 gap-4 flex flex-col relative w-[300px] p-[20px] rounded-md border border-solid border-brand-border-white dark:border-brand-border-dark"
      >
        <div class="w-full">
          <OInput placeholder="email" v-model="credentials.email">
            <template #label>
              <span class="dark:text-white text-sm">Email</span>
            </template>
          </OInput>
        </div>
        <div class="w-full">
          <OInput
            placeholder="password"
            type="password"
            v-model="credentials.password"
          >
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
          <OButton @click="handleLogin()" class="w-full">Entrar</OButton>
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
            <div class="i-grommet-icons-github dark:text-slate-300 text-2xl" />
          </OButton>
        </div>
        <span class="text-sm dark:text-white/50 text-black/50 text-center">
          Novo no omunga?
          <OButton
            variant="unstyle"
            to="/register"
            class="bg-transparent border-0 text-brand-primary font-semibold dark:font-normal cursor-pointer"
            >Criar conta</OButton
          >
        </span>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { OInput, Container, OButton } from "~/components";
import { useAuthStore } from "@/store";
import { useAuth } from "@/composables";
definePageMeta({
  alias: "/login",
  layout: "auth",
});

const { login } = useAuth();
const { setUser } = useAuthStore();
interface ILogin {
  email: string;
  password: string;
}
const credentials = reactive<ILogin>({
  email: "",
  password: "",
});

async function handleLogin() {
  const response = await login({ ...credentials });
  if (response?.statusCode == 200) {
    const onSave = await setUser(response.data);
    if (onSave) {
      navigateTo("/");
    }
  } else {
    console.log(response);
  }
}
</script>
