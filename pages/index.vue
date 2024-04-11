<template>
  <Container>
    <div class="flex justify-between mt-6">
      <section class="w-full flex flex-col mr-12 gap-9">
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
        <div class="flex flex-col">content here</div>
      </section>
      <aside class="min-w-80 flex flex-col gap-4">
        <Topics :topics />
        <Footer />
      </aside>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { Footer, Topics, Container, OButton } from "@/components";

const topics = ["programaçao", "vue.js", "go", "uidesign", "nuxt.js", "devops"];
</script>
