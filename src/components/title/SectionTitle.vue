<script setup>
  import SuzukiLogo from '@/components/logo/SuzukiLogo.vue';

  defineProps({
    logo: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "base"
    },
    text: {
      type: String
    }
  })
</script>

<template>
  <h2 class="section-title">
    <SuzukiLogo v-if="logo" />
    <div :class="['section-title__text', `section-title_${color}`]">{{ text }}</div>
  </h2>
</template>

<style lang="scss" scoped>
  .section-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    &_main {
      color: $color-main;
    }
    &__text {
      font-size: $font-xl;
    }
    & img {
      width: auto;
      height: clamp(2rem, 4vw, 3.6rem);
      padding: 0.4rem 0 0 0;
    }
  }
</style>