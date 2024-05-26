<template>
  <UPopover mode="hover">
    <UButton
      variant="ghost"
      class="hover:bg-gray-50 dark:hover:bg-gray-800"
      icon="i-heroicons-swatch-20-solid"
    />

    <template #panel>
      <div class="p-1 flex flex-col max-w-[150px] gap-1">
        <div class="flex w-full flex-wrap">
          <UTooltip v-for="theme in themes" :text="theme">
            <UButton
              color="gray"
              class="p-2"
              variant="ghost"
              @click="changeTheme(theme)"
            >
              <div
                class="h-3 w-3 cursor-pointer rounded-full"
                :class="`bg-${theme}-500`"
              ></div>
            </UButton>
          </UTooltip>
        </div>
        <UDivider />
        <div class="flex w-full flex-wrap">
          <UTooltip v-for="background in backgrounds" :text="background">
            <UButton
              color="gray"
              class="p-2"
              variant="ghost"
              @click="changeBackground(background)"
            >
              <div
                :class="`bg-${background}-500`"
                class="h-3 w-3 cursor-pointer rounded-full"
              ></div>
            </UButton>
          </UTooltip>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const selectedTheme = ref(appConfig.ui.primary);
const selectedBackground = ref(appConfig.ui.gray);
const themes = ref(
  appConfig.ui.colors.slice(0, appConfig.ui.colors.length - 2)
);
const backgrounds = ["slate", "cool", "zinc", "neutral", "stone"];

function changeTheme(theme: string) {
  appConfig.ui.primary = theme;
}
function changeBackground(background: string) {
  appConfig.ui.gray = background;
}
</script>
