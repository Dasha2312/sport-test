<script setup lang="ts">
  interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }

  const props = defineProps<ButtonProps>();

  const size = props.size ? `btn-${props.size}` : '';
</script>

<template lang="">
  <button :type="props.type" :class="[`btn ${size}`]" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    cursor: pointer;
    &:hover {

    }
  }
</style>