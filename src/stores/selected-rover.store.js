import { writable } from "svelte/store";

function createSelectedRoverStore() {
  const store = writable();
  const { subscribe, set } = store

  function setSelectedRover(rover) {
    set(rover);
  }

  return {
    subscribe,
    setSelectedRover
  };
}

export const selectedRoverStore = createSelectedRoverStore();
