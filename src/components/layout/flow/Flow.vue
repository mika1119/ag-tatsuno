<script setup>
  import LineTitle from '@/components/title/LineTitle.vue';
  import FlowCard from '@/components/layout/flow/FlowCard.vue';

  defineProps({
    lineTitle: {
      type: String
    },
    flowData: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div class="flow">
    <LineTitle :text="lineTitle" />
    <FlowCard v-for="item in flowData" :key="item.num" :item="item" />
  </div>
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