<template>
  <UContainer>
    <div v-if="userData?.data.user" class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-4">
        <div class="w-full max-h-40">
          <img class="w-full h-full object-cover" src="/vue.jpg" alt="" />
        </div>

        <UTabs v-if="user == username" v-model="selected" :items="items">
          <template #articles>
            <div class="w-full flex flex-col gap-4 p-2">
              <template v-if="userData?.data">
                <template v-if="userData.data.posts.posts.length == 0">
                  <div class="w-full flex justify-center opacity-30">
                    <span>sem artigos</span>
                  </div>
                </template>
                <template v-else>
                  <Card
                    v-for="post in userData.data.posts.posts"
                    :article="post"
                  />
                </template>
              </template>

              <template v-else>
                <CardSkeleton />
              </template>
            </div>
          </template>

          <template #draft>
            <div class="w-full flex flex-col gap-4 p-2">
              <template v-if="drafts">
                <template v-if="drafts.posts.length == 0">
                  <div class="w-full flex justify-center opacity-30">
                    <span>sem rascunhos</span>
                  </div>
                </template>
                <template v-else>
                  <Card v-for="draft in drafts.posts" :article="draft" />
                </template>
              </template>
              <template v-else>
                <CardSkeleton />
              </template>
            </div>
          </template>
        </UTabs>

        <div v-else class="w-full flex flex-col gap-4 p-2">
          <template v-if="userData?.data">
            <template v-if="userData.data.posts.posts.length == 0">
              <div class="w-full flex justify-center opacity-30">
                <span>sem artigos</span>
              </div>
            </template>
            <template v-else>
              <Card v-for="post in userData.data.posts.posts" :article="post" />
            </template>
          </template>

          <template v-else>
            <CardSkeleton />
          </template>
        </div>
      </section>
      <aside class="h-full min-w-72 sticky top-20 hidden md:block">
        <UCard>
          <div class="w-full flex flex-col justify-start items-center gap-2">
            <UAvatar src="" alt="Miguel Domingos" size="3xl" />
            <div class="flex flex-col items-center w-full gap-4">
              <div class="w-full flex flex-col items-center gap-1">
                <span class="text-slate-900 dark:text-white">{{
                  userData.data.user.name
                }}</span>
                <span class="text-slate-900 dark:text-white opacity-80">{{
                  userData.data.user.bio
                }}</span>
              </div>
              <div class="flex gap-2">
                <UButton
                  icon="i-carbon-logo-github"
                  variant="ghost"
                  color="gray"
                  size="xl"
                />
                <UButton
                  icon="i-carbon-logo-linkedin"
                  variant="ghost"
                  color="gray"
                  size="xl"
                />
                <UButton
                  icon="i-carbon-logo-facebook"
                  variant="ghost"
                  color="gray"
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
      </aside>
    </div>
    <Loading v-else />
  </UContainer>
</template>

<script setup lang="ts">
import { Card, CardSkeleton, Loading } from "@/components";
import type { IGetAllArticle, IUserResponse, IUserSchema } from "@/types";
import { useArticle, useUser } from "@/composables";
import { useAuthStore } from "@/store";

definePageMeta({
  layout: "profile",
});

const { getAllUserArticle, getAllUnpublishedArticle } = useArticle();
const { getOneUser } = useUser();
const { user } = useRoute().params;
const { username } = useAuthStore().user;

const items = [
  {
    label: "Artigos",
    content: "Area de trabalhos",
    slot: "articles",
  },
  {
    label: "Rascunhos",
    content: "recomedações aparecem aqui",
    slot: "draft",
  },
];

const route = useRoute();
const router = useRouter();
const selected = computed({
  get() {
    const index = items.findIndex((item) => item.label === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: items[value].label },
    });
  },
});

const userData = ref<IUserResponse>();
const drafts = ref<IGetAllArticle>();

onBeforeMount(async () => {
  const response = await getOneUser(user as string);

  if (response.statusCode == 200) {
    userData.value = response;
    console.log({ response });
  }

  if (username == user) {
    const response = await getAllUnpublishedArticle();
    if (response.statusCode == 200) {
      drafts.value = response.data;
    }
  }
});
</script>
