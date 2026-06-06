<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/usedCarSales';
  import Flow from '@/components/layout/flow/Flow.vue';
  import { flowData } from '@/data/flow/usedCarSales';
</script>

<template>
  <div class="used-car-sales">
    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle text="中古車販売" />
        <Card :card-data="cardData" />
      </PaddingSection>
    </BgSection>

    <BgSection>
      <PaddingSection>
        <Flow lineTitle="◎中古車購入までの流れ" :flow-data="flowData" />
      </PaddingSection>
    </BgSection>
  </div>
</template>
