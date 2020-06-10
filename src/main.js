import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import FirebaseProcessor from './Firebase';
import vueHeadful from 'vue-headful';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false;
Vue.use(FirebaseProcessor);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
