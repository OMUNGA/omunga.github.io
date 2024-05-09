<template>
  <UCard>
    <span class="text-base dark:text-white text-slate-900"
      >Topicos mais pesquisados</span
    >
    <div class="flex mt-4 flex-wrap gap-x-4 gap-y-2">
      <UButton
        v-for="(topic, index) in topics"
        :id="index.toString()"
        :ui="{ rounded: 'rounded-full' }"
        variant="solid"
        color="white"
      >
        <span class="font-normal">
          {{ topic }}
        </span>
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { topics } = defineProps<{ topics: string[] }>();
</script>
