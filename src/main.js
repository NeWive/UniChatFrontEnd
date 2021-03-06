import Vue from 'vue';
import Init from './Init';
import router from './config/route.config';
import store from './config/store.config';
import axios from 'axios';
import db from './initDB';

// make sure to call Vue.use(Vuex) if using a module system
axios.defaults.withCredentials = true;
Vue.$axios = axios;
Vue.prototype.$axios = axios;

Vue.$db = db;
Vue.prototype.$db = db;

let vue = new Vue({
  render: h => h(Init),
  router,
  store,
});
vue.$mount('#app');
