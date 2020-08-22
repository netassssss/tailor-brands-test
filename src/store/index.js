import Vue from 'vue';
import Vuex from 'vuex';

import tableHelper from '../services/Airtable';
import screenUtils from '../services/screenUtils';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    screenSize: window.innerWidth,
  },
  mutations: {
    SET_COMPONENTS(state, cards) {
      state.cards = cards;
    },
    SET_SCREEN_SIZE(state, size) {
      state.screenSize = size;
    },
  },
  actions: {
    initScreenUtils({ dispatch }) {
      screenUtils.setBindedFunction(() => dispatch('onResize'));
    },
    async init({ commit }) {
      const cards = await tableHelper.getContent();
      commit('SET_COMPONENTS', cards);
    },
    onResize({ commit }) {
      commit('SET_SCREEN_SIZE', window.innerWidth);
    },
  },
  getters,
});
