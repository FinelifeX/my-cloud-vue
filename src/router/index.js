import VueRouter from 'vue-router';
import MainPage from '@pages/MainPage.vue';
import AuthPage from '@pages/AuthPage/index.vue';
import LoginPage from '@pages/AuthPage/LoginPage.vue';
import SignUpPage from '@pages/AuthPage/SignUpPage.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: AuthPage,
      children: [
        {
          path: 'login',
          component: LoginPage,
        },
        {
          path: 'sign-up',
          component: SignUpPage,
        },
      ],
    },
  ],
});

export default router;
