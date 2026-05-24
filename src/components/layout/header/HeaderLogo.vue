<script setup>
  import BaseLogo from '@/components/logo/BaseLogo.vue';
</script>

<template>
  <h1 class="header-logo">
    <RouterLink :to="{ name: 'Home' }" class="header-logo__link">
      <BaseLogo />
      <div class="header-logo__text">オートガレージTATSUNO</div>
    </RouterLink>
  </h1>
</template>

<style lang="scss" scoped>
  .header-logo {
    width: auto;
    height: 100%;
    font-size: 1.6rem;
    &__text {
      width: 0.1rem;
      height: 0.1rem;
      position: absolute;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
      margin: 0;
      padding: 0;
    }
  }
</style>