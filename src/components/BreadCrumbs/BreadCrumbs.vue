<script setup lang="ts">
  const breadCrumbs = [
    {
      id: 1,
      name: 'Главня', 
    },
    {
      id: 2,
      name: 'Футбол',
    }
  ]
</script>

<template lang="">
  <nav class="bread-crumbs" aria-label="breadcrumb">
    <div class="container">
      <ol class="bread-crumbs__items flex items-center">
        <li v-for="item in breadCrumbs" :key="item.id" class="bread-crumbs__item">
          <a href="#" class="bread-crumbs__link">{{item.name}}</a>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .bread-crumbs {
    padding: 10px 0;
    border-bottom: 1px solid var(--gray);
    @media(max-width: 767px) {
      border-bottom: 0;
      padding: 16px 0 0;
    }
    &__items {
      margin: 0 -5px;
    }
    &__item {
      display: flex;
      align-items: center;
      &:nth-child(1) {
        .bread-crumbs__link {
          pointer-events: none;
          color: rgba(0, 0, 0, 0.70);
        }
      }
      &:not(:last-child) {
        margin-right: 7px;
        &:after {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-left: 5px;
          background: url('@/assets/arrow-right.svg') no-repeat;
        }
      }
    }
    &__link {
      padding: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.38);
      transition: 0.5s;
      &:hover {
        color: rgba(0, 0, 0, 0.70);
        transition: 0.5s;
      }
    }
  }
</style>