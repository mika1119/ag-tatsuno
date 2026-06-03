<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/insurance'
</script>

<template>
  <div class="insurance">
    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle text="保険" />
        <Card :card-data="cardData" />
      </PaddingSection>
    </BgSection>
  </div>
</template>
