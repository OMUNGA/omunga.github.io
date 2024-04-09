<template>
  <button :class="buttonClass" type="button">
    <template v-if="props.to">
      <NuxtLink :to="props.to">
        <slot />
      </NuxtLink>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
interface IButton {
  variant?: "link" | "outline" | "solid" | "unstyle";
  color?: string;
  bgColor?: string;
  fontSize?: number | string;
  to?: string;
}

const props = withDefaults(defineProps<IButton>(), {
  variant: "solid",
});

const baseClasses = "px-[18px] py-[14px] rounded-md  cursor-pointer";

const buttonClass = computed(() => {
  if (props.variant == "link") {
    return "bg-transparent border-0 dark:text-white" + " " + baseClasses;
  } else if (props.variant == "outline") {
    return (
      "text-brand-primary border border-solid border-brand-primary bg-transparent " +
      " " +
      baseClasses
    );
  } else if (props.variant == "unstyle") {
    return "";
  } else {
    return " border-0 bg-brand-primary text-white " + " " + baseClasses;
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
</style>
