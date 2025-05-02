<script setup lang="ts">
  const { groupName, headerTitle } = defineProps<{
    groupName?: string,
    headerTitle?: string[]
  }>()
</script>

<template lang="">
  <thead>
    <tr>
      <th><div class="text-left">Группа {{groupName}}</div></th>
      <th v-for="name in headerTitle" :class="[{ 'col-forms': name === 'Ф' || name === 'Форма' }]">
        <div class="text-center">{{name}}</div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
  thead {
    
    background: #333;
    color: #fff;
    padding: 4px 16px;
    th {
      padding: 4px;
      div {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
      }
      &:first-child {
        padding-left: 16px;
        border-radius: 6px 0 0px 0px;
      }
      &:last-child {
        padding-right: 16px;
        border-radius: 0px 6px 0 0;
      }
    }
  }
  @media(max-width: 767px) {
    .col-forms {
      display: none;
    }
  }
</style>