<script setup>
  import BeltTitle from '@/components/title/BeltTitle.vue';
  import { infomationData } from '@/data/store/infomation';
</script>

<template>
  <div class="infomation">
    <BeltTitle text="店舗情報" />
    
    <dl class="infomation-list">
      <div v-for="item in infomationData" :key="item.label" class="infomation-list__item">
        <dt class="infomation-list__label">{{ item.label }}</dt>
        <dd class="infomation-list__value">{{ item.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
  .infomation {
    width: 100%;
    height: auto;
    @include display(md) {
      width: 80%;
      margin: 0 auto;
    }
  }

  .infomation-list {
    width: 100%;
    height: auto;
    &__item {
      width: 100%;
      height: auto;
      padding: 1rem 0 0 0;
      @include display(md) {
        padding: 2rem 0 0 0;
      }
    }
    &__label {
      font-size: $font-sm;
      border-bottom: 1px dotted $color-gray-dark;
      padding: 1rem;
      @include display(md) {
        padding: 1.6rem;
      }
    }
    &__value {
      font-size: $font-md;
      white-space: pre-line;
      border-bottom: 1px solid $color-gray-dark;
      padding: 1rem 1rem 1rem 3rem;
      @include display(md) {
        padding: 1.6rem 1.6rem 1.6rem 4rem;
      }
    }
  }
</style>