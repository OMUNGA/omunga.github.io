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
              <span class="text-xs">{{ data?.createdAt }}</span>
            </div>
          </div>

          <div
            v-if="
              loggedUser.username == user && route.name != '@user-article-edit'
            "
          >
            <UButton
              label="editar"
              color="white"
              variant="solid"
              :to="`/@${user}/${article}/edit`"
            />
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
      <aside class="h-full min-w-72 sticky top-19.5 hidden md:block">
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
              <span class="text-slate-900 dark:text-white opacity-50"
                >Sem artigos</span
              >
            </div>
          </div>
        </div>
      </aside>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { Editor } from "@/components";
import { useArticle } from "@/composables";
import { useAuthStore } from "@/store";
import { stringToObject } from "@/helpers";
import type { IArticle } from "@/types";

const { user, article } = useRoute().params;
const { getOneArticle } = useArticle();
const loggedUser = useAuthStore().user;
const data = ref<IArticle>();
const isFetching = ref(true);

const route = useRoute();

onBeforeMount(async () => {
  const response = await getOneArticle(user as string, article as string);
  if (response.statusCode == 200) {
    isFetching.value = false;
    data.value = response.data;
  } else {
    useToast().add({ title: response.message, timeout: 5000, color: "red" });
  }
});
</script>
