const Storage = (function Storage() {
  const storageCache: any = {};

  function setItem(key: string, value: any) {
    storageCache[key] = value;

    if (localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  function getItem(key: string): any {
    if (storageCache[key]) {
      return storageCache[key];
    }

    if (!localStorage) {
      return "";
    }

    const value = localStorage.getItem(key);

    storageCache[key] = value && JSON.parse(value);

    return storageCache[key];
  }

  return {
    setItem,
    getItem,
  };
})();

export default Storage;
