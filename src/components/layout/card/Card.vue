<script setup>
  import CardContent from '@/components/layout/card/CardContent.vue';

  defineProps({
    layout: {
      type: String,
      default: 'grid-none'
    },
    cardData: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div :class="['card', `card_${layout}`]">
    <CardContent v-for="item in cardData" :key="item.title" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 100%;
    height: auto;
    display: grid;
    gap: 1.6rem;
    padding: 1.6rem 0 0 0;
    @include display(md) {
      gap: 3.2rem;
      padding: 3.2rem 0 0 0;
    }
    &_grid {
      @include display(md) {
        grid-template-columns: repeat(2, 1fr);
      }
      @include display(lg) {
        grid-template-columns: repeat(3, 1fr);
      }
      & .card-content {
        padding: 1.6rem;
      }
    }
  }
</style>