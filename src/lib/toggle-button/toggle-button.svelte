<script>
  import { selectedCameraStore } from "../../stores/selected-camera.store.js";
  import { createEventDispatcher } from 'svelte';
  import { Events } from '../../model/events.js';

  export let camera;
  const dispatch = createEventDispatcher();

  $: active = isActive($selectedCameraStore);

  function isActive(selectedCamera) {
    return selectedCamera === camera[0];
  }

  function setMenuState() {
    dispatch(Events.SET_CAMERA, active);
  }
</script>


<button on:click="{setMenuState}" class:active data-tooltip-target="tooltipdark" type="button" class="tooltip btn text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <span class="tooltiptext bg-gray-800">{camera[1]}</span>
  {camera[0]}
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

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
