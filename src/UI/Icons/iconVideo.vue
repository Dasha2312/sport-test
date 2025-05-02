<script setup lang='ts'>
import {IconProps} from "./types/interface"
  
  withDefaults(defineProps<IconProps>(),{
    color: "#000",
    size: 13 
  })
</script>

<template lang="">
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" height="10" viewBox="0 0 13 10" fill="none">
    <path d="M7.58785 0.649902H1.07882C0.482986 0.649902 0 1.13289 0 1.72872V8.23775C0 8.83358 0.482986 9.31657 1.07882 9.31657H7.58785C8.18368 9.31657 8.66667 8.83358 8.66667 8.23775V1.72872C8.66667 1.13289 8.18368 0.649902 7.58785 0.649902ZM11.8625 1.50077L9.38889 3.20702V6.75945L11.8625 8.46344C12.341 8.79296 13 8.45667 13 7.88115V2.08306C13 1.5098 12.3432 1.17126 11.8625 1.50077Z" :fill="color" fill-opacity="0.54"/>
  </svg>
</template>
