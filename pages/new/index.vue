<template>
  <UContainer>
    <UCard class="lg:w-full lg:max-w-2xl lg:mx-auto mx-2 mb-4">
      <div class="w-full flex justify-between">
        <div class="flex flex-1 mr-4 flex-col">
          <div class="max-w-xs">
            <UInput
              :loading="uploadingCover"
              type="file"
              icon="i-heroicons-folder"
              loading-icon="i-carbon-circle-dash"
              @change="uploadCover($event)"
            />
          </div>
          <UInput
            class="w-full *:text-3xl"
            placeholder="nome do artigo"
            variant="none"
            v-model="data.title"
          />
        </div>
        <UCard
          class="w-[100px] h-[100px] overflow-hidden"
          :ui="{
            body: {
              padding: '',
            },
          }"
        >
          <img
            v-if="data.cover"
            :src="data.cover"
            class="w-[100px] h-[100px] object-cover"
            alt=""
          />
        </UCard>
      </div>
    </UCard>

    <Editor ref="editorRef" />
    <div class="flex gap-4 lg:w-full lg:max-w-2xl lg:mx-auto mx-2 pb-4">
      <UButton
        size="lg"
        @click="handleOnSave(true)"
        loading-icon="i-carbon-circle-dash"
        :loading="loadingButtons.publish"
        :disabled="loadingButtons.draft"
      >
        <span class="text-white"> publicar </span>
      </UButton>
      <UButton
        size="lg"
        variant="ghost"
        color="primary"
        @click="handleOnSave(false)"
        loading-icon="i-carbon-circle-dash"
        :loading="loadingButtons.draft"
        :disabled="loadingButtons.publish"
        >Salvar Rascunho</UButton
      >
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { Editor } from "@/components";
import { useArticle, useFile } from "@/composables";
import { useAuthStore } from "@/store";

definePageMeta({
  layout: "new",
});
const { createArticle } = useArticle();
const { uploadImage } = useFile();
const username = useAuthStore().user.username;
interface ICreateArticle {
  title: string;
  description: string;
  cover: string;
  content: string;
  tags: string | string[];
  published: boolean;
}

const uploadingCover = ref(false);
const loadingButtons = reactive({
  publish: false,
  draft: false,
});
const editorRef = ref(null);
const data = ref<ICreateArticle>({
  title: "",
  description: "descrição de exemplo",
  cover: "",
  content: "",
  tags: [],
  published: false,
});
async function handleOnSave(published: boolean) {
  data.value.published = published;
  if (published == true) {
    loadingButtons.publish = true;
  } else {
    loadingButtons.draft = true;
  }

  if (editorRef.value) {
    const content = await editorRef.value.save();
    if (content) {
      data.value.content = JSON.stringify(content);
      const response = await createArticle({ ...data.value });

      if (response?.statusCode == 200) {
        useToast().add({ title: "artigo criado", timeout: 3000 });
        navigateTo(`/@${username}/${response.data.slug}`);
      }
    }
  }
}

async function uploadCover(e: File[]) {
  uploadingCover.value = true;
  const response = await uploadImage(e[0], data.value.cover);
  uploadingCover.value = false;
  if (response.success == 1) {
    data.value.cover = response.file.url;
  }
}
</script>
