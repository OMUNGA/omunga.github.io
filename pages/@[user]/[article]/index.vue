<template>
  <UContainer>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-9">
        <div class="w-full flex flex-wrap gap-2 justify-between items-center">
          <div class="flex gap-4 items-center">
            <UAvatar alt="Miguel Domingos" size="lg" />
            <div
              class="text-slate-900 dark:text-white flex flex-col justify-around text-black/50"
            >
              <span>Miguel Domingos</span>
              <span class="text-xs">20 Abril 2024</span>
            </div>
          </div>
          <div class="flex gap-1 md:hidden">
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

        <span class="text-slate-900 dark:text-white">
          artigo sobre {{ article }} aqui
        </span>
      </section>
      <aside class="h-full min-w-72 sticky top-19.5 hidden md:block">
        <div class="w-full flex flex-col gap-4">
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
              >Mais artigos de Miguel</span
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
const { article } = useRoute().params;
</script>
