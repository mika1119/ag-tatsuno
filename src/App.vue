<script setup>
  import Header from '@/components/layout/header/Header.vue';
  import MainSection from '@/components/section/MainSection.vue';
  import Footer from '@/components/layout/footer/Footer.vue';
</script>

<template>
  <Header />
  <MainSection>
    <RouterView />
  </MainSection>
  <Footer />
</template>

<style scoped></style>
