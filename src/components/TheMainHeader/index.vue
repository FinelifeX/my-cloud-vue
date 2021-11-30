<template>
  <header class="main__header">
    <div class="main__header_left">
      <h1 class="main__header__title">{{ title }}</h1>
      <display-mode-select />
    </div>
    <the-avatar />
  </header>
</template>

<script>
  import SearchOutlined from '@icons/SearchOutlined';
  import { FileRoutesMeta } from '@router/fileRoutes';
  import DisplayModeSelect from '@components/DisplayModeSelect';
  import TheAvatar from '@components/TheAvatar';

  export default {
    name: 'TheMainHeader',
    components: { TheAvatar, DisplayModeSelect },
    data() {
      return {
        searchIcon: SearchOutlined,
      };
    },
    computed: {
      title() {
        const { Home, All, Images, Videos } = FileRoutesMeta;

        switch (this.$route.name) {
          case Home.name:
            return 'Home';
          case Images.name:
            return 'Images';
          case Videos.name:
            return 'Videos';
          case All.name:
            return 'All files';
          default:
            return 'Unknown';
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '~@assets/styles/fonts';

  .main__header {
    @apply flex flex-row justify-between items-center;
    @apply mb-8;
  }

  .main__header_left {
    @apply flex justify-between items-center flex-1 flex-wrap;
    @apply gap-4;
  }

  .main__header__title {
    @include FontOutfit;
    @apply text-3xl;
    @apply tracking-wide;
  }

  .main__header__avatar {
    @apply ml-4;
  }
</style>
