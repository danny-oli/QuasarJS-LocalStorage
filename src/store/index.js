import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { useQuasar } from "quasar";
// import StoreSearch from "./StoreSearch";

const data = localStorage.getItem("search-history");

export default store(function () {
  const Store = createStore({
    /* eslint-disable */
    state: {
      searchHistory: [],
    },
    mutations: {
      saveOnLocalstorage(data) {
        let found = localStorage.getItem(data._uid);
        if (!found) {
          localStorage.setItem("search-history", JSON.stringify(data));
        }
      },
      storeSearchHistory(state, data) {
        let found = state.searchHistory.find(
          (search) => search.uid === data.uid
        );
        if (!found) {
          state.searchHistory.push(data);
          this.commit("saveOnLocalstorage");
        }
      },
    },
    getters: {
      searchHistory() {
        const $q = useQuasar();

        return $q.localStorage.getItem("search-history");
      },
    },
    strict: process.env.DEV,
  });

  return Store;
});
