<template>
  <section
    class=" z-50 container mx-auto px-4 flex flex-col lg:flex-row overflow-hidden  items-center pt-10 lg:-mt-10"
  >
    <div
      class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
    >
      <Text class="dark:text-white font-bold text-slate-900 text-6xl">
        O <span class="text-brand-primary">saber</span> não <br> ocupa Lugar
      </Text>

      <Text class="dark:text-white mt-5 text-slate-900 text-lg opacity-70">
        O melhor lugar para buscar e publicar seus artigos e blogs <br> relacionados a TI. Aqui
        acreditamos o poder da partilha de conteúdos
      </Text>

      <OButton class="text-nowrap  text-sm font-bold mt-5"> Começar agora </OButton>
    </div>

    <div class="w-full mt-5 flex justify-center items-center overflow-hidden">
      <img src="@/assets/section/idea.svg" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Text, OButton } from "@/components";
</script>
