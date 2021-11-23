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
  import TheSidebarHeader from './TheSidebarHeader.vue';
  import TheSidebarBody from './TheSidebarBody.vue';
  import TheSidebarFooter from './TheSidebarFooter.vue';

  export default {
    name: 'TheSidebar',
    components: { TheSidebarHeader, TheSidebarBody, TheSidebarFooter },
  };
</script>

<style scoped lang="scss">
  .sidebar {
    @apply h-full;
    @apply p-5;
    @apply flex flex-col justify-between;
  }
</style>
