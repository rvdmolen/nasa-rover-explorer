import { writable } from "svelte/store";
import { dateService } from "../services/date.service.js";


function createSelectedDateStore() {
  const store = writable();
  const { subscribe, set } = store;

  function init() {
    const today = dateService.formatDate(new Date());
    setDate(today);
  }

  function setDate(date) {
    set(date);
  }

  return {
    subscribe,
    setDate,
    init
  };
}

export const selectedDateStore = createSelectedDateStore();
