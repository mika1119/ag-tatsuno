<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import HeaderLogo from '@/components/layout/header/HeaderLogo.vue';
  import HeaderButton from '@/components/layout/header/HeaderButton.vue';
  import InfoButton from '@/components/layout/header/InfoButton.vue';
  import HeaderNav from '@/components/layout/header/HeaderNav.vue';

  const route = useRoute()
  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  watch(route, () => {
    isOpen.value = false
  })
</script>

<template>
  <header class="header-wrap"> 
    <div class="header">
      <HeaderLogo />
      <HeaderButton :isOpen="isOpen" @toggle-menu="toggleMenu" />
      <InfoButton device="desktop" />
    </div>
    <HeaderNav :isOpen="isOpen" />
  </header>
</template>

<style lang="scss" scoped>
  .header-wrap {
    width: 100%;
    height: 6rem;
    background-color: $white;
    border-bottom: 1px solid $color-separate;
    box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 16%);
    position: fixed;
    inset: 0;
    z-index: 1000;
    @include display(md) {
      height: 9rem;
      box-shadow: none;
    }
  }

  .header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 2rem;
    @include display(md) {
      @include max-width;
      padding: 1.4rem 3.2rem;
    }
  }
</style>