import store from 'store/dist/store.modern';
import { Provider } from 'cerebral';

const allowedKeys = {};

export default Provider({
  getAll() {
    return Object.keys(allowedKeys).reduce((result, prop) => {
      const value = this.get(allowedKeys[prop]);

      if (value !== undefined) {
        return Object.assign(result, {
          [prop]: value,
        });
      }

      return result;
    }, {});
  },
  get(key) {
    try {
      return store.get(key);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  },
  set(prop, value) {
    if (!(prop in allowedKeys)) {
      return;
    }

    try {
      store.set(allowedKeys[prop], value);
    } catch (e) {
      console.error(e);
    }
  },
});