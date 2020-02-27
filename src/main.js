import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@babel/polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import './assets/css/base.css'
import 'swiper/dist/css/swiper.css'
// import '@/assets/css/animate.min.css'

import LazyImg from '@/components/public/LazyImg.vue'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

Vue.component('LazyImg', LazyImg)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
