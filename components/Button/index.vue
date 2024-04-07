<template>
  <button :class="buttonClass" class="">
    <slot/>
  </button>
</template>

<script setup lang="ts">

interface IButton {
  variant?: 'link' | 'outline' | 'solid' | 'unstyle'
  color?: string,
  bgColor?: string
  fontSize?: number | string
}

const props = withDefaults(defineProps<IButton>(), {
  variant: 'solid',
})

const baseClasses = 'px-[18px] py-[14px] rounded-md  cursor-pointer'

const buttonClass = computed(()=>{
  if(props.variant == 'link'){
    return 'bg-transparent border-0 dark:text-white' + ' ' + baseClasses
  } 
  else if(props.variant == 'outline'){
    return 'text-brand-primary border border-solid border-brand-primary bg-transparent ' + ' ' + baseClasses
  } 
    else if(props.variant == 'unstyle'){
      return ''
  } else {
    return ' border-0 bg-brand-primary text-white ' + ' ' + baseClasses

  }
})
</script>