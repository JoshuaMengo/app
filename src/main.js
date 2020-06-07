import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import rem from '../rem'
import router from './router.js'
import { Toast } from 'vant';
import vant from 'vant';
import { Lazyload } from 'vant';

import 'vant/lib/index.css';
// import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(vant)


Vue.use(rem);
Vue.prototype.$ajax = axios
Vue.prototype.$toast = Toast
// Vue.prototype.$_backurl = 'http://192.168.1.100:7001'
Vue.prototype.$_backurl = 'http://127.0.0.1:7001'
Vue.config.productionTip = false

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
