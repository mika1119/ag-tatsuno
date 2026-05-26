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
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 600;
    border-bottom: 1px solid $color-separate;
    white-space: pre-line;
    padding: 1rem;
    @include display(md) {
      padding: 2rem;
    }
    &_center {
      text-align: center;
    }
  }
</style>