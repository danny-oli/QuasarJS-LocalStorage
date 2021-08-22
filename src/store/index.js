import { store } from "quasar/wrappers";
import { createStore } from "vuex";

const data = localStorage.getItem("search-history");


export default store(function () {
  const Store = createStore({
    name: "StoreSearch",
    namespaced: true,
    state: {
      history: data ? JSON.parse(data) : []
    },
    mutations: {
      saveOnLocalstorage(state, data) {
        state.history.push(data)
        localStorage.setItem("search-history", JSON.stringify([...state.history]));
      },
    },
    actions: {
      setHistory ({ commit }, data) {
        commit('saveOnLocalstorage', data)
      }
    },
    getters: {
      getHistory(state) {
        return state.history
      },
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
