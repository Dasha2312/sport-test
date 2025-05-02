<script setup lang="ts">
import { Team } from "./types/interface";
import 'floating-vue/dist/style.css';
import { onBeforeUnmount, onMounted, ref } from "vue";

  const {groupTeam} = defineProps<{
    groupTeam: Team[]
  }>();

  const isMobile = ref(false)
  function checkMobile() {
    isMobile.value = window.innerWidth < 768
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile)
  })


  const sortedTeam = [...groupTeam].sort((a, b) => b.scored - a.scored)

</script>

<template lang="">
  <tbody>
    <tr v-for="(info, index) in sortedTeam">
      <td>
        <div class="flex items-center md:gap-x-2 gap-x-1.5">
          <VTooltip v-if="index === 0" placement="bottom-start" :triggers="isMobile ? ['click'] : ['hover', 'focus']" :key="isMobile">
            <a class="info-count bg-[#00B86C]"> {{index + 1}}</a>
            <template #popper>
              Лига чемпионов УЕФА
            </template>
          </VTooltip>
          <VTooltip v-else-if="index === 1 || index === 2" placement="bottom-start" :triggers="isMobile ? ['click'] : ['hover', 'focus']" :key="isMobile">
            <a :class="['info-count', index === 1 && 'bg-[#00B86C]', index === 2 && 'bg-[#3188FF]']"> {{index + 1}}</a>
            <template #popper>
              Чемпионы Лига чемпионов УЕФА
            </template>
          </VTooltip>
          <span v-else class="info-count !text-black">{{index + 1}}</span>
          <span class="team-logo"><img :src="info.logo" alt="" width="24"></span>
          <span class="inline text-xs team-name">{{info.name}}</span>
        </div>
      </td>
      <td>
        <div class="text-center">{{info.games}}</div>
      </td>
      <td>
        <div class="text-center">{{info.wins}}</div>
      </td>
      <td>
        <div class="text-center">{{info.draws}}</div>
      </td>
      <td>
        <div class="text-center">{{info.loses}}</div>
      </td>
      <td>
        <div class="text-center">{{info.scored}} - {{info.conceded}}</div>
      </td>
      <td class="col-forms">
        <div class="flex justify-center gap-x-[2px]">
          <span v-for="form in info.form" :class="`form ${form.toLowerCase()}`"></span>
        </div>
      </td>
      <td>
        <div class="text-center points">{{info.points}}</div>
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
  tbody {
    tr:not(:last-child){
      border-bottom: 1px solid rgba(95, 120, 137, 0.16);
    }
    td {
      padding: 6px;
      @media(max-width: 767px) {
        padding: 6px 4px;
      }
      &:first-child {
        padding-left: 12px;
      }
      &:last-child {
        padding-right: 12px;
      }
      div {
        
        white-space: no-wrap;
      }
    }
  }
  .info-count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    font-size: 15px;
    color: #fff;
    border-radius: 24px;
    @media(max-width: 767px) {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }
  }
  .form {
    width: 16px;
    height: 16px;
    flex:  0 0 16px;
    border-radius: 2px;
    &.w {
      background: #00B16D url('@/assets/win.svg') no-repeat;
    }
    &.d {
      background: #F2D927 url('@/assets/draw.svg') no-repeat;
    }
    &.l {
      background: #F55333 url('@/assets/lose.svg') no-repeat;
    }
  }
  .team-logo {
    width: 24px;
    flex: 0 0 24px
  }
  .team-name {
    white-space: nowrap;
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    @media(max-width: 1024px) {
      width: auto;
    }
    @media(max-width: 575px) {
      max-width: 96px;
    }
  }
  .points {
    font-size: 15px;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  @media(max-width: 767px) {
    .col-forms {
      display: none;
    }
  }
</style>