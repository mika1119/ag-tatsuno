<template>
  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: auto;
    display: grid;
    gap: 3.2rem;
    margin: calc(6rem + 3.2rem) 0 3.2rem 0;
    @include display(md) {
      gap: 6.4rem;
      margin: calc(9rem + 5rem + 6.4rem) 0 6.4rem 0;
    }
  }
</style>