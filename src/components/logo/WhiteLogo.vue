<script setup>
  import { getImage } from '@/utils/imageSrcsets';
  import { IMAGE_SIZES } from '@/utils/imageSizes';

  const logo = getImage('logo/white-logo.webp');
</script>

<template>
  <img :src="logo.image" :srcset="logo.srcset" :sizes="IMAGE_SIZES.logo" class="white-logo" alt="オートガレージTATSUNO">
</template>

<style lang="scss" scoped>
  .white-logo {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>