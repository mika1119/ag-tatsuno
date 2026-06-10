<script setup>
  import { panelData } from '@/data/panel/home';
  import { getImage } from '@/utils/imageSrcsets';  
</script>

<template>
  <div class="panel-wrap">
    <p class="panel-wrap__text">当店は安全・安心を第一に考えています</p>

    <div class="panel">
      <div v-for="item in panelData" :key="item.text" :item="item" class="panel-item">
        <img :src="getImage(item.imagePath).image" :srcset="getImage(item.imagePath).srcset" :sizes="item.sizes" class="panel-item__image" :alt="item.text">
        <div class="panel-item__text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .panel-wrap {
    width: 100%;
    height: auto;
    &__text {
      text-align: center;
      padding: 1rem 0 1.6rem 0;
      @include display(md) {
        padding: 1.6rem 0 3.2rem 0;
      }
    }
  }

  .panel {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    @include display(md) {
      gap: 1.6rem;
    }
  }

  .panel-item {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    gap: 1rem;
    &__image {
      width: 100%;
      height: 100%;
      background-color: $white;
      padding: 1rem;
      @include display(md) {
        padding: 1.6rem;
      }
    }
  }
</style>