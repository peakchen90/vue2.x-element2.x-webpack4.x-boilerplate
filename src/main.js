// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'src/common/element.config';
import 'common/common';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  methods: {},
  template: '<App></App>',
});
