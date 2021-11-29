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
  import { FileRoutesMeta } from '@router/fileRoutes';
  import SidebarNavLink from '../SidebarNavlink';

  export default {
    name: 'TheBody',
    components: { SidebarNavLink },
    data() {
      const { All, Home, Images, Videos } = FileRoutesMeta;

      return {
        links: [
          {
            key: Home.name,
            path: Home.path,
            title: 'Home',
            icon: HomeOutlined,
            exact: true,
          },
          {
            key: Images.name,
            path: Images.path,
            title: 'Images',
            icon: ImageOutlined,
          },
          {
            key: Videos.name,
            path: Videos.path,
            title: 'Videos',
            icon: CameraOutlined,
          },
          {
            key: All.name,
            path: All.path,
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
