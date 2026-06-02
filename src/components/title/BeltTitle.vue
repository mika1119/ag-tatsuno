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
    font-weight: 900;
    color: $white;
    background-color: $color-main;
    display: grid;
    place-items: center;
    padding: 0.8rem 1.6rem;
    @include display(md) {
      padding: 1.6rem;
    }
  }
</style>