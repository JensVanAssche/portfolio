import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
