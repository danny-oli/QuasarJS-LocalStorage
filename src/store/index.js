import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import storeSearch from "./storeSearch";

const data = localStorage.getItem("search-history");

export default store(function () {
  const Store = createStore({
    name: "store",
    namespaced: true,
    modules: {
      storeSearch,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
