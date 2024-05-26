<template>
  <UContainer>
    <UCard
      class="lg:w-full lg:max-w-2xl lg:mx-auto mx-4 flex justify-between mb-4"
    >
      <template #error>
        <div class="flex flex-col gap-4">
          <span class="text-2xl font-semibold dark:text-white text-slate-900"
            >Titulo do Artigo aqui</span
          >
          <div>
            <span class="text-sm dark:text-white text-slate-900">
              tags aqui
            </span>
          </div>
        </div>
        <UCard class="w-full max-w-[200px] flex justify-center items-center">
          <template #content>
            <span class="text-sm dark:text-white text-slate-900 opacity-60">
              adicione uma imagem de capa
            </span>
          </template>
        </UCard>
      </template>
    </UCard>
    <Editor
      :data="{
        time: 1716626259244,
        blocks: [
          {
            id: 'gqc_NgZ3oC',
            type: 'paragraph',
            data: { text: 'Meu primeiro artigo vue no omunga' },
          },
          {
            id: '9SIpTx-eAV',
            type: 'list',
            data: { style: 'ordered', items: ['Vue.js', 'Nuxt.js'] },
          },
        ],
        version: '2.29.1',
      }"
      ref="editorRef"
    />
    <UButton @click="handleOnSave()">Salvar</UButton>
  </UContainer>
</template>

<script setup lang="ts">
import { Editor } from "@/components";
definePageMeta({
  layout: "new",
});

const editorRef = ref(null);
async function handleOnSave() {
  if (editorRef.value) {
    const response = await editorRef.value.save();
    console.log(JSON.stringify(response));
  }
}
</script>
