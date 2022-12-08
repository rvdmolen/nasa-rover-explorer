<script>
  import ToggleButton from '$lib/toggle-button/toggle-button.svelte';
  import { selectedCameraStore } from "../../../stores/selected-camera.store.js";

  function setCamera(camera) {
    selectedCameraStore.setCamera(camera);
  }
</script>

<h2>Select the camera</h2>
<div class="flex flex-wrap gap-2">
  <ToggleButton camera="FHAZ" on:select-camera="{() => setCamera('FHAZ')}"></ToggleButton>
  <ToggleButton camera="RHAZ" on:select-camera="{() => setCamera('RHAZ')}"></ToggleButton>
  <ToggleButton camera="MAST" on:select-camera="{() => setCamera('MAST')}"></ToggleButton>
  <ToggleButton camera="CHEMCAM" on:select-camera="{() => setCamera('CHEMCAM')}"></ToggleButton>
  <ToggleButton camera="MAHLI" on:select-camera="{() => setCamera('MAHLI')}"></ToggleButton>
  <ToggleButton camera="MARDI" on:select-camera="{() => setCamera('MARDI')}"></ToggleButton>
  <ToggleButton camera="NAVCAM" on:select-camera="{() => setCamera('NAVCAM')}"></ToggleButton>
  <ToggleButton camera="PANCAM" on:select-camera="{() => setCamera('PANCAM')}"></ToggleButton>
  <ToggleButton camera="MINITES" on:select-camera="{() => setCamera('MINITES')}"></ToggleButton>
</div>
