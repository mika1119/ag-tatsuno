<script setup>
  import { useRoute } from 'vue-router';
  import { useHead } from '@unhead/vue';

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
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </MainSection>
  <Footer />
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease-in;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>