/** @type {import("./$types").LayoutLoad} */
import { selectedCameraStore } from "../stores/selected-camera.store.js";
import { selectedDateStore } from "../stores/selected-date.store.js";

// export const ssr = false

function initStores() {
  selectedDateStore.init();
  selectedCameraStore.init();
}

export function load({ url }) {
  initStores();

  return {
    props: {
      key: url
    }
  };
}

