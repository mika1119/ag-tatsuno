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
    font-size: $font-lg;
    color: $white;
    text-align: center;
    padding: 1rem;
  }
</style>