<template>
  <div class="footer-copyright">
    <span>&copy;</span>
    2026 オートガレージTATSUNO
  </div>
</template>

<style lang="scss" scoped>
  .footer-copyright {
    font-size: clamp(1rem, 2.4vw, 1.2rem);
    font-weight: 400;
    line-height: 1.4rem;
    color: $white;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 1.6rem 0;
    & span {
      font-size: clamp(1.4rem, 2.4vw, 1.6rem);
    }
  }
</style>