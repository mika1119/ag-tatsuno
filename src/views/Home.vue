<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import SectionTitle from '@/components/title/SectionTitle.vue';
  import Introduction from '@/components/section/Introduction.vue';
  import Hero from '@/components/section/Hero.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/home'
</script>

<template>
  <Introduction />
  <Hero />

  <BgSection color="main-lightest">
    <PaddingSection>
      <SectionTitle text="サービス一覧" />
      <Card :card-data="cardData" />
    </PaddingSection>
  </BgSection>
</template>
