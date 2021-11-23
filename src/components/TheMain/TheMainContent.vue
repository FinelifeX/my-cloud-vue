<template>
  <section>
    <h1>Heading</h1>
    <div>Current section: {{ displayedData }}</div>
  </section>
</template>

<script>
  import Routes from '@router/routes';

  export default {
    name: 'TheMainContent',
    computed: {
      displayedData() {
        switch (this.$route.name) {
          case Routes.File.Home:
            return 'Home';
          case Routes.File.Images:
            return 'Images';
          case Routes.File.Videos:
            return 'Videos';
          case Routes.File.All:
            return 'All files';
          default:
            return 'Unknown';
        }
      },
    },
  };
</script>

<style scoped></style>
