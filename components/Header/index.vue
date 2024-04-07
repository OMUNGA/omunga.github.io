<template>
  <header class="h-16 w-full shadow-sm dark:shadow-[#1C273D] sticky top-0">
    <div class="mx-auto h-full px-4 flex justify-between items-center gap-4">
      <div class="flex justify-center items-center">
        <Logo />
      </div>
      <div class="w-[500px]">
        <OInput placeholder="Pesquise por um assunto"/>
      </div>
      <div class="flex gap-4">
        <OButton variant="link">
          Entrar
        </OButton>

        <OButton class="text-nowrap">
          Criar conta
        </OButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {Logo, OButton, OInput} from "@/components"
</script>