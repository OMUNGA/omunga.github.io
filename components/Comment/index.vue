<template>
  <div
    class="flex flex-col gap-3 border-b-[1px] border-neutral-300 dark:border-[#ffffff10] pb-1"
  >
    <div class="flex justify-between items-start">
      <div class="flex gap-2 items-center">
        <UAvatar size="sm" :src="comment.user.photo" :alt="comment.user.name" />
        <div class="flex flex-col">
          <ULink :to="`/@${comment.user.username}`">
            <span class="text-sm">{{ comment.user.name }}</span>
          </ULink>
          <span class="text-xs">
            {{
              formatDistance(comment.createdAt, new Date(), {
                addSuffix: true,
              })
            }}
          </span>
        </div>
      </div>
      <div v-if="comment.user.id == userID">
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton
            variant="ghost"
            color="gray"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </div>
    </div>
    <div>
      <UTextarea
        v-if="editingMode"
        color="gray"
        autoresize
        v-model="updateContent"
      />
      <span class="text-sm" v-else>{{ comment.content }}</span>
    </div>
    <div>
      <UTextarea v-if="inputReply" color="gray" autoresize />
    </div>
    <div class="flex items-center justify-end">
      <!-- <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-fire-20-solid"
        class="text-2xl cursor-pointer opacity-50 hover:opacity-100"
        @click="
          () => {
            console.log('click');
          }
        "
      /> -->
      <div class="flex gap-4" v-if="inputReply || editingMode">
        <UButton
          variant="ghost"
          color="gray"
          @click="
            () => {
              inputReply = false;
              editingMode = false;
            }
          "
          >cancelar</UButton
        >
        <UButton
          v-if="editingMode"
          @click="
            $emit('update', {
              commentID: comment.commentID,
              content: updateContent,
            });
            editingMode = false;
          "
        >
          <span class="text-white"> atualizar </span>
        </UButton>
        <UButton v-else>
          <span class="text-white"> comentar </span>
        </UButton>
      </div>
      <!-- <UButton v-else variant="ghost" color="gray" @click="inputReply = true"
        >responder</UButton
      > -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDistance } from "date-fns";
import { useAuthStore } from "@/store";

const props = defineProps(["comment"]);
const emits = defineEmits(["delete", "update"]);
const editingMode = ref(false);
const updateContent = ref(props.comment.content);

const userID = useAuthStore().user.id;
const inputReply = ref(false);
const items = [
  [
    {
      label: "Editar",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        editingMode.value = true;
      },
    },
  ],
  [
    {
      label: "Deletar",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["D"],
      click: () => {
        emits("delete", props.comment.commentID);
      },
    },
  ],
];
</script>
