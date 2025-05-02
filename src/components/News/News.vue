<script setup lang="ts">
import NewsBlock from "./NewsBlock.vue"

const newsItems = [
  {id: 1, title: 'Артем ФРАНКОВ: «Я не сторонник перехода на систему весна-осень»', href: '/'},
  {id: 2, title: 'Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде', href: '/'},
  {id: 3, title: 'КАРИКАТУРА ДНЯ. Сэйв столетия от Бэнкса после удара Пеле', href: '/'},
  {id: 4, title: 'Лунин стал игроком месяца в Овьедо', href: '/'},
  {id: 5, title: 'Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде', href: '/'},
]
</script>

<template lang="html">
  <section class="news">
    <div class="news__items">
      <NewsBlock :newsItems="newsItems"  />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  
</style>