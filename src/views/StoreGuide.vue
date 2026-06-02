<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import Introduction from '@/components/section/Introduction.vue';
  import Access from '@/components/layout/store/Access.vue';
  import Infomation from '@/components/layout/store/Infomation.vue';
</script>

<template>
  <Introduction />

  <BgSection>
    <PaddingSection x="large">
      <Access />
    </PaddingSection>
  </BgSection>

  <BgSection>
    <PaddingSection x="large">
      <Infomation />
    </PaddingSection>
  </BgSection>
</template>
