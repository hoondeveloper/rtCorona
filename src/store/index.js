import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    domesticData: null,
    intlData: null,
    intlDashboard: null,
  },
  mutations: {
    domesticData(state, data) {
      state.domesticData = data;
    },
    intlData(state, data) {
      state.intlData = data;
    },
  },
  actions: {
    setDomesticData({ commit }, data) {
      commit('domesticData', data);
    },
    setIntlData({ commit }, data) {
      commit('intlData', data);
    },
  },
  modules: {},
});
