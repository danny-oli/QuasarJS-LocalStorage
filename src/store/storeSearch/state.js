export default function () {
  const data = localStorage.getItem("search-history");
  return {
    history: data ? JSON.parse(data) : [],
  };
}
