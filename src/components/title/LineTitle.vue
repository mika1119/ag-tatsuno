<script setup>
defineProps({
  text: {
    type: String,
  },
  position: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <div :class="['line-title', `line-title_${position}`]">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
  .line-title {
    font-size: clamp(1.4rem, 2.6vw, 2.4rem);
    font-weight: 600;
    border-bottom: 1px solid $color-separate;
    white-space: pre-line;
    padding: 1rem;
    @include display(md) {
      padding: 2rem;
    }
    @include display(lg) {
      font-size: clamp(2rem, 2vw, 2.4rem);
    }
    &_center {
      text-align: center;
      padding: 1rem 0;
      @include display(md) {
        padding: 2rem 0;
      }
    }
  }
</style>