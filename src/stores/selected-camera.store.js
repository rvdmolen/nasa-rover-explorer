import { writable } from "svelte/store";
import { page } from "$app/stores";


function createSelectedCameraStore() {
  const store = writable();
  const { subscribe, set } = store;

  function init() {
    const rover = page.params?.roverId || '';
    setCamera(rover, 'FHAZ');
  }

  function setCamera(camera) {
    set(camera);
  }

  return {
    subscribe,
    set,
    setCamera,
    init
  };
}

export const selectedCameraStore = createSelectedCameraStore();
