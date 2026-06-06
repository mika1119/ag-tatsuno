<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import SectionTitle from '@/components/title/SectionTitle.vue';
  import Introduction from '@/components/section/Introduction.vue';
  import Hero from '@/components/section/Hero.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { cardData } from '@/data/card/home';
  import Access from '@/components/layout/store/Access.vue';
  import Panel from '@/components/layout/panel/Panel.vue';
</script>

<template>
  <div class="home">
    <Introduction />
    <Hero />

    <BgSection color="main-lightest">
      <PaddingSection>
        <SectionTitle text="サービス一覧" />
        <Card :card-data="cardData" layout="grid" />
      </PaddingSection>
    </BgSection>

    <BgSection>
      <PaddingSection>
        <Access />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <SectionTitle text="コロナ対策" />
        <Panel />
      </PaddingSection>
    </BgSection>
  </div>
</template>
