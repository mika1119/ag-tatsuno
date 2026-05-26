<script setup>
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/newCarSales'
</script>

<template>
  <h1>新車販売</h1>
  <Flow lineTitle="◎ご契約までの流れ" :flow-data="flowData" />
</template>
