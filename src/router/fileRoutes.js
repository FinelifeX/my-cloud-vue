import MainPage from '@pages/MainPage';

export const FileRoutesMeta = {
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

export const FileRoutes = [
  {
    ...FileRoutesMeta.Home,
    component: MainPage,
  },
  {
    ...FileRoutesMeta.Images,
    component: MainPage,
  },
  {
    ...FileRoutesMeta.Videos,
    component: MainPage,
  },
  {
    ...FileRoutesMeta.All,
    component: MainPage,
  },
];
