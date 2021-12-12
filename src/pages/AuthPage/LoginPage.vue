<template>
  <div class="login__wrapper">
    <form class="login__form">
      <h1 class="login__form__title">Log in</h1>
      <input class="input" placeholder="E-mail" />
      <input class="input" placeholder="Password" />
      <div>
        <github-auth-button />
      </div>
    </form>
  </div>
</template>

<script>
  import GithubAuthButton from '@components/GithubAuthButton';

  export default {
    name: 'LoginPage',
    components: { GithubAuthButton },
  };
</script>

<style scoped lang="scss">
  @import '~@assets/styles/_fonts.scss';

  .login__wrapper {
    @apply flex flex-row justify-center items-center;
  }

  .login__form {
    @apply w-full;

    @media (min-width: 321px) {
      max-width: 320px;
    }
  }

  .login__form__title {
    @apply text-3xl;
    @apply text-center;

    @include FontOutfit;
  }

  .input {
    @apply border border-spun_pearl;
    @apply rounded-md;
    @apply px-2 py-1;
  }
</style>
