import '@babel/polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import router from './route/index'
import store from  './store/index'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
