<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import SectionTitle from '@/components/title/SectionTitle.vue';
  import PageTitle from '@/components/title/PageTitle.vue';
  import ImageModal from '@/components/layout/modal/ImageModal.vue';
  import Card from '@/components/layout/card/Card.vue';
  import { keiCarData, passengerCarData, welfareCarData, commercialCarData } from '@/data/card/newCarSales';
  import SuzukiLinkLogo from '@/components/logo/SuzukiLinkLogo.vue';
  import Flow from '@/components/layout/flow/Flow.vue';
  import { flowData } from '@/data/flow/newCarSales';
</script>

<template>
  <div class="new-car-sales">
    <BgSection color="main-lightest">
      <PaddingSection>
        <SectionTitle :logo=true color="main" text="新車取り扱い店" />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <ImageModal />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle :label=false text="軽自動車" />
        <Card :card-data="keiCarData" layout="grid" />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection y="bottom-only">
        <SuzukiLinkLogo />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle :label=false text="乗用車" />
        <Card :card-data="passengerCarData" layout="grid" />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection y="bottom-only">
        <SuzukiLinkLogo />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle :label=false text="福祉車両" />
        <Card :card-data="welfareCarData" layout="grid" />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection y="bottom-only">
        <SuzukiLinkLogo />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection>
        <PageTitle :label=false text="商用車" />
        <Card :card-data="commercialCarData" layout="grid" />
      </PaddingSection>
    </BgSection>

    <BgSection color="main-lightest">
      <PaddingSection y="bottom-only">
        <SuzukiLinkLogo />
      </PaddingSection>
    </BgSection>

    <BgSection>
      <PaddingSection>
        <Flow lineTitle="◎ご契約までの流れ" :flow-data="flowData" />
      </PaddingSection>
    </BgSection>
  </div>
</template>
