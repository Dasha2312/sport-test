<script setup lang="ts">
  import VideoBlock from "./VideoBlock.vue"

  const videos = [
    {id: 1, title: 'Руслан КОСТЫШИН: «Футболисты выступили с инициативой сократить зарплаты»', date: '28 октября 2020', comments: 99, category: 'Футбол', href: '/', img: '/videoImg.png'},
    {id: 2, title: 'Video 2', date: '28 октября 2021', comments: 5, category: 'Хокей', href: '/', img: '/videoImg.png'}
  ]
</script>

<template lang="">
  <div class="videos-blocks">
    <VideoBlock :videos="videos" />
  </div>
</template>

<style lang="scss">
  
</style>