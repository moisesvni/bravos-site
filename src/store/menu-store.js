import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
  namespaced: true,
  state:{
    menuItems: [
      { title: 'Home', path: '/' },
      { title: 'Cervejas', path: '/carta'},
      { title: 'Sobre Nós', path: '/sobrenos'},
      { title: 'Blog', path: '/blog'},
      { title: 'Contato', path: '/contato'}
    ]
  },
};
