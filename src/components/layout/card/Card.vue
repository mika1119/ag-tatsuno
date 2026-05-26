<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import CardContent from '@/components/layout/card/CardContent.vue';

  defineProps({
    cardData: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <BgSection color="main-lightest">
    <PaddingSection>
      <div class="card">
        <CardContent v-for="item in cardData" :key="item.title" :item="item" />
      </div>
    </PaddingSection>
  </BgSection>
</template>

<style lang="scss" scoped>
  .card {
    width: 100%;
    height: auto;
    display: grid;
    gap: 1.6rem;
    padding: 1.6rem 0;
    @include display(md) {
      gap: 3.2rem;
      padding: 3.2rem 0;
    }
  }
</style>