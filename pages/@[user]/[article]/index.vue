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
    <div v-else class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-4">
        <div class="w-full flex flex-wrap gap-2 justify-between items-center">
          <div class="flex gap-4 items-center">
            <UAvatar :src="data?.user.photo" :alt="data?.user.name" size="lg" />
            <div
              class="text-slate-900 dark:text-white flex flex-col justify-around text-black/50"
            >
              <span>{{ data?.user.name }}</span>
              <span class="text-xs" v-if="data?.createdAt">{{
                formatDistance(data.createdAt, new Date(), { addSuffix: true })
              }}</span>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <div class="flex gap-2 items-center">
              <UIcon
                name="i-heroicons-fire-20-solid"
                class="text-2xl cursor-pointer opacity-50 hover:opacity-100"
                @click="
                  () => {
                    console.log('click');
                  }
                "
              />
              <div
                @click="openComments = true"
                class="flex items-end gap-1 cursor-pointer opacity-50 hover:opacity-100"
              >
                <span class="text-sm">{{ comments.length }}</span>
                <UIcon
                  name="i-heroicons-chat-bubble-oval-left"
                  class="text-2xl"
                />
              </div>
            </div>

            <div
              v-if="
                loggedUser.username == user &&
                route.name != '@user-article-edit'
              "
            >
              <UButton
                label="editar"
                color="white"
                variant="solid"
                :to="`/@${user}/${article}/edit`"
              />
            </div>
          </div>
          <div v-if="loggedUser.username != user" class="flex gap-1 md:hidden">
            <UButton
              icon="i-carbon-logo-github"
              variant="ghost"
              color="gray"
              size="md"
            />
            <UButton
              icon="i-carbon-logo-linkedin"
              variant="ghost"
              color="gray"
              size="md"
            />
            <UButton
              icon="i-carbon-logo-facebook"
              variant="ghost"
              color="gray"
              size="md"
            />
          </div>
        </div>
        <div class="w-full h-64 overflow-hidden">
          <img
            :src="data.cover"
            v-if="data"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex flex-col">
          <div class="prose-sm">
            <h1>{{ data?.title }}</h1>
          </div>
          <div class="w-full h-full">
            <Editor
              :data="stringToObject(data?.content as string)"
              :readOnly="true"
            />
          </div>
        </div>
      </section>
      <aside
        class="h-full w-full max-w-72 text-center sticky top-19.5 hidden md:block"
      >
        <div class="w-full flex flex-col gap-4">
          <UCard>
            <div class="w-full flex flex-col justify-start items-center gap-2">
              <UAvatar
                :src="data?.user.photo"
                :alt="data?.user.name"
                size="3xl"
              />
              <div class="flex flex-col items-center w-full gap-4">
                <div class="w-full flex flex-col items-center gap-1">
                  <span class="text-slate-900 text-center dark:text-white">{{
                    data?.user.name
                  }}</span>
                  <span class="text-slate-900 dark:text-white opacity-80">{{
                    data?.user.bio
                  }}</span>
                </div>
                <div class="flex gap-2 text-slate-900 dark:text-white">
                  <UButton
                    icon="i-carbon-logo-github"
                    variant="ghost"
                    color="gray"
                    class="text-3xl"
                    size="xl"
                  />
                  <UButton
                    icon="i-carbon-logo-linkedin"
                    variant="ghost"
                    color="gray"
                    class="text-3xl"
                    size="xl"
                  />
                  <UButton
                    icon="i-carbon-logo-facebook"
                    variant="ghost"
                    color="gray"
                    class="text-3xl"
                    size="xl"
                  />
                </div>
              </div>
              <div class="w-full mt-2">
                <UButton v-if="true" block size="lg">
                  <span class="text-white font-normal"> Seguir </span>
                </UButton>
                <UButton v-else block size="lg" color="gray">
                  <span class="text-white font-normal"> Não Seguir </span>
                </UButton>
              </div>
            </div>
          </UCard>

          <div class="w-full">
            <span class="text-slate-900 dark:text-white"
              >Mais artigos de @{{ data?.user.username }}</span
            >
            <div class="w-full flex flex-col items-center mt-4">
              <span class="text-slate-900 dark:text-white opacity-30"
                >Sem artigos</span
              >
            </div>
          </div>
        </div>
      </aside>
    </div>
    <USlideover v-model="openComments" class="overflow-y-auto">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="w-full h-full flex flex-col gap-1">
            <div class="w-full h-full flex justify-between">
              <span class="text-lg">{{ comments.length }} Comments</span>
              <div class="flex gap-2">
                <UButton
                  color="gray"
                  variant="ghost"
                  :disabled="!isAuthenticated"
                  icon="i-heroicons-chat-bubble-oval-left"
                  @click="commentInput = true"
                />

                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  @click="openComments = false"
                />
              </div>
            </div>
            <div
              v-if="commentInput && isAuthenticated"
              class="w-full h-full flex flex-col gap-6"
            >
              <div class="flex gap-2 items-start">
                <UAvatar
                  size="md"
                  :src="loggedUser.photo"
                  :alt="loggedUser.name"
                />
                <UTextarea
                  class="w-full"
                  placeholder="Escrever comentário"
                  color="gray"
                  autoresize
                  v-model="newComment"
                />
              </div>
              <div class="w-full flex justify-end gap-4">
                <UButton
                  variant="ghost"
                  color="gray"
                  @click="commentInput = false"
                  >cancelar</UButton
                >
                <UButton
                  color="primary"
                  variant="solid"
                  :loading="isCommentCreating"
                  @click="createNewComment(data?.postID as string, newComment)"
                  ><span class="text-white">comentar</span></UButton
                >
              </div>
            </div>
          </div>
        </template>
        <template #default>
          <div class="w-full flex flex-col gap-8">
            <Comment
              @delete="onDeleteComment($event)"
              @update="onEditComment($event)"
              v-if="comments.length > 0"
              v-for="comment in comments"
              :comment
            />
          </div>
        </template>
      </UCard>
    </USlideover>
  </UContainer>
