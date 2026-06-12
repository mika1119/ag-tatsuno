<script setup>
  import { getImage } from '@/utils/imageSrcsets';
  import { IMAGE_SIZES } from '@/utils/imageSizes';

  const logo = getImage('logo/base-logo.webp');
</script>

<template>
  <img :src="logo.image" :srcset="logo.srcset" :sizes="IMAGE_SIZES.logo" class="base-logo" alt="">
</template>

<style lang="scss" scoped>
  .base-logo {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>