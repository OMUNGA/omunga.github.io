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
              <UCard v-for="card in 5" :id="card">
                <div class="w-full flex gap-4">
                  <div class="w-full flex flex-col gap-2">
                    <div class="w-full flex gap-4">
                      <UAvatar :src="AvatarImage" alt="User User" size="lg" />
                      <div
                        class="text-slate-900 dark:text-white flex flex-col justify-around text-black/50"
                      >
                        <span>Miguel Domingos</span>
                        <span class="text-xs">20 Abril 2024</span>
                      </div>
                    </div>
                    <div
                      class="block sm:hidden md:block lg:hidden rounded overflow-hidden w-full h-[150px]"
                    >
                      <img
                        class="object-cover w-full h-full"
                        src="../public/project.png"
                        alt=""
                      />
                    </div>
                    <div class="">
                      <span
                        class="font-bold text-2xl text-slate-900 dark:text-white"
                        >24 Frontend Development Tools You Should Know in
                        2024</span
                      >
                    </div>
                    <div class="">
                      <span
                        class="text-slate-600 dark:text-slate-400 font-light"
                      >
                        In the fast-evolving landscape of web development,
                        staying abreast of the latest tools can significantly
                        impact the efficiency, quality, and innovation of your
                        projects.
                      </span>
                    </div>
                    <div
                      class="flex justify-center sm:justify-start md:justify-center lg:justify-start gap-2 mt-4"
                    >
                      <UBadge
                        variant="solid"
                        color="gray"
                        size="md"
                        :ui="{ rounded: 'rounded-full' }"
                        class="font-normal"
                        >vue.js</UBadge
                      >
                      <UBadge
                        variant="solid"
                        color="gray"
                        size="md"
                        class="font-normal"
                        :ui="{ rounded: 'rounded-full' }"
                        >framework</UBadge
                      >
                      <UBadge
                        variant="solid"
                        color="gray"
                        class="font-normal"
                        size="md"
                        :ui="{ rounded: 'rounded-full' }"
                        >frontend</UBadge
                      >
                    </div>
                  </div>
                  <div class="hidden sm:flex md:hidden lg:flex items-center">
                    <div class="rounded overflow-hidden">
                      <img
                        class="object-cover w-full"
                        src="../public/project.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </UCard>
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
import { Footer, Topics } from "@/components";
import AvatarImage from "@/public/empty-avatar.jpeg";
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
</script>
