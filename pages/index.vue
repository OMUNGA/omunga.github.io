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
          <Card v-for="card in 5" :id="card" />
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
import { Footer, Topics, Container, OButton, Card } from "@/components";

const topics = ["programaçao", "vue.js", "go", "uidesign", "nuxt.js", "devops"];
</script>
