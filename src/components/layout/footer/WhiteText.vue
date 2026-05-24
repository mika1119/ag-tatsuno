<script setup>
  defineProps({
    text: {
      type: String
    }
  })
</script>

<template>
  <div class="white-text">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
  .white-text {
    font-size: clamp(1.4rem, 2.6vw, 2.4rem);
    color: $white;
    text-align: center;
    padding: 1rem;
  }
</style>