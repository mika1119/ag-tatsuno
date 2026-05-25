<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import FlowCard from '@/components/layout/flow/FlowCard.vue'

  defineProps({
    flowData: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <BgSection>
    <PaddingSection>
      <div class="flow">
        <FlowCard v-for="item in flowData" :key="item.num" :item="item" />
      </div>
    </PaddingSection>
  </BgSection>
</template>

<style lang="scss" scoped>
  .flow {
    width: 100%;
    height: auto;
    display: grid;
    gap: 1rem 0;
    @include display(md) {
      gap: 3.2rem 0;
    }
  }
</style>