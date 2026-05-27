<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/vehicleInspection'
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/vehicleInspection'
</script>

<template>
  <BgSection color="main-lightest">
    <PaddingSection>
      <PageTitle text="車検整備" />
      <Card :card-data="cardData" />
    </PaddingSection>
  </BgSection>

  <BgSection>
    <PaddingSection>
      <Flow lineTitle="◎サービス利用の流れ" :flow-data="flowData" />
    </PaddingSection>
  </BgSection>
</template>
