<template>
  <div class="sidebar__body">
    <nav class="sidebar__nav">
      <ul class="sidebar__nav__items">
        <li v-for="link in links" :key="link.key" class="sidebar__nav__item">
          <sidebar-nav-link
            :exact="link.exact"
            :icon="link.icon"
            :path="link.path"
            :title="link.title"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import HomeOutlined from '@icons/HomeOutlined';
  import ImageOutlined from '@icons/ImageOutlined';
  import CameraOutlined from '@icons/CameraOutlined';
  import FilesOutlined from '@icons/FilesOutlined';
  import Routes from '@router/routes';
  import SidebarNavLink from './SidebarNavLink.vue';

  const { File } = Routes;

  export default {
    name: 'TheBody',
    components: { SidebarNavLink },
    data() {
      return {
        links: [
          {
            key: File.Home.name,
            path: File.Home.path,
            title: 'Home',
            icon: HomeOutlined,
            exact: true,
          },
          {
            key: File.Images.name,
            path: File.Images.path,
            title: 'Images',
            icon: ImageOutlined,
          },
          {
            key: File.Videos.name,
            path: File.Videos.path,
            title: 'Videos',
            icon: CameraOutlined,
          },
          {
            key: File.All.name,
            path: File.All.path,
            title: 'All files',
            icon: FilesOutlined,
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .sidebar__body {
    @apply flex-1;
    @apply pt-8;
  }

  .sidebar__nav {
  }

  .sidebar__nav__items {
  }

  .sidebar__nav__item {
    &:not(:first-child) {
      @apply mt-3;
    }

    &:not(:last-child) {
      @apply mb-3;
    }
  }
</style>
