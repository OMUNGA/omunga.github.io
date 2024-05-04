<template>
  <Container>
    <Card class="w-full max-w-2xl mx-auto flex justify-between mb-4">
      <template #content>
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
        <Card class="w-full max-w-[200px] flex justify-center items-center">
          <template #content>
            <span class="text-sm dark:text-white text-slate-900 opacity-60">
              adicione uma imagem de capa
            </span>
          </template>
        </Card>
      </template>
    </Card>

    <Editor :data="[]" ref="editorRef" />

    <OButton @click="handleOnSave()">Salvar</OButton>
  </Container>
</template>

<script setup lang="ts">
import { Container, Editor, OButton, Card } from "@/components";
definePageMeta({
  layout: "new",
});

const editorRef = ref(null);
async function handleOnSave() {
  const response = await editorRef.value.save();
  console.log(response);
}
</script>
