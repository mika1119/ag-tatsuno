<script setup>
  defineProps({
    color: {
      type: String,
      default: 'white'
    }
  })
</script>

<template>
  <section :class="['bg-section', `bg-section_${color}`]">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
  .bg-section {
    width: 100%;
    height: auto;
    padding: 3.2rem 0;
    @include display(md) {
      &:first-child {
        padding: 6.4rem 0 3.2rem 0;
      }
    }
    &_white {
      background-color: $white;
    }
    &_main-lightest {
      background-color: $color-main-lightest;
    }
    &_main {
      background-color: $color-main;
      padding: 0;
    }
  }
</style>