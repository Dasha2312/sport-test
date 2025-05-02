<script setup lang="ts">
 import {TrandsProps} from "./types/interface"

 defineProps<TrandsProps>();
</script>

<template lang="">
  <div class="trand__item" v-for="trand in trands" :key="trand.id">
    <a :href="trand.href" class="trand__link">{{trand.name}}</a>
  </div>
</template>

<style lang="scss" scoped>
  .trand {
    &__item {
      padding: 4px;
    }
    &__link {
      display: flex;
      align-items: center;
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.70);
      padding: 9px 16px 9px 10px;
      transition: 0.5s;
      &:before {
        content: '';
        width: 14px;
        height: 14px;
        display: block;
        margin-right: 8px;
        background: url('@/assets/trand.svg') no-repeat;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 1);
        transition: 0.5s;
      }
    }
  }
</style>