<template>
  <div
    v-bind="$attrs"
    class="gap-6 p-5 flex rounded border border-solid border-brand-border-white dark:border-brand-border-dark"
  >
    <slot name="content" />
  </div>
</template>

<script setup lang="ts"></script>
