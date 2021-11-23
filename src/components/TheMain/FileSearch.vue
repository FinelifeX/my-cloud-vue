<template>
  <div class="main__header__search-container">
    <input
      class="main__header__search"
      type="search"
      placeholder="Search for file..."
    />
    <div class="main__header__search__icon">
      <search-outlined :size="22" />
    </div>
  </div>
</template>

<script>
  import SearchOutlined from '@icons/SearchOutlined.vue';

  export default {
    name: 'FileSearch',
    components: { SearchOutlined },
  };
</script>

<style scoped lang="scss">
  .main__header__search-container {
    @apply flex flex-row items-center;
    @apply text-spun_pearl;
    @apply relative;
  }

  .main__header__search__icon {
    @apply absolute left-0 top-2;
    @apply transition-colors duration-200;
  }

  .main__header__search {
    @apply bg-transparent;
    @apply outline-none;
    @apply p-2 pl-10 pb-0;
    @apply transition-all duration-200;

    &:focus {
      @apply border-b border-indigo-600;
      @apply pb-2;

      & + .main__header__search__icon {
        @apply text-indigo-600;
      }
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
</style>
