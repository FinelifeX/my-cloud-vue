<template>
  <header class="sidebar__header">
    <div class="sidebar__header__logo">
      <cloud-outlined />
    </div>
    <span class="sidebar__header__title">My Cloud</span>
  </header>
</template>

<script>
  import CloudOutlined from '@icons/CloudOutlined.vue';

  export default {
    name: 'TheHeader',
    components: { CloudOutlined },
  };
</script>

<style scoped lang="scss">
  @import '../../assets/style/fonts';

  .sidebar__header {
    @apply flex flex-row items-center;
  }

  .sidebar__header__logo {
    @apply text-white;
    @apply bg-indigo-600;
    @apply p-3;
    @apply mr-3;
    @apply rounded-xl;
  }

  .sidebar__header__title {
    @include FontOutfit;
    @apply text-xl;
    @apply font-semibold;
  }
</style>
