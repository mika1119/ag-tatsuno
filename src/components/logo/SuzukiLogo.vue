<script setup>
  import logo from '@/assets/images/logo/suzuki-logo.webp';
</script>

<template>
  <img :src="logo" class="suzuki-logo" alt="スズキ株式会社のロゴ">
</template>

<style lang="scss" scoped>
  .suzuki-logo {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
</style>