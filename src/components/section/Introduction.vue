<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import BaseLogo from '@/components/logo/BaseLogo.vue';
</script>

<template>
  <BgSection>
    <PaddingSection x="large">
      <h2 class="introduction">
        <div class="introduction-head">
          <BaseLogo />
          <div class="introduction-head__title">オートガレージTATSUNO</div>
        </div>

        <div class="introduction__text">
          <p>車検整備・一般整備・板金塗装・電装装備・レッカー業務</p>
          <p>ボディーコーティング・新車販売・中古車販売・保険</p>
          <p>お気軽にご相談ください</p>
        </div>
      </h2>
    </PaddingSection>
  </BgSection>
</template>

<style lang="scss" scoped>
  .introduction {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    gap: 0.6rem;
    padding: 1.6rem 0;
    @include display(md) {
      width: 80%;
      margin: 0 auto;
    }
    &__text {
      font-size: clamp(0.9rem, calc(-0.1rem + 2.8vw), 2rem);
      font-weight: 400;
      letter-spacing: clamp(0.1rem, calc(-0.2rem + 0.6vw), 0.3rem);
      display: grid;
      place-items: center;
      gap: 0.4rem;
      @include display(md) {
        font-size: clamp(1.5rem, calc(-0.4rem + 2.3vw), 2.4rem);
      }
    }
  }

  .introduction-head {
    display: grid;
    grid-template-columns: 20% max-content;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    &__title {
      font-size: clamp(2rem, calc(-0.4rem + 6.4vw), 4.5rem);
      font-weight: 400;
      transform: scale(1, 1.1);
      @include display(md) {
        font-size: clamp(3.4rem, calc(-0.3rem + 4.7vw), 5.4rem);
      }
    }
  }
</style>