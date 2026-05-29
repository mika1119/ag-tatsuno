<script setup>
  import WhiteLogo from '@/components/logo/WhiteLogo.vue';
</script>

<template>
  <div class="footer-logo">
    <WhiteLogo />
    <div class="footer-logo__text">オートガレージTATSUNO</div>
  </div>
</template>

<style lang="scss" scoped>
  .footer-logo {
    width: 100%;
    height: auto;
    border-bottom: 1px solid $white;
    display: grid;
    grid-template-columns: clamp(5.2rem, 10vw, 7.2rem) auto;
    align-items: end;
    gap: 1rem;
    padding: 1rem;
    @include display(md) {
      padding: 1.6rem;
    }
    &__text{
      font-size: $font-lg;
      font-weight: 500;
      color: $white;
      letter-spacing: 0.2rem;
    }
  }
</style>