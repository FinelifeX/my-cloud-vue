<template>
  <router-link
    class="nav-link"
    active-class="nav-link--active"
    :exact="exact"
    :to="path"
  >
    <component :is="icon"></component>
    <span class="nav-link__text">{{ title }}</span>
  </router-link>
</template>

<script>
  export default {
    name: 'SidebarNavLink',
    props: {
      exact: {
        type: Boolean,
        default: true,
        required: false,
      },
      path: {
        type: String,
        required: true,
      },
      icon: {
        type: Object,
        default: null,
      },
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .nav-link {
    @apply flex flex-row items-center;
    @apply text-spun_pearl;
    @apply transition-colors duration-150;
    @apply pt-3 pb-3 pl-4 pr-4;
    @apply rounded-lg;

    &:hover {
      @apply text-indigo-600;
    }

    &--active {
      @apply text-indigo-600;
      @apply bg-selago;
      @apply font-semibold;
    }
  }

  .nav-link__text {
    @apply ml-6;
  }
</style>
