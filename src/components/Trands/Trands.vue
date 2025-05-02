<script setup lang="ts">
  import Trand from "./Trand.vue"

const trands = [
  {id: 1, name: 'Коронавирус', href: '/'},
  {id: 2, name: 'Трансферы лета', href: '/'},
  {id: 3, name: 'Рейтинг клубов', href: '/'},
  {id: 4, name: 'Барселона', href: '/'},
]
</script>

<template lang="">
  <div class="trands__items">
    <Trand :trands="trands" />
  </div>
</template>

<style lang="scss" scoped>
  .trands__items {
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
  }
</style>