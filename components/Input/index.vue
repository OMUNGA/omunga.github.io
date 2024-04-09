<template>
  <div class="flex flex-col items-start gap-1 custom-w">
    <label>
      <slot name="label" />
    </label>

    <div
      class="p-2 border gap-2 flex border-solid border-brand-border-white dark:bg-[#1E293B]/30 dark:border-brand-border-dark w-full rounded-md"
    >
      <slot name="icon" />
      <input
        v-bind="$attrs"
        class="w-full border-0 outline-none bg-transparent dark:invert"
        :placeholder
      />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder: string;
  }>(),
  {
    placeholder: "change placeholder by props",
  }
);
</script>

<style scoped>
.custom-w {
  width: calc(100% - 16px);
}
/* 
::-ms-reveal {
  filter: invert(100%);
} */
</style>
