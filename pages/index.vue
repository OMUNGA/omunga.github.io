<template>
  <Container>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-9">
        <div class="w-full bg-brand-white dark:bg-brand-dark sticky top-15.5">
          <div class="flex justify-between">
            <div>
              <OButton variant="link">Explorar</OButton>
              <OButton variant="link">Destaques</OButton>
              <OButton variant="link">Top 10</OButton>
            </div>

            <div>
              <OButton variant="link">Filtrar</OButton>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col gap-8">
          <Card v-for="card in 5" :id="card">
            <template #content>
              <div class="w-full flex flex-col gap-2">
                <div class="w-full flex gap-4">
                  <Avatar class="w-12 h-12" />
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
                    src="/project.png"
                    alt=""
                  />
                </div>
                <div class="">
                  <span
                    class="font-bold text-2xl text-slate-900 dark:text-white"
                    >24 Frontend Development Tools You Should Know in 2024</span
                  >
                </div>
                <div class="">
                  <span class="text-slate-600 dark:text-slate-400 font-light">
                    In the fast-evolving landscape of web development, staying
                    abreast of the latest tools can significantly impact the
                    efficiency, quality, and innovation of your projects.
                  </span>
                </div>
                <div
                  class="flex justify-center sm:justify-start md:justify-center lg:justify-start gap-2.5 mt-5"
                >
                  <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30">Vue.js</Chip>
                  <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30"
                    >Framework</Chip
                  >
                  <Chip class="bg-[#F4F4F4] dark:bg-[#1E293B]/30"
                    >Frontend</Chip
                  >
                </div>
              </div>
              <div class="hidden sm:flex md:hidden lg:flex items-center">
                <div class="rounded overflow-hidden">
                  <img class="object-cover w-full" src="/project.png" alt="" />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </section>
      <aside class="h-full min-w-80 sticky top-19.5 hidden md:block">
        <div class="w-full flex flex-col gap-4">
          <Topics :topics />
          <Footer />
        </div>
      </aside>
    </div>
  </Container>
</template>

<script setup lang="ts">
import {
  Footer,
  Topics,
  Container,
  OButton,
  Card,
  Avatar,
  Chip,
} from "@/components";

const topics = ["programaçao", "vue.js", "go", "uidesign", "nuxt.js", "devops"];
</script>
