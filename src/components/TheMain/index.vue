<template>
  <main class="main">
    <the-main-header />
    <the-main-content />
  </main>
</template>

<script>
  import TheMainHeader from './TheMainHeader.vue';
  import TheMainContent from './TheMainContent.vue';

  export default {
    name: 'TheMain',
    components: { TheMainContent, TheMainHeader },
  };
</script>

<style scoped lang="scss">
  .main {
    @apply flex-1;
    @apply m-5;
    @apply p-5;
    @apply rounded-3xl;
    @apply bg-selago;
  }
</style>
