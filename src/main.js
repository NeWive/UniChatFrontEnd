import Vue from 'vue';
import Init from './Init';
import router from './config/route.config';
import store from './config/store.config';
// make sure to call Vue.use(Vuex) if using a module system

new Vue({
  render: h => h(Init),
  router,
  store
}).$mount('#app');
