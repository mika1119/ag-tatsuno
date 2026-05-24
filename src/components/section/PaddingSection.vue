<script setup>
  defineProps({
    size: {
      type: String,
      default: 'default'
    }
  })
</script>

<template>
  <section :class="['padding-section', `padding-section_${size}`]">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
  .padding-section {
    width: 100%;
    max-width: $xl;
    height: auto;
    &_default {
      margin: 3.2rem auto;
      padding: 0 1.2rem;
    }
    &_large {
      margin: 3.2rem auto;
      padding: 0 2.8rem;
    }
    @include display(md) {
      margin: 6.4rem auto;
      padding: 0 4.8rem;
    }
  }
</style>