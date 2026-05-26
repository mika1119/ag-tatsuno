<script setup>
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/usedCarSales'
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/usedCarSales'
</script>

<template>
  <h1>中古車販売</h1>
  <Card :card-data="cardData" />
  <Flow lineTitle="◎中古車購入までの流れ" :flow-data="flowData" />
</template>
