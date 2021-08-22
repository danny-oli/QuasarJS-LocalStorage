export function saveOnLocalstorage(state, data) {
  state.history.push(data);
  localStorage.setItem("search-history", JSON.stringify([...state.history]));
}
