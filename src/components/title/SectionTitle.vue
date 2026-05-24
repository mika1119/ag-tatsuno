<script setup>  
  defineProps({
    text: {
      type: String
    }
  })
</script>

<template>
  <h2 class="section-title">
    <div class="section-title__text">{{ text }}</div>
  </h2>
</template>

<style lang="scss" scoped>
  .section-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    &__text {
      font-size: clamp(1.6rem, 3.4vw, 3.8rem);
    }
  }
</style>