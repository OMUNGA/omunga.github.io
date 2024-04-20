<template>
  <span
    v-bind="$attrs"
    class="dark:text-white text-slate-900 text-sm rounded-full py-2 px-4 border border-solid border-brand-border-white dark:border-brand-border-dark"
  >
    <slot />
  </span>
</template>

<script setup lang="ts"></script>
