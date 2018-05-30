import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/main/Main'),
    }, {
      path: '/others',
      name: 'others',
      component: () => import('@/others/Others')
    }
  ],
});
