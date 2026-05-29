<script setup>
  import InfoButton from '@/components/layout/header/InfoButton.vue';
  import { HeaderNavItems } from '@/data/headerNav';

  defineProps({
    isOpen: Boolean
  })
</script>

<template>
  <nav :class="['header-nav', { 'header-nav_open': isOpen }]" aria-label="ヘッダーナビゲーション">
    <ul class="header-nav__list">
      <li v-for="item in HeaderNavItems" :key="item.path" class="header-nav__item">
        <RouterLink :to="item.path" class="header-nav__link">
          {{ item.label }}
        </RouterLink>
      </li>
      <InfoButton device="mobile" />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .header-nav {
    width: 26rem;
    max-height: calc(100vh - 6rem);
    background-color: $white;
    position: absolute;
    top: 6rem;
    right: 0;
    transform: translateX(100%);
    transition: all 0.4s ease-in;
    overflow-y: auto;
    z-index: 900;
    box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 16%);
    @include display(md) {
      width: 100%;
      top: 9rem;
      transform: none;
      border-bottom: 1px solid $color-separate;
    }
    &_open {
      transform: translateX(0);
    }
    &__list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      @include display(md) {
        @include max-width;
        flex-direction: row;
        padding: 0 3.2rem;
      }
    }
    &__item {
      width: 100%;
      height: auto;
      border-bottom: 1px solid $color-separate;
      @include display(md) {
        border-bottom: none;
      }
    }
    &__link {
      width: 100%;
      height: auto;
      display: grid;
      font-size: $font-md;
      background-color: $white;
      transition: all 0.4s ease-in;
      padding: 1.4rem 1.6rem;
      @include display(md) {
        height: 5rem;
        place-items: center;
        padding: 0;
      }
      &:hover {
        background-color: $color-gray-light;
        @include display(md) {
          box-shadow: inset 0 -4px 0 $color-main-dark;
        }
      }
      &:active {
        background-color: $color-gray-light;
      }
    }
  }
</style>