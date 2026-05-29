<script setup>
  import FlowLabel from '@/components/layout/flow/FlowLabel.vue';

  defineProps({
    item: Object
  })
</script>

<template>
  <div class="flow-card">
    <div class="flow-card-group">
      <FlowLabel :icon="item.icon" :num="item.num" />
      <div class="flow-card-group__title">{{ item.title }}</div>
    </div>

    <div class="flow-card__desc">
      <p v-for="text in item.description" :key="text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flow-card {
    width: 100%;
    height: auto;
    background-color: $color-main-lightest;
    display: grid;
    gap: 1rem;
    padding: 1.6rem;
    @include display(md) {
      grid-template-columns: clamp(16rem, 14vw, 24rem) auto;
      align-items: start;
      gap: 2rem;
      padding: 3.2rem;
    }
    &__desc {
      font-size: $font-md;
      color: $color-main-light;
    }
  }

  .flow-card-group {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    gap: 1rem;
    &__title {
      font-size: $font-md;
      font-weight: 400;
      color: $color-main-light;
    }
  }
</style>