<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/generalMaintenance'
  import Flow from '@/components/layout/flow/Flow.vue'
  import { flowData } from '@/data/flow/generalMaintenance'
</script>

<template>
  <BgSection color="main-lightest">
    <PaddingSection>
      <PageTitle text="修理・メンテナンス" />
      <Card :card-data="cardData" />
    </PaddingSection>
  </BgSection>

  <BgSection>
    <PaddingSection>
      <Flow lineTitle="◎サービス利用の流れ" :flow-data="flowData" />
    </PaddingSection>
  </BgSection>
</template>
