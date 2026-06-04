<script setup>
  import decor from '@/assets/images/decoration.webp';

  defineProps({
    label: {
      type: Boolean,
      default: true
    },
    text: {
      type: String
    }
  })
</script>

<template>
  <h2 class="page-title">
    <img :src="decor" class="page-title__image" alt="ページタイトルの装飾" />
    <div class="page-title-group">
      <span v-if="label" class="page-title-group__label">車・バイク</span>
      <div class="page-title-group__text">{{ text }}</div>
    </div>
    <img :src="decor" class="page-title__image" alt="ページタイトルの装飾" />
  </h2>
</template>

<style lang="scss" scoped>
  .page-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    &__image {
      width: clamp(5rem, 10vw, 8rem);
      height: auto;
    }
  }

  .page-title-group {
    width: auto;
    height: 100%;
    display: grid;
    place-items: center;
    &__label {
      font-size: $font-lg;
    }
    &__text {
      font-size: $font-xl;
    }
  }
</style>