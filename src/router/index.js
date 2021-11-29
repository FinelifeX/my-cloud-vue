import VueRouter from 'vue-router';
import { AuthRoutes } from './authRoutes';
import { FileRoutes } from './fileRoutes';

const router = new VueRouter({
  routes: [
    ...AuthRoutes,
    ...FileRoutes,
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;
