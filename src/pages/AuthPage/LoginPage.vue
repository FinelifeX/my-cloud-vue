<template>
  <div>
    <div>Login Page</div>
    <div>
      <github-auth-button />
    </div>
  </div>
</template>

<script>
  import GithubAuthButton from '@components/GithubAuthButton';

  export default {
    name: 'LoginPage',
    components: { GithubAuthButton },
  };
</script>

<style scoped></style>
