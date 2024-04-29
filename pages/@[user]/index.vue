<template>
  <Container>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-4">
        <div class="w-full max-h-40">
          <img class="w-full h-full object-cover" src="/vue.jpg" alt="" />
        </div>

        <TabView>
          <TabPanel panel="Home">Home aqui</TabPanel>
          <TabPanel panel="Recomendações">Recomendações aqui</TabPanel>
          <TabPanel panel="Sobre mim">Sobre mim aqui</TabPanel>
        </TabView>
      </section>
      <aside class="h-full min-w-70 sticky top-19.5 hidden md:block">
        <div class="w-full flex flex-col gap-4">
          <Card>
            <template #content>
              <div
                class="w-full flex flex-col justify-start items-center gap-2"
              >
                <Avatar class="w-24 h-24" />
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
                    <div
                      class="i-carbon-logo-github text-3xl opacity-50 hover:opacity-100 cursor-pointer transition"
                    ></div>
                    <div
                      class="i-carbon-logo-linkedin text-3xl opacity-50 hover:opacity-100 cursor-pointer transition"
                    ></div>
                    <div
                      class="i-carbon-logo-facebook text-3xl opacity-50 hover:opacity-100 cursor-pointer transition"
                    ></div>
                  </div>
                </div>
                <div class="w-full mt-2">
                  <OButton v-if="true" class="w-full">Seguir</OButton>
                  <OButton
                    v-else
                    variant="unstyle"
                    class="px-[18px] py-[14px] rounded-md cursor-pointer w-full border-0 bg-[#1E293B] dark:text-white"
                    >Não seguir</OButton
                  >
                </div>
              </div>
            </template>
          </Card>

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
  </Container>
</template>

<script setup lang="ts">
import { Container, Card, Avatar, OButton } from "@/components";
import TabView from "@/components/Tab/TabView.vue";
import TabPanel from "@/components/Tab/TabPanel.vue";

const { user } = useRoute().params;
</script>
