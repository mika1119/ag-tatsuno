<script setup>
  import { useRoute } from 'vue-router'
  import { useHead } from '@unhead/vue'

  const route = useRoute()

  useHead(() => ({
    title: `${route.meta.title}｜オートガレージTATSUNO`,
    meta: [
      {
        name: 'description',
        content: route.meta.description,
      },
    ],
  }))

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