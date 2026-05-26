<script setup>
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/generalMaintenance'
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/generalMaintenance'
</script>

<template>
  <Card :card-data="cardData" />
  <Flow lineTitle="◎サービス利用の流れ" :flow-data="flowData" />
</template>
