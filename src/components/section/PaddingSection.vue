<script setup>
  defineProps({
    x: {
      type: String,
      default: 'default'
    },
    y: {
      type: String,
      default: 'default'
    }
  })
</script>

<template>
  <div :class="['padding-section', `padding-section_x-${x}`, `padding-section_y-${y}`]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .padding-section {
    width: 100%;
    height: auto;
    @include max-width;
    &_x-default {
      padding-inline: 1.2rem;
      @include display(md) {
        padding-inline: 4.8rem;
      }
    }
    &_x-large {
      padding-inline: 2.8rem;
      @include display(md) {
        padding-inline: 4.8rem;
      }
    }
    &_y-default {
      padding-block: 3.2rem;
      @include display(md) {
        padding-block: 6.4rem;
      }
    }
    &_y-top-only {
      padding-block: 3.2rem 0;
      @include display(md) {
        padding-block: 6.4rem 0;
      }
    }
    &_y-none {
      padding-block: 0;
    }
  }
</style>