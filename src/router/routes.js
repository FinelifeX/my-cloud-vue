/*
  Nested paths should be written without the leading slash
 */

const Auth = {
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

const File = {
  Home: {
    name: 'home',
    path: '/',
  },
  Images: {
    name: 'images',
    path: '/images',
  },
  Videos: {
    name: 'videos',
    path: '/videos',
  },
  All: {
    name: 'all-files',
    path: '/all-files',
  },
};

const Util = {
  About: {
    name: 'about',
    path: '/about',
  },
  Settings: {
    name: 'settings',
    path: '/settings',
  },
};

const Routes = {
  Auth,
  File,
  Util,
};

export default Routes;
