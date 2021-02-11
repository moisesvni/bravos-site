import Vue from 'vue';
import Vuex from 'vuex';

import menuStore from './menu-store';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
});

store.registerModule('menu', menuStore);
export default store;