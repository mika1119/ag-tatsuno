<script setup>  
  defineProps({
    text: {
      type: String
    }
  })
</script>

<template>
  <div class="belt-title">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
  .belt-title {
    width: 100%;
    height: auto;
    font-size: clamp(1.4rem, 2.4vw, 1.8rem);
    font-weight: 900;
    color: $white;
    background-color: $color-main;
    display: grid;
    place-items: center;
    padding: 1.6rem;
  }
</style>