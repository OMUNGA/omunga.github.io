<template>
  <UPopover mode="hover">
    <UButton
      variant="ghost"
      class="hover:bg-gray-50 dark:hover:bg-gray-800"
      icon="i-heroicons-swatch-20-solid"
    />

    <template #panel>
      <div class="p-1 flex flex-col gap-1">
        <div class="grid grid-cols-5 gap-1">
          <UTooltip v-for="theme in themes" :text="theme">
            <UButton
              color="gray"
              class="p-1"
              variant="ghost"
              @click="changeTheme(theme)"
              :class="
                theme == selectedTheme
                  ? 'bg-gray-700  dark:hover:bg-gray-700'
                  : ''
              "
            >
              <div
                class="h-[14px] w-[14px] cursor-pointer rounded-full"
                :class="`bg-${theme}-500`"
              ></div>
            </UButton>
          </UTooltip>
        </div>
        <UDivider />
        <div class="w-full flex gap-1">
          <UTooltip v-for="background in backgrounds" :text="background">
            <UButton
              color="gray"
              class="p-1"
              variant="ghost"
              @click="changeBackground(background)"
              :class="
                background == selectedBackground
                  ? 'bg-gray-700  dark:hover:bg-gray-700'
                  : ''
              "
            >
              <div
                class="h-[14px] w-[14px] cursor-pointer rounded-full"
                :class="`bg-${background}-500`"
              ></div>
            </UButton>
          </UTooltip>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";

const appConfig = useAppConfig();
const appStore = useAppStore();
const selectedTheme = ref(appConfig.ui.primary);
const selectedBackground = ref(appConfig.ui.gray);
const themes = ref(
  appConfig.ui.colors.slice(0, appConfig.ui.colors.length - 2)
);
const backgrounds = ["slate", "cool", "zinc", "neutral", "stone"];

function changeTheme(theme: string) {
  appConfig.ui.primary = theme;
  selectedTheme.value = theme;
  appStore.primary = theme;
}
function changeBackground(background: string) {
  appConfig.ui.gray = background;
  selectedBackground.value = background;
  appStore.gray = background;
}
</script>
