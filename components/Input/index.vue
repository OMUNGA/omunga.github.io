<template>
  <div class="flex flex-col items-start gap-2">
    <div v-if="label">
      <label>{{ label }}</label>
    </div>

    <div class="border border-solid border-brand-border dark:bg-[#1E293B]/30 dark:border-brand-border/20 w-full p-2 rounded-md">
      <input type="text" class="w-full border-0 outline-none bg-transparent dark:text-white" :placeholder>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IInput {
  placeholder?: string
  label?: string
}

const {placeholder, label} = withDefaults(defineProps<IInput>(),{
  placeholder: 'change placeholder by props',
  label: ''
})
</script>