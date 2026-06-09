<script setup>
  import { computed } from 'vue';
  import { getImage } from '@/utils/cardSrcImages';

  const props = defineProps({
    item: Object
  })

  const imageData = computed(() => {
    if (!props.item?.imagePath) return null
    return getImage(props.item.imagePath)
  })
</script>

<template>
  <img v-if="imageData?.image" :src="imageData.image" :srcset="imageData.srcset" sizes="(max-width: 767px) 100vw, 712px" :class="['card-image', item.fit ? 'card-image_contain' : '']" :alt="item.title">
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