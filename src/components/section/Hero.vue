<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
</script>

<template>
  <BgSection>
    <PaddingSection y="bottom-only">
      <div class="hero">
        <div class="hero-gallery hero-gallery_top">
          <img src="@/assets/images/sample.jpg" alt="">
          <img src="@/assets/images/sample.jpg" alt="">
          <img src="@/assets/images/sample.jpg" alt="">
        </div>

        <div class="hero-text">
          <p class="hero-text__large">確かな技術で愛車を徹底サポートします！</p>
          <p class="hero-text__small">軽自動車・普通自動車・小型トラック・バイク</p>
        </div>

        <div class="hero-gallery hero-gallery_bottom">
          <img src="@/assets/images/sample.jpg" alt="">
          <img src="@/assets/images/sample.jpg" alt="">
          <img src="@/assets/images/sample.jpg" alt="">
          <img src="@/assets/images/sample.jpg" alt="">
        </div>
      </div>
    </PaddingSection>
  </BgSection>
</template>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    height: auto;
  }

  .hero-gallery{
    width: 100%;
    height: auto;
    display: grid;
    &_top {
      grid-template-columns: repeat(3, 1fr);
      & img {
        width: 100%;
        aspect-ratio: 3 / 2;
        object-fit: cover;
      }
    }
    &_bottom {
      grid-template-columns: repeat(4, 1fr);
      & img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
    }
  }
  
  .hero-text {
    color: $color-accent;
    font-weight: 400;
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem 1rem 1.6rem;
    @include display(md) {
      padding: 2rem 1rem 2.6rem;
    }
    &__large {
      font-size: clamp(1.8rem, 4.4vw, 5.2rem);
      white-space: nowrap;
    }
    &__small {
      font-size: clamp(1.3rem, 3.2vw, 3.8rem);
    }
  }
</style>