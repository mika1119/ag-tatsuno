<script setup>
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/usedCarSales'
</script>

<template>
  <h1>中古車販売</h1>
  <Flow :flow-data="flowData" />
</template>
