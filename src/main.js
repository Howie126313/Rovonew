import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@babel/polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/css/base.css'
import 'swiper/dist/css/swiper.css'
// import '@/assets/css/animate.min.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
