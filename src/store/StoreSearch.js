import { store } from "quasar/wrappers";
import { createStore } from "vuex";

//const data = window.localStorage.getItem("search-history");

export default store(function () {
  const Store = createStore({
    name: "StoreSearch",
    state: {
      //state
    },
    mutations: {
      saveOnLocalstorage(state) {
        let found = localStorage.getItem(state.searchHistory._uid);
        let arr = [];
        if (!found) {
          let arr = [];
          arr.push(found);
          console.log(arr);
          localStorage.setItem("search-history", JSON.stringify(arr));
        }
        console.log(arr);
      },
    },
    actions: {
      //actions
    },
    getters: {
      searchHistory: (state) => {
        return window.localStorage.getItem("search-history");
      },
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
