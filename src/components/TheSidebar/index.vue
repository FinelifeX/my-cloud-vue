<template>
  <section>
    <the-sidebar-header />
    <the-sidebar-body />
    <the-sidebar-footer />
  </section>
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

<style scoped></style>
