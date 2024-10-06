<template>
  <div id="editor" class="prose-sm"></div>
</template>

<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { CustomImageTool } from "./plugins";
import { onMounted, ref } from "vue";
import { useFile } from "@/composables";

interface IEditorProps {
  data?: {
    blocks: [];
  };
  readOnly?: boolean;
}

const props = withDefaults(defineProps<IEditorProps>(), {
  readOnly: false,
});

const { uploadImage } = useFile();

const editor = new EditorJS({
  readOnly: props.readOnly,
  holder: "editor",
  placeholder: "Start typing here...",
  // autofocus: true,
  inlineToolbar: true,
  // readOnly: true,
  tools: {
    // aqui você pode definir as suas ferramentas personalizadas do editor.js
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    image: {
      class: CustomImageTool as any,
      config: {
        uploader: {
          async uploadByFile(file: File) {
            return await uploadImage(file);
          },
        },
      },
    },
  },
  data: props.data,
});
async function save() {
  try {
    return await editor.save();
  } catch (error) {
    //console.log(error);
  }
}

async function setReadOnly() {
  await editor.readOnly.toggle();
}

defineExpose({
  save,
  setReadOnly,
});

onMounted(() => {
  editor;
});
</script>

<style>
img {
  width: 100%;
  object-fit: cover;
}

:root {
  /* background color */
  --main: #111827;

  /* Toolbar and popover */
  --primary: #0f172a;

  /* On hover or selected */
  --selected: rgba(255, 255, 255, 0.2);

  /* Border color */
  --border: #1e293b;

  /* Text and icon colors */
  --text: white;
}

.dark .ce-toolbar__plus,
.dark .ce-toolbar__settings-btn,
.dark .ce-popover-item__title,
.dark .ce-popover-item__icon {
  color: var(--text);
}

.dark .cdx-search-field.ce-popover__search {
  background-color: #1e293b4d;
  border-color: var(--border);
}

.dark .cdx-search-field__input {
  color: var(--text);
}

.dark .cdx-block,
.dark .ce-block {
  color: var(--text);
}

.dark .ce-inline-toolbar,
.dark .ce-conversion-tool__icon,
.dark .ce-popover-item__icon {
  color: var(--text);
  background-color: var(--primary);
  border-color: var(--border);
}

.dark .ce-popover,
.dark .ce-conversion-toolbar,
.dark .ce-inline-toolbar {
  background-color: var(--primary);
  border-color: var(--border);
  box-shadow: 0 3px 15px -3px var(--border);
}

.dark .ce-inline-tool:hover,
.dark .ce-inline-toolbar__dropdown:hover,
.dark .ce-toolbar__plus:hover,
.dark .ce-toolbar__settings-btn:hover,
.dark .ce-conversion-tool:hover,
.dark .ce-popover-item:hover {
  background-color: var(--selected);
}

.dark .ce-block .ce-block__content *::selection,
.dark .cdx-block *::selection,
.dark .cdx-search-field__input::selection,
.dark .ce-block.ce-block--selected .ce-block__content {
  background-color: var(--selected);
}

.dark .ce-popover__items {
  scrollbar-color: var(--border) var(--main);
}

@media (max-width: 650px) {
  .dark .ce-toolbar__settings-btn,
  .dark .ce-toolbar__plus {
    background-color: var(--primary);
    border-color: var(--border);
    box-shadow: 0 3px 15px -3px var(--border);
  }
}

/* custom style */
@media (min-width: 651px) {
  .codex-editor--narrow .codex-editor__redactor {
    margin-right: 0;
  }
}

.codex-editor__redactor {
  padding-bottom: 150px !important;
}

/* remove image description input */
.cdx-input.image-tool__caption {
  display: none;
}
</style>
