import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    }
  },
  mutations: {
    increment: (state, payload) => {
      return (state.counter += payload);
    },
    decrement: (state, payload) => {
      return (state.counter -= payload);
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit("increment", payload);
    },
    decrement: ({ commit }, payload) => {
      commit("decrement", payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload.by);
      }, payload.time);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("decrement", payload.by);
      }, payload.time);
    }
  }
});
