<script setup lang="ts">
 import InfoLogo from '@/assets/InfoLogo.svg';

  const infoLinks = [
    {
      id: 1,
      title: 'Главная',
      link: '#'
    },
    {
      id: 2,
      title: 'Таблица',
      link: '#'
    },
    {
      id: 3,
      title: 'Календарь',
      link: '#'
    },
    {
      id: 4,
      title: 'Бомбардиры',
      link: '#'
    },
    {
      id: 5,
      title: 'Зрители',
      link: '#'
    },
    {
      id: 6,
      title: 'Трансферы',
      link: '#'
    }
  ]

  const activeId = 2
</script>

<template lang="">
  <div class="information">
    <div class="information__top">
      <div class="flex">
        <div class="information__icon">
          <img :src="InfoLogo" alt="logo" class="w-full" />
        </div>
        <div class="information__content">
          <div class="information__title md:text-2xl text-lg mb-2 font-medium">Украинская Премьер-Лига </div>
          <div class="information__subtitle text-[12px] text-[#00000061]">Сезон 2019/2020   32-й тур</div>
        </div>
      </div>
    </div>
    <div class="information__bottom">
      <div class="information__items flex items-center gap-x-[24px]">
        <div v-for="link in infoLinks" :key="link.id" class="information__item">
          <a :href="link.href" :class="['information__link', {active: link.id === activeId ? 'active' : ''}]">{{link.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .information {
    border-radius: 2px;
    border: 1px solid var(--gray);
    margin-bottom: 28px;
    &__top {
      padding: 24px 24px 0;
    }
    &__icon {
      width: 80px;
      margin-right: 24px;
    }

    &__bottom {
      padding-left: 104px;
      
      @media(max-width: 767px) {
        padding: 11px 16px 0;
        /* padding-left: 0; */
        margin-top: 24px;
        border-top: 1px solid var(--gray)
      }
    }
    &__items {
      @media(max-width: 767px) { 
        /* padding: 0 16px; */
        overflow: auto;
      }
    }
    &__link {
      position: relative;
      display: block;
      padding-bottom: 10px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      transition: 0.5s;
      cursor: pointer;
      &:after {
        position: absolute;
        bottom: 0;
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--yellow2);
        transition: transform 0.3s ease;
        opacity: 0;
      }
      &.active {
        color: rgba(0, 0, 0, 0.70);
        font-weight: 500;
        &:after {
          opacity: 1;
          transition: transform 0.3s ease;
        }
      }
      &:hover {
        color: #000;
        transition: 0.5s;
      }
    }
  }
</style>