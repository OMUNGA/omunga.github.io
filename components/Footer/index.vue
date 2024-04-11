<template>
  <footer class="flex flex-col items-start gap-2 p-4 max-w-80">
    <div>
      <Logo />
    </div>
    <span class="dark:text-white text-slate-900 text-wrap text-sm"
      >É projecto criado com o principal objectivo de incentivar a partilha de
      conteúdo por parte dos profissionais de TI de Angola</span
    >
    <div>
      <SocialMedia />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SocialMedia, Logo } from "@/components";
</script>
