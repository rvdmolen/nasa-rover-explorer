import { selectedRoverStore } from "../../../stores/selected-rover.store.js";

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
  const rover = params.roverId || '';
  if (rover !== '') {
    console.log('set rover: ' + rover);
    selectedRoverStore.setSelectedRover(rover);
  }
}
