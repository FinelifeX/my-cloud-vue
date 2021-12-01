<template>
  <button class="github-auth-button">
    <img class="github-auth-button__icon" :src="icon" alt="GitHub" />
    Sign in with GitHub
  </button>
</template>

<script>
  import GithubImg from '@assets/images/github_dark.png';

  export default {
    name: 'GithubAuthButton',
    data() {
      return {
        icon: GithubImg,
      };
    },
  };
</script>

<style scoped lang="scss">
  .github-auth-button {
    @apply flex flex-row items-center;
    @apply text-lg;
    @apply px-4 py-2;
    @apply rounded-md;
    @apply bg-white;
    @apply shadow-md;
    @apply transform duration-100 hover:scale-105;
  }

  .github-auth-button__icon {
    @apply h-8;
    @apply mr-4;
  }
</style>
