<script setup>
  import FooterContents from '@/components/layout/footer/FooterContents.vue';
  import FooterNav from '@/components/layout/footer/FooterNav.vue';
  import Copyright from '@/components/layout/footer/Copyright.vue';
</script>

<template>
  <footer class="footer">
    <FooterContents />
    <FooterNav />
    <Copyright />
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: auto;
  }
</style>