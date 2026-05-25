<script setup>
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/generalMaintenance'
</script>

<template>
  <h1>一般整備</h1>
  <Flow :flow-data="flowData" />
</template>
