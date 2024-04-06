<template>
  <button :class="buttonClass">
    <slot/>
  </button>
</template>

<script setup lang="ts">

interface IButton {
  variant?: 'link' | 'outline' | 'solid'
  color?: string,
  bgColor?: string
  fontSize?: number | string
}

const props = withDefaults(defineProps<IButton>(), {
  variant: 'solid',
})

const buttonClass = computed(()=>{
  return  Object.values(props);
})

const buttonVariants = {
  'solid': ''
}

</script>