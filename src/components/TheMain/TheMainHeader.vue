<template>
  <header class="main__header">
    <div class="main__header_left">
      <file-search />
      <display-mode-select />
    </div>
    <the-avatar />
  </header>
</template>

<script>
  import SearchOutlined from '@icons/SearchOutlined';
  import DisplayModeSelect from './DisplayModeSelect.vue';
  import FileSearch from './FileSearch.vue';
  import TheAvatar from './TheAvatar.vue';

  export default {
    name: 'TheMainHeader',
    components: { TheAvatar, FileSearch, DisplayModeSelect },
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

  .main__header__avatar {
    @apply ml-4;
  }
</style>
