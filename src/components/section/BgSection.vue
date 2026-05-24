<script setup>
  defineProps({
    color: {
      type: String,
      default: 'white'
    }
  })
</script>

<template>
  <div :class="['bg-section', `bg-section_${color}`]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .bg-section {
    width: 100%;
    height: auto;
    &_white {
      background-color: $white;
    }
    &_main-lightest {
      background-color: $color-main-lightest;
    }
    &_main {
      background-color: $color-main;
    }
  }
</style>