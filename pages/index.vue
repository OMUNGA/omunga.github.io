<template>
  <div class="">
    <button @click="setColorTheme('dark')">Dark mode</button>
    <button @click="setColorTheme('light')">Light mode</button>
    <br>

    <Text class="dark:text-white font-bold text-slate-900 text-3xl">
      Omunga app
    </Text>
  </div>
</template>

<script setup lang="ts">
import {Text, Button} from "@/components"
type Theme = 'light' | 'dark' | 'system';

const setColorTheme = (newTheme: Theme) =>{
  useColorMode().preference = newTheme
}

</script>