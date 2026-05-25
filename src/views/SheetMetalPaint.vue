<script setup>
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/sheetMetalPaint'
</script>

<template>
  <h1>板金塗装</h1>
  <Flow :flow-data="flowData" />
</template>
