<script setup>
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/vehicleInspection'
</script>

<template>
  <h1>車検整備</h1>
  <Flow :flow-data="flowData" />
</template>
