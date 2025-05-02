<script setup lang="ts">
  import News from "@/components/News/News.vue"
  import Trands from "@/components/Trands/Trands.vue"
  import IconVideo from "@/UI/Icons/iconVideo.vue"
  import Video from "@/components/Video/Video.vue"

</script>

<template lang="html">
  <div class="content-sidebar">
    <div class="content-sidebar__block">
      <div class="content-sidebar__title text-lg font-bold mb-4">Главные новости</div>
      <div class="content-sidebar__content">
        <News />
      </div>
    </div>

    <div class="content-sidebar__block">
      <div class="content-sidebar__title text-lg font-bold mb-4">Тренды</div>
      <div class="content-sidebar__content">
        <Trands />
      </div>
    </div>

    <div class="content-sidebar__block">
      <div class="content-sidebar__title text-lg font-bold mb-4 flex items-center">
        Видео
        <span class="ml-[7px]"><IconVideo /></span>
      </div>
      <div class="content-sidebar__content">
        <Video />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .content-sidebar {
    &__block:not(:last-child) {
      margin-bottom: 40px;
    }
  }
</style>