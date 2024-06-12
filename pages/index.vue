<template>
  <UContainer>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-9">
        <UTabs v-model="selected" :items="items">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

              <span class="truncate">{{ item.label }}</span>

              <span
                v-if="selected"
                class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
              />
            </div>
          </template>
          <template #explorar>
            <div class="w-full flex flex-col mt-4 gap-4">
              <template v-if="posts && Object.keys(posts).length > 0">
                <template v-if="posts.totalPosts == 0">
                  <span class="text-center opacity-30">sem artigos</span>
                </template>
                <template v-else>
                  <Card v-for="post in posts.posts" :article="post" />
                </template>
              </template>
              <template v-else>
                <CardSkeleton />
              </template>
            </div>
          </template>
        </UTabs>
      </section>
      <aside class="h-full min-w-80 sticky top-20 hidden md:block">
        <div class="w-full flex flex-col gap-4">
          <Topics :topics />
          <Footer />
        </div>
      </aside>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { Footer, Topics, Card, CardSkeleton } from "@/components";
import { useArticle } from "@/composables";
import type { IGetAllArticle } from "@/types/article";

const topics = ["programaçao", "vue.js", "go", "uidesign", "nuxt.js", "devops"];
const items = [
  {
    label: "Explorar",
    slot: "explorar",
    icon: "i-carbon-explore",
    content: "artigos aparecem aqui",
  },
  {
    label: "Destaques",
    icon: "i-carbon-bot",
    content: "artigos em destaque aparecem aqui",
  },
  {
    label: "Top-10",
    icon: "i-carbon-trophy",
    content: "Os top 10 artigos aparecem aqui",
  },
];

const route = useRoute();
const router = useRouter();
const { getAllArticle } = useArticle();
const posts = ref<IGetAllArticle>();
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

onBeforeMount(async () => {
  const response = await getAllArticle();
  if (response.statusCode == 200) {
    posts.value = response.data;
  }
});
</script>
