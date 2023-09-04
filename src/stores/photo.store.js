import { derived } from "svelte/store";
import { apiService } from "../services/api.service.js";
import { selectedCameraStore } from "./selected-camera.store.js";
import { selectedRoverStore } from "./selected-rover.store.js";
import { selectedDateStore } from "./selected-date.store.js";

function createPhotoStore() {
  return derived([selectedCameraStore, selectedRoverStore, selectedDateStore], async ([selectedCamera, selectedRover, selectedDate]) => {
    return await apiService.fetchPhotos(selectedRover, selectedCamera, selectedDate);
  });
}

export const photoStore = createPhotoStore();
