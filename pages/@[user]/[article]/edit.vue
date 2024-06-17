<template>
  <UContainer>
    <div v-if="isFetching" class="flex justify-between mt-6 mx-2">
      <div class="flex gap-4 items-center">
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>
    <template v-else>
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
            />
          </UCard>
        </div>
      </UCard>

      <Editor ref="editorRef" :data="stringToObject(data?.content as string)" />
      <div class="flex gap-4 lg:w-full lg:max-w-2xl lg:mx-auto mx-2 pb-4">
        <UButton
          size="lg"
          @click="onSubmit(true)"
          loading-icon="i-carbon-circle-dash"
          :loading="loadingButtons.publish"
          :disabled="loadingButtons.draft"
        >
          <span class="text-white"> publicar </span>
        </UButton>
        <UButton
          @click="onSubmit(false)"
          size="lg"
          variant="ghost"
          color="primary"
          loading-icon="i-carbon-circle-dash"
          :loading="loadingButtons.draft"
          :disabled="loadingButtons.publish"
          >Salvar Rascunho</UButton
        >
      </div>
    </template>
  </UContainer>
</template>

<script setup lang="ts">
import type { UpdatePostDto } from "#gql";
import { Editor } from "@/components";
import { useArticle, useFile } from "@/composables";
import { stringToObject } from "@/helpers";

definePageMeta({
  layout: "new",
});

const uploadingCover = ref(false);
const loadingButtons = reactive({
  publish: false,
  draft: false,
});
const { uploadImage } = useFile();

const { getOneArticle, updateArticle } = useArticle();

const editorRef = ref(null);
const { user, article } = useRoute().params;
const isFetching = ref(true);
const postID = ref("");
const data = ref<UpdatePostDto>();
onBeforeMount(async () => {
  const response = await getOneArticle(user as string, article as string);
  if (response.statusCode == 200) {
    isFetching.value = false;
    data.value = response.data;
  } else {
    useToast().add({ title: response.message, timeout: 5000, color: "red" });
  }
});

async function onSubmit(published: boolean) {
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
      const response = await updateArticle(
        postID.value,
        data.value as UpdatePostDto
      );
      if (response?.statusCode == 200) {
        useToast().add({ title: "artigo atualizado", timeout: 3000 });
        navigateTo(`/@${user}/${response.data.slug}`);
      }
    }
  }
}

async function uploadCover(e: File[]) {
  uploadingCover.value = true;
  const response = await uploadImage(e[0], data.value?.cover);
  uploadingCover.value = false;
  if (response.success == 1) {
    data.value.cover = response.file.url;
  }
}

watchEffect(() => {
  postID.value = data.value?.postID as string;
  delete data.value?.postID;
  delete data.value?.user;
  delete data.value?.createdAt;
  delete data.value?.postLike;
  delete data.value?.comment;
});
</script>
