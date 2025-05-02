<script setup lang="ts">
import { VideoProps } from  "./types/interface";
import IconComments from "@/UI/Icons/IconComment.vue";

defineProps<VideoProps>();
</script>

<template lang="">
  <div class="video-block" v-for="video in videos" :key="video.id">
    <a :href="video.href"  class="video-block__inner relative">
      <span class="video-block__category">{{video.category}}</span>
      <span class="video-block__videoIcon"></span>
      <img :src="video.img" class="w-full rounded-lg" />
      <div class="video-block__content">
        <div class="video-block__title text-white font-medium text-base mb-3 duration-500">
          {{video.title}}
        </div>
        <div class="video-block__info flex items-center gap-x-4">
          <div class="text-xs">{{video.date}}</div>
          <div class="flex items-center">
            <IconComments />
            <span class="text-xs ml-0.5">{{video.comments}}</span>
          </div>
        </div>
      </div>
      
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .video {
    &-block {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &__inner {
        &:hover {
          .video-block__title {
            opacity: 0.7;
            transition: 0.5s;
          }
        }
      }
    
      &__content {
        position: absolute;
        width: calc(100% - 24px);
        left: 12px;
        bottom: 12px;
        color: rgba(255, 255, 255, 0.70);
      }

      &__category {
        position: absolute;
        top: 12px;
        left: 12px;
        background: #25BB1E;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        border-radius: 2px;
        padding: 4px 10px 4px 8px;
        text-transform: capitalize;
      }
      &__videoIcon {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 40px;
        height: 40px;
        background: url('@/assets/videoIcon.svg') no-repeat;
      }
    }
  }
  
</style>