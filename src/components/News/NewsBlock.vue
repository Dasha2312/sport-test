<script setup lang="ts">
  import {NewsItems} from "./types/interface"

  defineProps<NewsItems>();

</script>

<template lang="">
  <article class="news__item" v-for="item in newsItems" :key="item.id">
    <a :href="item.href" class="block news__link text-base leading-[22px] py-4">{{item.title}}</a>
  </article>
</template>

<style lang="scss" scoped>
  .news__link {
    display: flex;
    border-bottom: 1px solid var(--gray);
    position: relative;
    color: rgba(0, 0, 0, 0.80);
    transition: 0.5s;
    &:before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      background: url('@/assets/arrow.svg') no-repeat;
      margin-right: 12px;
      margin-top: 5px;
    }
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
</style>