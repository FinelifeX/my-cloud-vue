<template>
  <header class="main__header">
    <div class="main__header_left">
      <div class="main__header__search-container">
        <input
          class="main__header__search"
          type="search"
          placeholder="Search for file..."
        />
        <div class="main__header__search__icon">
          <component :is="searchIcon"></component>
        </div>
      </div>
      <div class="main__header__display-mode">
        <display-mode-select />
      </div>
    </div>
    <div class="main__header__avatar">Avatar</div>
  </header>
</template>

<script>
  import SearchOutlined from '@icons/SearchOutlined';
  import GridOutlined from '@icons/GridOutlined';
  import ListOutlined from '@icons/ListOutlined';
  import DisplayModeSelect from './DisplayModeSelect.vue';

  export default {
    name: 'TheMainHeader',
    components: { DisplayModeSelect, ListOutlined, GridOutlined },
    data() {
      return {
        searchIcon: SearchOutlined,
      };
    },
  };
</script>

<style scoped lang="scss">
  .main__header {
    @apply flex flex-row justify-between items-center;
    @apply mb-8;
  }

  .main__header_left {
    @apply flex justify-between items-center flex-1 flex-wrap;
    @apply gap-4;
  }

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

  .main__header__display-mode {
    @apply flex flex-row items-center;
  }

  .main__header__avatar {
    @apply ml-4;
  }
</style>
