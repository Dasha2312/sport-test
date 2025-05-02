<script setup lang="ts">
import Menu from '@/components/Menu/Menu.vue'
import IconStar from '@/UI/Icons/IconStar.vue'
import Logo from '@/assets/Logo.svg'
import Button from "@/UI/Button/Button.vue"
import IconNotification from '@/UI/Icons/IconNotification.vue'
import IconSearch from '@/UI/Icons/IconSearch.vue'

const navDown = [
  {
    id: 1,
    title: 'ФУТБОЛ'
  },
  {
    id: 2,
    title: 'Зачет медалей'
  },
  {
    id: 3,
    title: 'Рейтинги'
  }
]
</script>

<template lang="">
  <header class="header">
    <div class="header__top">
      <div class="container !p-0">
        <div class="header__inner flex justify-between items-center py-[8px]">
          <div class="header__left flex items-center">
            <button type="button" class="hamburger mr-[12px]">
              <span class="hamburger__wrapp">
                <span class="hamburger__inner"></span>
              </span>
            </button>
            <div class="header__logo">
              <img :src="Logo" alt="Logo" />
            </div>
          </div>

          <div class="header__right flex items-center">
            <div class="header__favorite relative">
              <span class="header__favorite-indicator"></span>
              <Button type="button" class="favorite bg-transparent p-[9px]">
                <IconStar color="#fff" :size="22" />
              </Button>
            </div>
            <div class="header__notification relative">
              <span class="header__notification-indicator">2</span>
              <Button type="button" class="notification p-[9px]">
                <IconNotification color="#fff" :size="22" />
              </Button>
            </div>
            <div class="header__search">
              <Button type="button" class="search p-[8px]">
                <IconSearch color="#fff" :size="24" />
              </Button>
            </div>
            <div class="header__auth p-[6px]">
              <div class="header__auth-name bg-[#31C26B] w-[28px] h-[28px] text-[16px] font-medium text-white capitalize rounded-full flex items-center justify-center">D</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header__nav">
      <div class="container">
        <nav class="header__nav-list">
          <ul class="header__nav-items flex items-center">
            <li v-for="item in navDown"
              :key="item.id"
              class="header__nav-item"
            >
              <a href="#" class="header__nav-link">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header> 

  <Menu />
</template>

<style lang="scss" scoped>
  .header {
    &__top {
      background: var(--black);
    }
    &__notification,
    &__favorite,
    &__search,
    &__auth {
      cursor: pointer;
      border-radius: 8px;
      transition: 0.5s;
      &:hover {
        background-color: #fff3;
        transition: 0.5s;
      }
    }

    &__favorite-indicator {
      display: block;
      position: absolute;
      top: 6px;
      right: 7px;
      width: 6px;
      height: 6px;
      background: var(--yellow);
      border-radius: 50px;
      
    }
    &__notification-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 7px;
      right: 7px;
      width: 14px;
      height: 14px;
      background: var(--red);
      font-weight: 900;
      line-height: 12px;
      font-size: 10px;
      color: #fff;
      border-radius: 50px;
    }

  }

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity, filter;
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    padding: 8px;
    transition: 0.5s;
    border-radius: 8px;
    &:hover {
      background-color: #fff3;
      transition: 0.5s;
    }
    &__wrapp {
      position: relative;
      display: block;
      width: 18px;
      height: 12px;
    }
    &__inner {
      top: 50%;
      display: block;
      /* margin-top: -2px; */
      transition-timing-function: cubic-bezier(.55,.055,.675,.19);
      transition-duration: 75ms;
      &:before,
      &:after {
        display: block;
        content: "";
      }
      &,
      &:before,
      &:after {
        position: absolute;
        width: 100%;
        height: 2px;
        transition-timing-function: ease;
        transition-duration: .15s;
        transition-property: transform;
        border-radius: 4px;
        background-color: #fff;
      }
      &:before {
        top: -4px;
        transition: top 75ms ease .12s, opacity 75ms ease;
      }
      &:after {
        bottom: -4px;
        transition: bottom 75ms ease .12s, transform 75ms cubic-bezier(.55,.055,.675,.19);
      }
    }
  }

  .header__nav {
    padding: 10px 0;
    border-bottom: 1px solid var(--gray);
    @media(max-width: 767px) {
      display: none;
    }
    &-item {
      &:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 16px;
        .header__nav-link {
          pointer-events: none;
          color: rgba(0, 0, 0, 0.90);
          text-transform: uppercase;
          padding-left: 0;
          padding-right: 0;
        }
        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 16px;
          margin-left: 16px;
          background: #EEE; 
        }
        &:before {
          content: '';
          display: block;
          width: 16px;
          height: 16px;
          background: url('@/assets/football.svg') no-repeat;
          background-size: contain;
          margin-right: 8px;    
        }
      }
    }
    &-link {
      display: block;
      color: rgba(0, 0, 0, 0.70);
      padding: 5px 12px;
      transition: 0.5s;
      border-radius: 4px;
      &:hover {
        background: rgba(0, 0, 0, 0.15);
        transition: 0.5s;
      }
    }
  }
</style>