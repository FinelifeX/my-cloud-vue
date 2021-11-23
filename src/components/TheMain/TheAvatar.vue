<template>
  <div class="main__header__avatar">
    <alien-outlined />
  </div>
</template>

<script>
  import AlienOutlined from '@icons/AlienOutlined.vue';

  export default {
    name: 'TheAvatar',
    components: { AlienOutlined },
  };
</script>

<style scoped lang="scss">
  .main__header__avatar {
    @apply flex flex-row justify-center items-center;
    @apply w-8 h-8;
    @apply border border-indigo-600;
    @apply rounded-full;
    @apply p-1;
    @apply text-indigo-600;
  }
</style>
