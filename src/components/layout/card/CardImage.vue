<script setup>
  defineProps({
    item: Object
  })
</script>

<template>
  <img v-if="item.image" :src="item.image" :srcset="item.srcset" sizes="(max-width: 767px) 100vw, 928px" :class="['card-image', item.fit ? 'card-image_contain' : '']" :alt="item.title">
</template>

<style lang="scss" scoped>
  .card-image {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    &_contain {
      object-fit: contain;
    }
  }
</style>