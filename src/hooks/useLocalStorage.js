export default function useLocalStorage(key, defaultItem) {
  function setItemLocalStorage(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getItemLocalStorage() {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  function removeItemLocalStorage() {
    localStorage.removeItem(key);
  }

  return [getItemLocalStorage(), setItemLocalStorage, removeItemLocalStorage];
}
