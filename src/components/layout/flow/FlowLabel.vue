<script setup>  
  defineProps({
    icon: {
      type: String
    },
    num: {
      type: String
    }
  })
</script>

<template>
  <div class="flow-label-wrap">
    <img :src="icon" class="flow-label-wrap__icon" alt="フローのアイコン">
    <div class="flow-label">
      <div class="flow-label__text">STEP</div>
      <div class="flow-label__num">{{ num }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flow-label-wrap {
    width: 100%;
    height: auto;
    background-color: $color-main-light;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    &__icon {
      width: clamp(2.2rem, 4vw, 3rem);
      height: auto;
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }

  .flow-label {
    font-weight: 900;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.2rem;
    &__text {
      font-size: $font-sm;
    }
  }
</style>