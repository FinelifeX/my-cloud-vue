import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

import './assets/style/app.scss';

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
