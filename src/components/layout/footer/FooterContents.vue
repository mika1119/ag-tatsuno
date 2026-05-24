<script setup>
  import FooterLogo from '@/components/layout/footer/FooterLogo.vue';
  import LinkButton from '@/components/layout/footer/LinkButton.vue';
  import WhiteText from '@/components/layout/footer/WhiteText.vue';
</script>

<template>
  <div class="footer-contents">
    <FooterLogo />

    <div class="footer-contents-info">
      <div class="footer-contents-info__items">
        <LinkButton url="tel:080-1772-9012" text="080-1772-9012" icon="fa-solid fa-phone" />
        <WhiteText text="FAX　0948-29-5511" />
      </div>
      <div class="footer-contents-info__items">
        <LinkButton url="/store-guide" text="店舗案内" icon="fa-solid fa-circle-chevron-right" position="right" />
        <WhiteText text="tatsunomotors@gmail.com" />
      </div>
    </div>

    <div class="footer-contents__text">
      営業時間：０９時～１８時／定休日：日曜日・祝日
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer-contents {
    width: 100%;
    height: auto;
    display: grid;
    gap: 2.4rem 0;
    padding: 3.2rem 0;
    @include display(md) {
      gap: 4.8rem 0;
      padding: 6.4rem 4rem 0;
    }
    &__text {
      font-size: clamp(1.3rem, 2.6vw, 1.8rem);
      color: $white;
      border-left: 1px solid $white;
      padding: 1rem 1rem 1rem 2rem;
    }
  }

  .footer-contents-info {
    width: 100%;
    height: auto;
    display: grid;
    gap: 1rem;
    padding: 0 1rem;
    @include display(md) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 6rem;
      padding: 0;
    }
    &__items {
      display: grid;
      gap: 1rem;
      @include display(md) {
        gap: 2rem;
      }
    }
  }
</style>