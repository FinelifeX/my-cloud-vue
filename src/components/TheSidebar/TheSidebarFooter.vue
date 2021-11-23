<template>
  <footer>
    <sidebar-button
      text="Settings"
      :icon="settingsIcon"
      @click="onSettingsClick"
    />
    <sidebar-button text="About" :icon="aboutIcon" @click="onAboutClick" />
  </footer>
</template>

<script>
  import CogOutlined from '@icons/CogOutlined';
  import HelpOutlined from '@icons/HelpOutlined';
  import SidebarButton from './SidebarButton.vue';

  export default {
    name: 'TheSidebarFooter',
    components: { SidebarButton },
    data() {
      return {
        settingsIcon: CogOutlined,
        aboutIcon: HelpOutlined,
      };
    },
    methods: {
      onSettingsClick() {
        // TODO: replace this with call to show modal
        // eslint-disable-next-line no-alert
        alert('Settings clicked!');
      },
      onAboutClick() {
        // TODO: replace this with call to show modal
        // eslint-disable-next-line no-alert
        alert('About clicked!');
      },
    },
  };
</script>

<style scoped></style>
