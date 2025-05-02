<script setup lang="ts">
  import TableHeader from './TableHeader.vue'
  import TableBody from './TableBody.vue'
  import {Team} from "./types/interface"

  const { groupTeam, groupName, headerTitle } = defineProps<{
    groupTeam?: Team[],
    groupName?: string,
    headerTitle?: string[]
  }>()
</script>

<template lang="">
  <table class="table w-full">
    <TableHeader :headerTitle="headerTitle" :groupName="groupName"  />
    <TableBody :groupTeam="groupTeam" />
  </table>
</template>

<style lang="scss" scoped>
  .table {
    border-radius: 6px;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>