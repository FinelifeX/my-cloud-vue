import VueRouter from 'vue-router';
import MainPage from '@pages/MainPage.vue';
import AuthPage from '@pages/AuthPage/index.vue';
import LoginPage from '@pages/AuthPage/LoginPage.vue';
import SignUpPage from '@pages/AuthPage/SignUpPage.vue';
import Routes from './routes';

const { Auth, File } = Routes;

const router = new VueRouter({
  routes: [
    {
      ...File.Home,
      component: MainPage,
    },
    {
      ...File.Images,
      component: MainPage,
    },
    {
      ...File.Videos,
      component: MainPage,
    },
    {
      ...File.All,
      component: MainPage,
    },
    {
      ...Auth.Default,
      redirect: '/auth/login',
      component: AuthPage,
      children: [
        {
          ...Auth.Login,
          component: LoginPage,
        },
        {
          ...Auth.SignUp,
          component: SignUpPage,
        },
      ],
    },
  ],
});

export default router;
