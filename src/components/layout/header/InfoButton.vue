<script setup>
  defineProps({
    device: String
  })
</script>

<template>
  <div :class="['info-button', `info-button_${device}`]">
    <RouterLink :to="{ name: 'StoreGuide' }" class="info-button__link">店舗案内</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .info-button {
    width: 100%;
    height: auto;
    margin: 3.2rem 0 0 0;
    padding: 2.4rem 1.6rem;
    &_mobile {
      display: block;
      @include display(md) {
        display: none;
      }
    }
    &_desktop {
      display: none;
      @include display(md) {
        max-width: 14rem;
        display: block;
        margin: 0;
        padding: 0;
      }
    }
    &__link {
      width: 100%;
      height: auto;
      display: block;
      font-size: $font-md;
      font-weight: 400;
      text-align: center;
      background: linear-gradient(180deg, $white 0%, $white 60%, $color-gray 100%);
      border: 1px solid $color-base;
      border-radius: 0.8rem;
      box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 20%);
      transition: all 0.4s ease-in;
      padding: 1rem 0;
      &:hover {
        color: color-mix(in srgb, $black 60%, $white);
      }
      &:active {
        color: color-mix(in srgb, $black 60%, $white);
      }
    }
  }
</style>
