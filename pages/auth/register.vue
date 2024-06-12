<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useAuthStore } from "@/store";
import { useUser } from "@/composables";
import type { IRegisterRequest } from "@/types";

definePageMeta({
  alias: "/register",
  layout: "auth",
});

const schema = z.object({
  name: z.string().min(3, "nome inválido"),
  username: z.string().min(3, "username inválido"),
  email: z.string().email("email inválido"),
  password: z.string().min(8, "a senha deve conter pelo menos 8 caracteres"),
});

type Schema = z.output<typeof schema>;

const { register } = useUser();
const { setUser } = useAuthStore();

const state = reactive<IRegisterRequest>({
  name: "",
  username: "",
  email: "",
  password: "",
});

const error = ref("");
const isLoading = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isLoading.value = true;
  const response = await register({ ...state });
  isLoading.value = false;
  if (response?.statusCode == 200) {
    navigateTo("/login");
  } else {
    error.value = response?.message || "";
  }
}

watch([state], () => {
  error.value = "";
});
</script>

<template>
  <UContainer>
    <div class="flex flex-col items-center py-8 gap-4">
      <div class="flex flex-col items-center gap-4">
        <Logo variant="full" class="scale-100" />
        <span class="text-sm dark:text-white/50 text-black/50"
          >Crie a sua conta
          <span class="text-xs text-primary font-semibold">Omunga</span> e
          desfrute já</span
        >
      </div>
      <UCard class="w-full max-w-xs">
        <UForm
          :schema="schema"
          :state="state"
          class="w-full space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Nome" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <div v-if="error" class="w-full flex justify-center">
            <span class="text-sm font-semibold text-red-600 dark:text-red-400">
              {{ error }}
            </span>
          </div>
          <UButton
            type="submit"
            loading-icon="i-carbon-circle-dash"
            :loading="isLoading"
            block
          >
            <span class="text-white"> Criar conta </span>
          </UButton>
          <UDivider label="ou" />
          <div class="w-full max-w-xs flex justify-center items-end gap-4">
            <UButton
              icon="i-logos-google-icon"
              color="gray"
              variant="ghost"
              size="lg"
              disabled
            />
            <UButton
              icon="i-carbon-logo-github"
              color="gray"
              variant="ghost"
              size="lg"
              disabled
            />
          </div>
          <div class="flex justify-center">
            <span class="text-sm dark:text-white/50 text-black/50"
              >Novo no omunga?
              <ULink
                to="/login"
                class="text-primary"
                active-class="text-primary"
              >
                Entrar
              </ULink>
            </span>
          </div>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>
