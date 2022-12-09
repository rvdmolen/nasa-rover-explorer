<script>
  import ToggleButton from '$lib/toggle-button/toggle-button.svelte';
  import { selectedCameraStore } from "../../../stores/selected-camera.store.js";
  import { Cameras} from "../../../model/cameras.js";

  function setCamera(camera) {
    selectedCameraStore.setCamera(camera);
  }
</script>

<h2>Select the camera</h2>
<div class="flex flex-wrap gap-2">
  {#each Object.entries(Cameras) as camera }
    <ToggleButton camera="{camera}" on:select-camera="{() => setCamera(camera[0])}"></ToggleButton>
  {/each}

</div>
