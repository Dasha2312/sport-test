<script setup lang="ts">
import Header  from '@/Layout/Header/Header.vue'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs.vue'
import Football from '@/pages/Football/Football.vue'

</script>

<template lang="">
  <Header />
  <BreadCrumbs />

  <main class="main">
    <Football />
  </main>
</template>

<style lang="scss" scoped>
  main {
    padding: 24px 0;
    @media(max-width: 767px) {
      padding: 16px 0;
    }
  }
</style>