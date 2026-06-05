<script setup>
  import SuzukiLogo from '@/components/logo/SuzukiLogo.vue';
</script>

<template>
  <a href="https://www.suzuki.co.jp/car/" target="_blank" rel="noopener noreferrer">
    <SuzukiLogo/>
  </a>
</template>

<style lang="scss" scoped>
  .suzuki-logo {
    width: clamp(16rem, 24vw,26rem);
    height: 100%;
    display: block;
    object-fit: contain;
    margin: 0 auto;
  }
</style>