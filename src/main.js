import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false



import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import request from '@/utils/request'
// console.log(request);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
