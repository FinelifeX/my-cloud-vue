<template>
  <button class="sidebar-button" @click="$emit('click')">
    <component :is="icon"></component>
    <span class="sidebar-button__text">{{ text }}</span>
  </button>
</template>

<script>
  export default {
    name: 'SidebarButton',
    props: {
      text: {
        type: String,
        required: true,
      },
      icon: {
        type: Object,
        default: null,
      },
    },
  };
</script>

<style scoped lang="scss">
  .sidebar-button {
    @apply w-full;
    @apply flex flex-row items-center;
    @apply text-spun_pearl;
    @apply transition-colors duration-150;
    @apply pt-3 pb-3 pl-4 pr-4;
    @apply rounded-lg;

    &:hover,
    &:target,
    &:focus {
      @apply text-indigo-600;
    }

    &:active {
      @apply bg-selago;
    }
  }

  .sidebar-button__text {
    @apply ml-6;
  }
</style>
