<template>
  <section>
    <h1>Heading</h1>
    <div>Current section: {{ displayedData }}</div>
  </section>
</template>

<script>
  import { FileRoutesMeta } from '@router/fileRoutes';

  export default {
    name: 'TheMainContent',
    computed: {
      displayedData() {
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
