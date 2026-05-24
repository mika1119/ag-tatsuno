<script setup>
  defineProps({
    isOpen: Boolean
  })

  const emit = defineEmits(['toggle-menu'])
  const toggleMenu = () => {
    emit('toggle-menu')
  }
</script>

<template>
  <div :class="['header-button', { 'header-button_open': isOpen }]" @click="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
  .header-button {
    width: 3rem;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    @include display(md) {
      display: none;
    }
    & span {
      width: 100%;
      height: 0.4rem;
      display: block;
      background-color: $color-main-dark;
      transition: all 0.4s ease-in;
    }
    &_open {
      & span {
        &:nth-child(1){
          transform: translateY(11px) rotate(225deg);
        }
        &:nth-child(2){
          opacity: 0;
        }
        &:nth-child(3){
          transform: translateY(-11px) rotate(-225deg);
        }
      }
    }
  }
</style>