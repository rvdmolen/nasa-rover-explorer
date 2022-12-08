/** @type {import('./$types').LayoutLoad} */
import { selectedCameraStore } from "../stores/selected-camera.store.js";

export function load({url}) {
    selectedCameraStore.init();
    return {
        props: {
            key: url
        }
    };
  }

