<template>
  <div class="flex flex-col">
    <div class="flex-1 gap-4 flex flex-col items-start">
      <UFormGroup
        label="Username"
        name="username"
        help="O nome de usuário é único e usado para identificar a tua conta"
      >
        <UInput
          :disabled="true"
          :model-value="username"
          class="w-full max-w-xs"
        />
      </UFormGroup>
      <UFormGroup
        label="Email"
        name="email"
        help="O email é usado para localizar a tua conta no acto de login"
      >
        <UInput :disabled="true" :model-value="email" class="w-full max-w-xs" />
      </UFormGroup>
    </div>
    <div class="prose-sm mt-10">
      <h1 class="text-red-500 mb-4">Apagar conta</h1>
      <UDivider />
      <div class="mt-4 flex flex-col items-start gap-2">
        <span class="opacity-50"
          >Antes de confirmar tenha a certeza que deseja eliminar a tua conta
          permanentemente, esse processo não pode ser desfeito</span
        >
        <UButton variant="solid" color="gray">
          <span class="text-red-500">apagar conta</span>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store";

definePageMeta({
  layout: "settings",
  alias: "/settings/admin",
});

const { username, email } = useAuthStore().user;
</script>
