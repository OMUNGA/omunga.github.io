<template>
  <template v-if="query.q">
    <Header />
    <div class="flex w-full gap-4">
      <div class="max-w-xs w-full">
        <div class="w-full flex flex-col gap-4 px-8">
          <div>Pesquisar por</div>
          <UVerticalNavigation :links="links">
            <template #badge="{ link }">
              <div class="flex-1 flex justify-end relative">
                <span v-if="link.label == 'users'">{{
                  fetchedUsers.length
                }}</span>
                <span v-if="link.label == 'articles'">{{
                  fetchedArticles.length
                }}</span>
              </div>
            </template>
          </UVerticalNavigation>
        </div>
      </div>
      <div class="w-full">
        <template v-if="query.type == 'users'">
          <div>
            {{ fetchedUsers.length }}
            <span v-if="fetchedUsers.length == 1">resultado</span>
            <span v-else>resultados</span>
          </div>
          <div class="w-full max-w-4xl flex flex-col gap-2 mt-4">
            <CardSkeleton v-if="fetchingData" />
            <UserCard v-else v-for="user in fetchedUsers" :user />
          </div>
        </template>
        <template v-else>
          <div>
            {{ fetchedArticles.length }}
            <span v-if="fetchedArticles.length == 1">resultado</span>
            <span v-else>resultados</span>
          </div>
          <div class="w-full max-w-4xl flex flex-col gap-2 mt-4">
            <CardSkeleton v-if="fetchingData" />
            <Card v-else v-for="article in fetchedArticles" :article />
          </div>
        </template>
      </div>
    </div>
  </template>
  <SearchPage v-else />
</template>

<script setup lang="ts">
import { SearchPage, Header, UserCard, Card, CardSkeleton } from "@/components";
import { useUser, useArticle } from "@/composables";
import type { IUserSchema, IArticle } from "~/types";

definePageMeta({
  layout: "empty",
});

const query = computed(() => useRoute().query);
const fetchedUsers = ref<IUserSchema[]>([]);
const fetchedArticles = ref<IArticle[]>([]);
const fetchingData = ref(true);
const { searchUser } = useUser();
const { searchArticle } = useArticle();

const links = computed(() => [
  {
    label: "users",
    icon: "i-heroicons-users",
    badge: 0,
    to: {
      path: "/search",
      query: {
        q: `${query.value.q}`,
        type: "users",
      },
    },
  },
  {
    label: "articles",
    icon: "i-heroicons-book-open",
    badge: 0,
    to: {
      path: "/search",
      query: {
        q: query.value.q,
        type: "articles",
      },
    },
  },
]);

async function fetchData() {
  fetchedUsers.value = [];
  const userResponse = await searchUser(query.value.q as string);
  const articleResponse = await searchArticle(query.value.q as string);
  if (userResponse.statusCode == 200 && articleResponse.statusCode == 200) {
    console.log({ userResponse, articleResponse });
    fetchedUsers.value.push(...userResponse.data);
    fetchedArticles.value.push(...articleResponse.data);
    fetchingData.value = false;
  }
}

watch(query, async (newQuery, oldQuery) => {
  if (query.value.q && newQuery.q != oldQuery.q) {
    fetchedArticles.value = [];
    fetchedUsers.value = [];
    await fetchData();
  }
});
onBeforeMount(async () => {
  if (query.value.q) {
    await fetchData();
  }
});
</script>
