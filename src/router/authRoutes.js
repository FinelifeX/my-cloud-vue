import AuthPage from '@pages/AuthPage';
import LoginPage from '@pages/AuthPage/LoginPage.vue';
import SignUpPage from '@pages/AuthPage/SignUpPage.vue';

export const AuthRoutesMeta = {
  Default: {
    name: 'auth',
    path: '/auth',
  },
  Login: {
    name: 'login',
    path: 'login',
  },
  SignUp: {
    name: 'sign-up',
    path: 'sign-up',
  },
};

export const AuthRoutes = [
  {
    ...AuthRoutesMeta.Default,
    redirect: '/auth/login',
    component: AuthPage,
    children: [
      {
        ...AuthRoutesMeta.Login,
        component: LoginPage,
      },
      {
        ...AuthRoutesMeta.SignUp,
        component: SignUpPage,
      },
    ],
  },
];
