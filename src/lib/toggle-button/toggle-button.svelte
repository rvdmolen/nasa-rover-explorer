<script>
  import { selectedCameraStore } from "../../stores/selected-camera.store.js";
  import { createEventDispatcher } from 'svelte';
  import { Events } from '../../model/events.js';

  export let camera;
  const dispatch = createEventDispatcher();

  $: active = isActive($selectedCameraStore);

  function isActive(selectedCamera) {
    return selectedCamera === camera;
  }

  function setMenuState() {
    dispatch(Events.SET_CAMERA, active);
  }
</script>

<button class="btn pt-3 pb-3 pl-8 pr-8" on:click="{setMenuState}" class:active>
  {camera}
</button>

<style>

  .btn {
    text-decoration: none;
    border: none;
    font-size: 16px;
    background-color: #666;
    color: #fff;
    border-radius: 5px;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    outline: none;
    transition: 0.2s all;
  }

  /* Style the active class (and buttons on mouse-over) */
  .active, .btn:hover {
    background-color: green;
    color: white;
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
</style>
