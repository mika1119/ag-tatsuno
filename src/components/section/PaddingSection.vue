<script setup>
  defineProps({
    size: {
      type: String,
      default: 'default'
    }
  })
</script>

<template>
  <div :class="['padding-section', `padding-section_${size}`]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .padding-section {
    width: 100%;
    height: auto;
    @include max-width;
    &_default {
      padding: 0 1.2rem;
    }
    &_large {
      padding: 0 2.8rem;
    }
    @include display(md) {
      padding: 0 4.8rem;
    }
  }
</style>