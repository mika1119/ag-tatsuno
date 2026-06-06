<script setup>
  import { useRoute } from 'vue-router';
  import { useHead } from '@unhead/vue';

  const route = useRoute()

  const siteName = 'オートガレージTATSUNO'
  const siteUrl = 'https://xxxxx.com' // TODO：ドメイン取得後に設定

  useHead(() => {
    const title = route.meta.title ? `${route.meta.title}｜${siteName}` : siteName
    const description = route.meta.description
    const url = `${siteUrl}${route.path}`

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'og:image', content: `${siteUrl}/ogp.png` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${siteUrl}/ogp.png` },
      ],
      link: [
        { rel: 'canonical', href: url },
      ],
    }
  })

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