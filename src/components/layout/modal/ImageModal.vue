<script setup>
  import { ref } from 'vue';

  import catalog1 from '@/assets/images/catalog/catalog-01.webp';
  import catalog2 from '@/assets/images/catalog/catalog-02.webp';
  import catalog3 from '@/assets/images/catalog/catalog-03.webp';
  import catalog4 from '@/assets/images/catalog/catalog-04.webp';
  import catalog5 from '@/assets/images/catalog/catalog-05.webp';
  import catalog6 from '@/assets/images/catalog/catalog-06.webp';
  import catalog7 from '@/assets/images/catalog/catalog-07.webp';
  import catalog8 from '@/assets/images/catalog/catalog-08.webp';
  import catalog9 from '@/assets/images/catalog/catalog-09.webp';

  const images = [
    catalog1, catalog2, catalog3,
    catalog4, catalog5, catalog6,
    catalog7, catalog8, catalog9
  ]

  const isOpen = ref(false)
  const currentIndex = ref(0)

  const openModal = (index) => {
    currentIndex.value = index
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  const prevImage = () => {
    currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1
  }

  const nextImage = () => {
    currentIndex.value = currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1
  }

  const scale = ref(1)

  const zoomIn = () => {
    scale.value += 0.2
  }

  const zoomOut = () => {
    scale.value = Math.max(0.2, scale.value - 0.2)
  }

  const resetZoom = () => {
    scale.value = 1
  }
</script>

<template>
  <div class="gallery">
    <img v-for="(image, index) in images" :key="index" :src="image" @click="openModal(index)" class="gallery__thumbnail" alt="">
  </div>

  <Transition name="fade">
    <div v-if="isOpen" class="modal" @click.self="closeModal">
      <i class="fa-solid fa-xmark close" @click="closeModal"></i>
      <i class="fa-solid fa-angle-left arrow arrow__left" @click.stop="prevImage"></i>
      <Transition name="image-fade" mode="out-in">
        <img :key="currentIndex" :src="images[currentIndex]" class="modal__image" alt="" :style="{ transform: `scale(${scale})` }">
      </Transition>
      <i class="fa-solid fa-angle-right arrow arrow__right" @click.stop="nextImage"></i>

      <div class="toolbar">
        <i class="fa-solid fa-magnifying-glass-plus toolbar__icon" @click.stop="zoomIn"></i>
        <i class="fa-solid fa-magnifying-glass-minus toolbar__icon" @click.stop="zoomOut"></i>
        <i class="fa-solid fa-up-right-and-down-left-from-center toolbar__icon" @click.stop="resetZoom"></i>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    &__thumbnail {
      width: 100%;
      aspect-ratio: 3 / 2;
      cursor: pointer;
    }
  }

  .modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    &__image {
      max-width: 85%;
      max-height: 80vh;
      object-fit: contain;
      box-shadow: 0 1rem 2rem $black;
      transition: all 0.2s ease-in;
    }
  }

  .close {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-gray;
    position: absolute;
    top: 2rem;
    right: 2.2rem;
    cursor: pointer;
  }

  .arrow {
    font-size: clamp(2.4rem, 4vw, 4.4rem);
    color: $color-gray;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &__left {
      left: 0rem;
    }
    &__right {
      right: 0rem;
    }
  }

  .toolbar {
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &__icon {
      width: 100%;
      height: auto;
      font-size: 1.6rem;
      color: $white;
      background-color: rgba(0, 0, 0, 0.6);
      transition: all 0.2s ease-in;
      padding: 1rem 1.4rem;
      &:first-child {
        border-radius: 0.4rem 0 0 0.4rem;
      }
      &:last-child {
        border-radius: 0 0.4rem 0.4rem 0;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .image-fade-enter-active,
  .image-fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .image-fade-enter-from,
  .image-fade-leave-to {
    opacity: 0;
  }
</style>