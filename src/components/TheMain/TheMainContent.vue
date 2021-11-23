<template>
  <section>
    <h1>Heading</h1>
    <div>Current section: {{ displayedData }}</div>
  </section>
</template>

<script>
  import Routes from '@router/routes';

  const {
    File: { Home, Images, Videos, All },
  } = Routes;

  export default {
    name: 'TheMainContent',
    computed: {
      displayedData() {
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
