<template>
  <main class="login-page">
    <section class="login-form-container">
      <h1 class="login-form-title">Log in</h1>
      <form class="login-form">
        <label class="login-form-item">
          <span class="login-form-item__label">E-mail</span>
          <input class="login-form__input" placeholder="your_email@email.com" />
        </label>
        <label class="login-form-item">
          <span class="login-form-item__label">Password</span>
          <input class="login-form__input" placeholder="******" />
        </label>
        <button class="login-form__submit">Submit</button>
        <div class="login-form__no-account">
          <span class="login-form__no-account-text"
            >Don't have account yet?</span
          >
          <button class="login-form__no-account-button">
            Create an account
          </button>
        </div>
        <div>
          <github-auth-button />
        </div>
      </form>
    </section>
  </main>
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

  .login-page {
    @apply h-screen;
    @apply flex flex-col justify-start items-center;
    @apply bg-indigo-600;
    @apply p-6;
  }

  .login-form-container {
    @apply w-full;
    @apply sm:max-w-lg;
    @apply rounded-md;
    @apply bg-selago;
    @apply p-16;
    @apply mt-10;
  }

  .login-form-title {
    @include FontOutfit;

    @apply text-3xl;
    @apply text-indigo-600;
    @apply text-center;
    @apply mb-4;
  }

  .login-form {
    @apply flex flex-col justify-start items-center;
  }

  .login-form-item {
    @apply block;
    @apply w-full;
    @apply mb-4;
  }

  .login-form-item__label {
    @apply block;
    @apply mb-1;
  }

  .login-form__input {
    @apply w-full;
    @apply px-3 py-1.5;
    @apply border border-spun_pearl rounded-md;
    @apply outline-none;

    &:hover,
    &:active,
    &:focus {
      @apply border-indigo-600;
    }

    &:active,
    &:focus {
      box-shadow: 0 0 4px theme('colors.indigo.600');
    }
  }

  .login-form__submit {
    @apply w-full;
    @apply px-3 py-1.5;
    @apply mt-3;
    @apply rounded-md;
    @apply bg-indigo-600;
    @apply text-white;
    @apply focus:outline-black;
  }
</style>
