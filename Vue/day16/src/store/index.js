import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state() {
    return {
      myName: "taemin",
    };
  },
  mutations: {
    changeMyName(state) {
      state.myName = "super";
    },
  },
  getters: {},
  actions: {},
});
