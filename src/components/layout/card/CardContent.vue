<script setup>
  import LineTitle from '@/components/title/LineTitle.vue';

  defineProps({
    item: Object
  })
</script>

<template>
  <div class="card-content">
    <img v-if="item.image" :src="item.image" class="card-content__image" :alt="item.title">
    <LineTitle :text="item.title" :position="item.position" />

    <div v-if="item.gridList" class="card-content-grid-list">
      <div v-for="list in item.gridList" class="card-content-grid-list__item">
        <p>{{ list.part }}</p>
        <p>{{ list.timing }}</p>
      </div>
    </div>

    <RouterLink v-if="item.link" :to="item.link" class="card-content-link">
      <div class="card-content-link__text">もっと詳しく ＞＞＞</div>
    </RouterLink>

    <div v-if="item.description" class="card-content__desc">
      <div v-for="paragraph in item.description">
        <p v-for="text in paragraph">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card-content {
    width: 100%;
    height: auto;
    background-color: $white;
    padding: 1.6rem;
    @include display(md) {
      padding: 3.2rem;
    }
    &__image {
      width: 100%;
      aspect-ratio: 3 / 2;
      object-fit: cover;
    }
    &__desc {
      font-size: clamp(1.3rem, 2vw, 1.8rem);
      display: grid;
      gap: 2.4rem;
      padding: 1.6rem 0 0 0;
    }
  }

  .card-content-grid-list {
    width: 100%;
    height: auto;
    padding: 1rem 0 0 0;
    &__item {
      font-size: clamp(1.2rem, 2vw, 1.8rem);
      display: grid;
      grid-template-columns: clamp(16rem, 30vw, 24rem) auto;
    }
  }

  .card-content-link {
    width: fit-content;
    height: auto;
    display: block;
    margin: 0 0 0 auto;
    padding: 2rem 0 1rem 0;
    @include display(md) {
      padding: 3rem 0 1rem 0;
    }
    &__text {
      font-size: clamp(1.2rem, 2.4vw, 1.6rem);
      font-weight: 600;
      color: $color-main-light;
      text-align: end;
      transition: all 0.4s ease-in;
      &:hover {
        box-shadow: inset 0 -1px 0 $color-main-light;
      }
    }
  }
</style>