</template>

<script setup lang="ts">
import { formatDistance } from "date-fns";
import { Editor, Comment } from "@/components";
import { useArticle } from "@/composables";
import { useAuthStore } from "@/store";
import { stringToObject } from "@/helpers";
import type { IArticle } from "@/types";

const { user, article } = useRoute().params;
const {
  getOneArticle,
  getAllComments,
  createComment,
  deleteComment,
  editComment,
} = useArticle();
const isCommentCreating = ref(false);
const isCommnetEditing = ref(false);
const loadings = reactive({
  onCreate: false,
  onUpdate: false,
});

const { user: loggedUser, isAuthenticated } = useAuthStore();

const data = ref<IArticle>();
const isFetching = ref(true);
const openComments = ref(false);
const comments = ref<object[] | object>([]);
const commentInput = ref(false);

const route = useRoute();
const newComment = ref("");
interface EditComment {
  commentID: string;
  content: string;
}

async function onDeleteComment(id: string) {
  const response = await deleteComment(id);
  if (response.statusCode == 200) {
    comments.value = comments.value.filter(
      (comment) => id != comment.commentID
    );
    useToast().add({ title: "comentário apagado", timeout: 3000 });
  } else {
    useToast().add({
      title: "erro ao apagar comentário",
      timeout: 3000,
      color: "red",
    });
  }
}

async function onEditComment(data: EditComment) {
  loadings.onUpdate = true;
  const response = await editComment(data.commentID, data.content);
  if (response.statusCode == 200) {
    useToast().add({ title: "comentário atualizado", timeout: 3000 });
    await onFetchComments();
  } else {
    useToast().add({
      title: "erro ao atualizar comentário",
      timeout: 3000,
      color: "red",
    });
  }
  loadings.onUpdate = false;
}

async function createNewComment(postID: string, content: string) {
  loadings.onCreate = true;
  const response = await createComment(postID, content);
  if (response.statusCode == 200) {
    await onFetchComments();
    newComment.value = "";
    useToast().add({
      title: "comentário criado",
      timeout: 3000,
    });
  } else {
    useToast().add({
      title: response.message,
      timeout: 5000,
      color: "red",
    });
  }
  loadings.onCreate = false;
}

async function onFetchComments() {
  if (data.value?.postID) {
    const commentResponse = await getAllComments(data.value.postID);
    comments.value = [];
    if (commentResponse.statusCode == 200) {
      comments.value = commentResponse.data;
    } else {
      useToast().add({
        title: commentResponse.message,
        timeout: 5000,
        color: "red",
      });
    }
  }
}

onBeforeMount(async () => {
  const response = await getOneArticle(user as string, article as string);
  if (response.statusCode == 200) {
    isFetching.value = false;
    data.value = response.data;
    await onFetchComments();
  } else {
    useToast().add({ title: response.message, timeout: 5000, color: "red" });
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }
});
</script>
