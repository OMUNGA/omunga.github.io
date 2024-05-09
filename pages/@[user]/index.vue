<template>
  <UContainer>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-4">
        <div class="w-full max-h-40">
          <img class="w-full h-full object-cover" src="/vue.jpg" alt="" />
        </div>

        <UTabs v-model="selected" :items="items" />
      </section>
      <aside class="h-full min-w-72 sticky top-20 hidden md:block">
        <UCard>
          <div class="w-full flex flex-col justify-start items-center gap-2">
            <UAvatar src="" alt="Miguel Domingos" size="3xl" />
            <div class="flex flex-col items-center w-full gap-4">
              <div class="w-full flex flex-col items-center gap-1">
                <span class="text-slate-900 dark:text-white"
                  >Miguel Domingos</span
                >
                <span class="text-slate-900 dark:text-white opacity-80"
                  >Web Developer | Vue.js | Nuxt.js</span
                >
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
  </UContainer>
</template>

<script setup lang="ts">
const items = [
  {
    label: "Overview",
    slot: "overview",
    content: "meus artigos aparecem aqui",
  },
  {
    label: "Recomendações",
    content: "recomedações aparecem aqui",
  },
  {
    label: "Sobre mim",
    content: "minhas informações aparecem aqui",
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
