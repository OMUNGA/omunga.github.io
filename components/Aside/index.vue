<template>
  <USlideover
    v-model="model"
    :ui="{
      width: 'w-full sm:max-w-sm max-w-xs',
    }"
  >
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-end gap-2">
          <SearchBar class="w-full" />
          <ThemeToggle />
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            size="xs"
            @click="model = false"
          />
        </div>
      </template>

      <div class="h-full">
        <UVerticalNavigation :links="links">
          <template #teste> apenas testando </template>
        </UVerticalNavigation>
      </div>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store";
import { useAuth } from "@/composables";
import { ThemeToggle, SearchBar } from "@/components";

const model = defineModel();

const authStore = useAuthStore;

const { user } = storeToRefs(authStore());
const { setUser } = authStore();
const { logout } = useAuth();
const links = [
  [
    {
      avatar: {
        src: user.value.photo,
        alt: user.value.name,
      },
      label: user.value.name,
      to: `/@${user.value.username}`,
    },
  ],
  [
    {
      label: "Criar artigo",
      icon: "i-heroicons-pencil-square-20-solid",
      to: "/new",
    },
    {
      label: "Criar forum",
      icon: "i-carbon-communication-unified",
    },
  ],
  [
    {
      label: "Teus artigos",
      icon: "i-heroicons-book-open",
    },
    {
      label: "Teus forums",
      icon: "i-carbon-building",
    },
    {
      label: "Tuas recomendações",
      icon: "i-heroicons-bookmark",
    },
  ],
  [
    {
      label: "Editar perfil",
      icon: "i-carbon-settings",
      to: "/settings",
    },
  ],
  [
    {
      label: "Sair",
      click: onLogout,
    },
  ],
];

async function onLogout() {
  const response = await logout();
  if (response.statusCode == 200) {
    const onSave = await setUser(response.data);
    if (!onSave) {
      return reloadNuxtApp();
    }
  }
}
</script>
