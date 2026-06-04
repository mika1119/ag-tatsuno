<script setup>
defineProps({
  text: {
    type: String
  },
  size: {
    type: String,
    default: 'font-lg'
  },
  position: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <h3 :class="['line-title', `line-title_${size}`, `line-title_${position}`]">
    {{ text }}
  </h3>
</template>

<style lang="scss" scoped>
  .line-title {
    font-weight: 600;
    border-bottom: 1px solid $color-separate;
    white-space: pre-line;
    padding: 1rem;
    @include display(md) {
      padding: 1.6rem;
    }
    &_font-md {
      font-size: $font-md;
    }
    &_font-lg {
      font-size: $font-lg;
    }
    &_center {
      text-align: center;
      padding: 1rem 0;
      @include display(md) {
        padding: 1.6rem 0;
      }
    }
  }
</style>