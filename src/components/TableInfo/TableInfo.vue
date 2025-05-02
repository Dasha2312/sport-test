<script setup lang="ts">

</script>

<template lang="">
  <div class="table-info">
    <div class="table-info__inner flex md:gap-x-[40px] md:gap-y-0 gap-y-[12px] md:flex-row flex-col">
      <div class="table-info__block qualification">
        <div class="table-info__title text-xs font-medium mb-1">
          Квалификация
        </div>
        <div class="table-info__items">
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator color-indicator blue mr-2"
            ></span>
            <span class="text-xs">Чемпионы Лига чемпионов УЕФА</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator color-indicator light-blue mr-2"
            ></span>
            <span class="text-xs">Лига чемпионов УЕФА</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator color-indicator yellow mr-2"
            ></span>
            <span class="text-xs">Лига Европы УЕФА</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator color-indicator orange mr-2"
            ></span>
            <span class="text-xs">Понижение</span>
          </div>
        </div>
      </div>

      <div class="table-info__block abbreviations">
        <div class="table-info__title text-xs font-medium mb-1">
          Сокращения
        </div>
        <div class="table-info__items">
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >В</span
            >
            <span class="text-xs md:leading-1">Выигрыш</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >Н</span
            >
            <span class="text-xs md:leading-1">Ничья</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >П</span
            >
            <span class="text-xs md:leading-1">Поражение</span>
          </div>
          <div class="table-info__item flex items-center">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >З-П</span
            >
            <span class="text-xs md:leading-1">Забитые - пропущенные</span>
          </div>
          <div class="table-info__item flex items-center md:hidden">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >О</span
            >
            <span class="text-xs md:leading-1">Очки</span>
          </div>
          <div class="table-info__item flex items-center md:hidden">
            <span
              class="table-info__indicator letter-indicator mr-2 text-xs text-center font-medium md:font-normal"
              >И</span
            >
            <span class="text-xs md:leading-1">Игры</span>
          </div>
        </div>
      </div>

      <div class="table-info__block forms">
        <div class="table-info__title text-xs font-medium mb-1">
          Форма
        </div>
        <div class="table-info__items">
          <div class="table-info__item flex items-center mb-0.5">
            <span class="form w mr-2"></span>
            <span class="text-xs leading-1">Выигрыш</span>
          </div>
          <div class="table-info__item flex items-center mb-0.5">
            <span class="form l mr-2"></span>
            <span class="text-xs leading-1">Поражение</span>
          </div>
          <div class="table-info__item flex items-center mb-0.5">
            <span class="form d mr-2"></span>
            <span class="text-xs leading-1">Ничья</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .table-info {
  &__indicator {
    width: 20px;
    height: 20px;
  }
  .color-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50px;
    }
    &.blue:after {
      background: var(--blue);
    }
    &.light-blue:after {
      background: var(--light-blue);
    }
    &.yellow:after {
      background: var(--yellow);
    }
    &.orange:after {
      background: var(--orange);
    }
  }
}
  .form {
    display: block;
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
    border-radius: 2px;
    &.w {
      background: #00b16d url("@/assets/win.svg") no-repeat;
    }
    &.d {
      background: #f2d927 url("@/assets/draw.svg") no-repeat;
    }
    &.l {
      background: #f55333 url("@/assets/lose.svg") no-repeat;
    }
  }
  @media(max-width: 767px) {
    .forms {
      display: none;
    }
  }
  .abbreviations {
    .table-info__items {
      column-count: 2;
      .letter-indicator {
        white-space: nowrap;
      }
    }
  }
</style>