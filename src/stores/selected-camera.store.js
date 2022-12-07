import { writable } from "svelte/store";
import { photoStore } from "./photo.store.js";
import { page } from "$app/stores";


function createSelectedCameraStore() {
  const store = writable();
  const { subscribe, set } = store


  function init() {
    const rover = page.params?.roverId || '';
    setCamera(rover, 'FHAZ');
  }

  function setCamera(rover, camera) {
    set(camera);
    photoStore.load(rover, camera);
  }

  init();

  return {
    subscribe,
    set,
    setCamera
  };
}

export const selectedCameraStore = createSelectedCameraStore();
