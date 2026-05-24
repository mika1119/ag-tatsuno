<script setup>
  import { FooterNavItems } from '@/data/footer-nav';
</script>

<template>
  <nav class="footer-nav" aria-label="フッターナビゲーション">
    <ul class="footer-nav__list">
      <li v-for="item in FooterNavItems" :key="item.path" class="footer-nav__item">
        <RouterLink :to="item.path" class="footer-nav__link">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .footer-nav {
    width: 100%;
    height: auto;
    &__list {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1.6rem 1rem;
    }
    &__item {
      width: auto;
      height: auto;
      padding: 0 1.6rem;
    }
    &__link {
      font-size: clamp(1.3rem, 3vw, 1.8rem);
      color: $white;
      &:hover {
        border-bottom: 1px solid $white;
      }
      &:active {
        border-bottom: 1px solid $white;
      }
    }
  }
</style>