<script setup>
  import logo from '@/assets/images/logo/suzuki-logo.webp';
</script>

<template>
  <a href="https://www.suzuki.co.jp/car/" target="_blank" rel="noopener noreferrer">
    <img :src="logo" class="suzuki-logo" alt="">
  </a>
</template>

<style lang="scss" scoped>
  .suzuki-logo {
    width: clamp(16rem, 24vw,26rem);
    height: 100%;
    display: block;
    margin: 0 auto;
  }
</style>