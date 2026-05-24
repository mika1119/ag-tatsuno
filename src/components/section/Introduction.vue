<script setup>
  import BgSection from '@/components/section/BgSection.vue';
  import PaddingSection from '@/components/section/PaddingSection.vue';
  import BaseLogo from '@/components/logo/BaseLogo.vue';
</script>

<template>
  <BgSection>
    <PaddingSection size="large">
      <h2 class="introduction">
        <div class="introduction__head">
          <BaseLogo />
          <div class="introduction__title">オートガレージ<span>TATSUNO</span></div>
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
    gap: 1rem;
    &__head {
      display: grid;
      grid-template-columns: clamp(8rem, 18vw, 18rem) auto;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
    }
    &__title {
      font-size: clamp(1.6rem, 5vw, 5rem);
      font-weight: 400;
      white-space: nowrap;
      transform: scale(1, 1.2);
      & span {
        letter-spacing: 0.1em;
      }
    }
    &__text {
      display: grid;
      place-items: center;
      gap: 0.4rem;
      p {
        font-size: clamp(1rem, 2.4vw, 2.4rem);
        font-weight: 400;
        letter-spacing: 0.1em;
      }
    }
  }
</style>
