<script setup>
  import { computed } from 'vue';
  import { getImage } from '@/utils/cardImages';

  const props = defineProps({
    item: Object
  })

  const imageData = computed(() => {
    if (!props.item?.imagePath) return null
    return getImage(props.item.imagePath)
  })
</script>

<template>
  <!-- TODO：サイズ調整必要 -->
  <img v-if="imageData?.image" :src="imageData.image" :srcset="imageData.srcset" sizes="(max-width: 375px) 100vw, (max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 360px" :class="['card-image', item.fit ? 'card-image_contain' : '']" :alt="item.title">
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