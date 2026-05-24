<template>
  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: auto;
    margin: calc(6rem + 3.2rem) 0 0 0;
    @include display(md) {
      margin: calc(9rem + 5rem + 6.4rem) 0 0 0;
    }
  }
</style>