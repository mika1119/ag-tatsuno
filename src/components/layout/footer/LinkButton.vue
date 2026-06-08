<script setup>
  defineProps({
    url: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: String
    },
    position: {
      type: String,
      default: 'left'
    }
  })

  const isInternal = (url) => {
    return url.startsWith('/')
  }
</script>

<template>
  <div class="link-button-wrap">
    <RouterLink v-if="isInternal($props.url)" :to="$props.url" class="link-button">
      <div class="link-button__text">
        {{ text }}
      </div>
      <i :class="['link-button__icon', icon, `link-button__icon_${position}`]"></i>
    </RouterLink>

    <a v-else :href="$props.url" class="link-button">
      <div class="link-button__text">
        {{ text }}
      </div>
      <i :class="['link-button__icon', icon, `link-button__icon_${position}`]"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .link-button-wrap {
    width: 100%;
    height: auto;
  }

  .link-button {
    width: 100%;
    height: auto;
    display: block;
    text-align: center;
    border: 1px solid $color-base;
    background-color: $white;
    position: relative;
    transition: all 0.4s ease-in;
    padding: 1rem;
    &__text {
      font-size: $font-lg;
      font-weight: 400;
    }
    &__icon {
      font-size: $font-lg;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &_left {
        left: 1rem;
      }
      &_right {
        right: 1rem;
      }
    }
    &:hover {
      color: color-mix(in srgb, $black 60%, $white);
    }
    &:active {
      color: color-mix(in srgb, $black 60%, $white);
    }
  }
</style>