<template>
  <div class="w-full flex">
    <div class="flex-1 gap-6 pb-4 flex flex-col items-start">
      <UFormGroup
        label="Nome"
        name="nome"
        help="diferente do nome de usuário(apelido), esse é o teu nome"
      >
        <UInput class="w-full max-w-xs" v-model="state.name" />
      </UFormGroup>

      <UFormGroup class="w-full" label="Bio" name="bio">
        <UTextarea resize class="w-full max-w-xs" v-model="state.bio" />
      </UFormGroup>

      <UFormGroup label="Imagem de Perfil" name="photo">
        <div class="flex items-center gap-4">
          <UAvatar :src="state.photo" size="xl" :alt="state.name" />
          <UInput
            :loading="photoUploading"
            type="file"
            icon="i-heroicons-folder"
            loading-icon="i-carbon-circle-dash"
            @change="updatePhotoImage($event)"
          />
        </div>
      </UFormGroup>

      <UFormGroup label="Imagem de Capa" name="cover">
        <div class="flex items-center gap-4">
          <UAvatar :src="state?.cover" size="xl" :alt="state?.name" />
          <UInput
            :loading="coverUploading"
            type="file"
            icon="i-heroicons-folder"
            loading-icon="i-carbon-circle-dash"
            @change="updateCoverImage($event)"
          />
        </div>
      </UFormGroup>

      <UFormGroup
        class="w-full max-w-xs"
        label="Redes Sociais"
        name="social_accounts"
      >
        <div class="w-full flex flex-col gap-2">
          <div class="w-full flex items-center gap-2">
            <UIcon name="i-heroicons-link-20-solid" class="opacity-50" />
            <UInput
              size="xs"
              class="w-full"
              placeholder="Link da rede social"
            />
          </div>
          <div class="w-full flex items-center gap-2">
            <UIcon name="i-heroicons-link-20-solid" class="opacity-50" />
            <UInput
              size="xs"
              class="w-full"
              placeholder="Link da rede social"
            />
          </div>
          <div class="w-full flex items-center gap-2">
            <UIcon name="i-heroicons-link-20-solid" class="opacity-50" />
            <UInput
              size="xs"
              class="w-full"
              placeholder="Link da rede social"
            />
          </div>
          <div class="w-full flex items-center gap-2">
            <UIcon name="i-heroicons-link-20-solid" class="opacity-50" />
            <UInput
              size="xs"
              class="w-full"
              placeholder="Link da rede social"
            />
          </div>
        </div>
      </UFormGroup>

      <UButton
        type="submit"
        @click="onSubmit"
        loading-icon="i-carbon-circle-dash"
        :loading="isLoading"
      >
        <span class="text-white font-normal">Atualizar</span>
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store";
import type { IUserSchema } from "@/types";
import { useUser, useFile } from "@/composables";

definePageMeta({
  alias: "/settings",
  layout: "settings",
});

const toast = useToast();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { updateUserStore } = authStore;
const { updateUser } = useUser();
const { uploadImage } = useFile();
const isLoading = ref(false);
const photoUploading = ref(false);
const coverUploading = ref(false);
const state = ref<IUserSchema>();

async function updatePhotoImage(e: File[]) {
  photoUploading.value = true;
  const upload = await uploadImage(e[0], state.value?.photo);
  if (upload.success == 1) {
    const imageUrl = upload.file.url;
    const response = await updateUser({ photo: imageUrl });
    if (response) {
      const onSave = await updateUserStore({ ...state.value, photo: imageUrl });
      if (onSave) {
        photoUploading.value = false;
        useToast().add({ title: "foto de perfil atualizada", timeout: 2000 });
      }
    }
  }
}

async function updateCoverImage(e: File[]) {
  coverUploading.value = true;
  const upload = await uploadImage(e[0], state.value?.photo);
  if (upload.success == 1) {
    const imageUrl = upload.file.url;
    const response = await updateUser({ cover: imageUrl });
    if (response) {
      const onSave = await updateUserStore({ ...state.value, cover: imageUrl });
      if (onSave) {
        coverUploading.value = false;
        useToast().add({ title: "foto de capa atualizada", timeout: 2000 });
      }
    }
  }
}

async function onSubmit() {
  isLoading.value = true;
  const response = await updateUser(state.value);
  if (response?.statusCode == 200) {
    const osSave = await updateUserStore(state.value);
    if (osSave) {
      isLoading.value = false;
      toast.add({ title: "Usuário atualizado", timeout: 2000 });
    }
  } else {
    console.log(response);
  }
}

watchEffect(() => {
  state.value = { ...user.value };
  delete state.value.id;
});
</script>
