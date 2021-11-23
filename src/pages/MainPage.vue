<template>
  <div class="main-page">
    <the-sidebar />
    <the-main />
  </div>
</template>

<script>
  import TheSidebar from '@components/TheSidebar';
  import TheMain from '@components/TheMain';

  export default {
    name: 'MainPage',
    components: { TheMain, TheSidebar },
  };
</script>

<style scoped lang="scss">
  .main-page {
    @apply flex flex-row justify-between;
    @apply h-screen;
    @apply overflow-hidden;
  }
</style>
