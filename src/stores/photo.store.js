import { writable } from "svelte/store";

function createPhotoStore() {
  const store = writable(undefined);
  const { subscribe, set } = store;

  function load(rover, camera) {
    set(undefined);


    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=2022-12-5&camera=${camera}&api_key=T6TA2IoZfucUrdZJAxgfMNiAixi017pgbx4rtrAs`)
      .then((data) => data.json())
      .then(({ photos }) => {
        set(photos || []);
      })
      .catch(rejected => {
        console.log(rejected);
      });

  }

  return {
    subscribe,
    set,
    load
  };
}

export const photoStore = createPhotoStore();
