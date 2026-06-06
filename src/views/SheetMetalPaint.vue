<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/sheetMetalPaint';
  import Flow from '@/components/layout/flow/Flow.vue';
  import { flowData } from '@/data/flow/sheetMetalPaint';
</script>

<template>
  <div class="sheet-metal-paint">
    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle text="板金塗装" />
        <Card :card-data="cardData" />
      </PaddingSection>
    </BgSection>

    <BgSection>
      <PaddingSection>
        <Flow lineTitle="◎サービス利用の流れ" :flow-data="flowData" />
      </PaddingSection>
    </BgSection>
  </div>
</template>
