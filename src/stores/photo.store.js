import { derived } from "svelte/store";
import { apiService } from "../services/api.service.js";
import { selectedCameraStore } from "./selected-camera.store.js";
import { selectedRoverStore } from "./selected-rover.store.js";

function createPhotoStore() {
  return derived([selectedCameraStore, selectedRoverStore], async ([selectedCamera, selectedRover]) => {
    return await apiService.fetchPhotos(selectedRover, selectedCamera);
  });
}

export const photoStore = createPhotoStore();
