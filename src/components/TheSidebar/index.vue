<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <the-sidebar-header />
      <the-sidebar-body />
    </div>
    <the-sidebar-footer />
  </aside>
</template>

<script>
  import TheSidebarHeader from '../TheSidebarHeader';
  import TheSidebarBody from '../TheSidebarBody';
  import TheSidebarFooter from '../TheSidebarFooter';

  export default {
    name: 'TheSidebar',
    components: { TheSidebarHeader, TheSidebarBody, TheSidebarFooter },
  };
</script>

<style scoped lang="scss">
  .sidebar {
    @apply h-full;
    @apply flex-1;
    @apply p-5;
    @apply flex flex-col justify-between;

    min-width: 14rem;
  }

  .sidebar__top {
    @apply flex-1;
    @apply flex flex-col;
  }
</style>
