<script setup>
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/sheetMetalPaint'
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/sheetMetalPaint'
</script>

<template>
  <h1>板金塗装</h1>
  <Card :card-data="cardData" />
  <Flow lineTitle="◎サービス利用の流れ" :flow-data="flowData" />
</template>
