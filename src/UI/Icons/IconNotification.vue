<script setup lang="ts">
  import {IconProps} from "./types/interface"

  withDefaults(defineProps<IconProps>(),{
    color: "#000",
    size: 20  
  })
</script>
<template lang="">
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 22 22" fill="none">
    <g clip-path="url(#clip0_1_267)">
    <path d="M10.9974 20.168C12.0057 20.168 12.8307 19.343 12.8307 18.3346H9.16406C9.16406 19.343 9.98906 20.168 10.9974 20.168ZM16.4974 14.668V10.0846C16.4974 7.27047 15.0032 4.91464 12.3724 4.2913V3.66797C12.3724 2.90714 11.7582 2.29297 10.9974 2.29297C10.2366 2.29297 9.6224 2.90714 9.6224 3.66797V4.2913C7.00073 4.91464 5.4974 7.2613 5.4974 10.0846V14.668L3.66406 16.5013V17.418H18.3307V16.5013L16.4974 14.668ZM14.6641 15.5846H7.33073V10.0846C7.33073 7.8113 8.7149 5.95964 10.9974 5.95964C13.2799 5.95964 14.6641 7.8113 14.6641 10.0846V15.5846Z" :fill="color"/>
    </g>
    <defs>
    <clipPath id="clip0_1_267">
    <rect width="22" height="22" :fill="color"/>
    </clipPath>
    </defs>
  </svg>
</template>

<style lang="">
  
</style>