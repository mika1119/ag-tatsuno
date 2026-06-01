<template>
  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: auto;
    margin: 6rem 0 0 0;
    @include display(md) {
      margin: calc(9rem + 5rem) 0 0 0;
    }
  }
</style>