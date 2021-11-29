<template>
  <main class="main">
    <the-main-header />
    <the-main-content />
  </main>
</template>

<script>
  import TheMainHeader from '../TheMainHeader';
  import TheMainContent from '../TheMainContent';

  export default {
    name: 'TheMain',
    components: { TheMainContent, TheMainHeader },
  };
</script>

<style scoped lang="scss">
  .main {
    @apply flex-5;
    @apply m-5;
    @apply p-5;
    @apply rounded-3xl;
    @apply bg-selago;
  }
</style>
