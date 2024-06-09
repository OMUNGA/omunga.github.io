<template>
  <UContainer>
    <UCard class="lg:w-full lg:max-w-2xl lg:mx-auto mx-2 mb-4">
      <div class="w-full flex justify-between">
        <div class="flex flex-1 mr-4 flex-col">
          <div>
            <UButton
              label="adicionar cover"
              color="white"
              variant="solid"
              size="lg"
            />
          </div>
          <UInput
            class="w-full *:text-3xl"
            placeholder="nome do artigo"
            variant="none"
            v-model="data.title"
          />
        </div>
        <div class="">
          <UCard class="w-[100px] h-[100px]"> </UCard>
        </div>
      </div>
    </UCard>

    <Editor ref="editorRef" />
    <div class="flex gap-4 lg:w-full lg:max-w-2xl lg:mx-auto mx-2 pb-4">
      <UButton size="lg" @click="handleOnSave(true)">
        <span class="text-white"> publicar </span>
      </UButton>
      <UButton
        size="lg"
        variant="ghost"
        color="primary"
        @click="handleOnSave(false)"
        >Salvar Rascunho</UButton
      >
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { Editor } from "@/components";
import { useArticle } from "@/composables";

definePageMeta({
  layout: "new",
});
const { createArticle } = useArticle();

interface ICreateArticle {
  title: string;
  description: string;
  cover: string;
  content: string;
  tags: string | string[];
  published: boolean;
}

const editorRef = ref(null);
const data = ref<ICreateArticle>({
  title: "",
  description: "descrição de exemplo",
  cover:
    "https://uploads.toptal.io/blog/image/125920/toptal-blog-image-1524038149943-65cd6aca270907a12410a09b207714f2.png",
  content: "",
  tags: [],
  published: false,
});
async function handleOnSave(published: boolean) {
  data.value.published = published;
  if (editorRef.value) {
    const content = await editorRef.value.save();
    if (content) {
      data.value.content = JSON.stringify(content);
      await createArticle({ ...data.value });
    }
  }
}
</script>
