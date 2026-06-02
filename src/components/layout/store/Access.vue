<script setup>
  import BeltTitle from '@/components/title/BeltTitle.vue';
  import AccessMap from '@/components/layout/store/AccessMap.vue';
</script>

<template>
  <div class="access">
    <BeltTitle text="所在地・アクセス" />
    
    <div class="access-info">
      <div class="access-info__items">
        <span>オートガレージTATSUNO</span>
        <span>営業時間：０９時～１８時</span>
      </div>

      <div class="access-info__items">
        <a href="tel:080-1772-9012" class="access-info__link">
          <i class="fa-solid fa-phone"></i>
          <span>080-1772-9012</span>
        </a>
        <span>定休日：日曜日・祝日</span>
      </div>
    </div>

    <AccessMap />

    <div class="access-address">
      <span>〒820-0002 福岡県飯塚市川島283-2</span>
      <span>ＪＲ浦田駅から車で約４分</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .access {
    width: 100%;
    height: auto;
    @include display(md) {
      width: 80%;
      margin: 0 auto;
    }
  }

  .access-info {
    width: 100%;
    height: auto;
    display: grid;
    gap: 1rem;
    padding: 1.6rem 0;
    @include display(md) {
      grid-template-columns: repeat(2, 1fr);
      padding: 3rem 0;
    }
    &__items {
      display: grid;
      gap: 1rem;
      @include display(md) {
        gap: 2rem;
      }
    }
    &__link {
      color: $color-main-light;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .access-address {
    display: grid;
    justify-items: end;
    gap: 1rem;
  }
</style>