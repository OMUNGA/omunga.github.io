<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const items = [
  [
    {
      label: "Light",
      icon: "i-carbon-sun",
      click: () => {
        colorMode.preference = "light";
      },
    },
    {
      label: "Dark",
      icon: "i-carbon-moon",
      click: () => {
        colorMode.preference = "dark";
      },
    },
    {
      label: "System",
      icon: "i-carbon-laptop",
      click: () => {
        colorMode.preference = "system";
      },
    },
  ],
];
defineProps<{ label?: boolean }>();
</script>

<template>
  <ClientOnly>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        :variant="label ? 'solid' : 'ghost'"
        aria-label="Theme"
      >
        {{ label ? colorMode.preference : "" }}
      </UButton>

      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </UDropdown>
  </ClientOnly>
</template>
