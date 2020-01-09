import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import waterfall from 'vue-waterfall2'
import './assets/css/base.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(waterfall);

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
