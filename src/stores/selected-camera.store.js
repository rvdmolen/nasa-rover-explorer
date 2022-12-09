import { writable } from "svelte/store";

function createSelectedCameraStore() {
  const store = writable();
  const { subscribe, set } = store;

  function init() {
    setCamera('FHAZ');
  }

  function setCamera(camera) {
    set(camera);
  }

  return {
    subscribe,
    setCamera,
    init
  };
}

export const selectedCameraStore = createSelectedCameraStore();
