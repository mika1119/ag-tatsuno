<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import FooterContents from '@/components/layout/footer/FooterContents.vue';
  import FooterNav from '@/components/layout/footer/FooterNav.vue';
  import Copyright from '@/components/layout/footer/Copyright.vue';
</script>

<template>
  <BgSection color="main">
    <PaddingSection y="none">
      <footer class="footer">
        <FooterContents />
        <FooterNav />
        <Copyright />
      </footer>
    </PaddingSection>
  </BgSection>
</template>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: auto;
  }
</style>