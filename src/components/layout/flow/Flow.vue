<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import LineTitle from '@/components/title/LineTitle.vue';
  import FlowCard from '@/components/layout/flow/FlowCard.vue'

  defineProps({
    title: {
      type: String
    },
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
        <LineTitle :text="title" />
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
</style>: