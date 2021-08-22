export function setHistory({ commit }, data) {
  commit("saveOnLocalstorage", data);
}
