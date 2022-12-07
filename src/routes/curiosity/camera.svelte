<script>
  import ToggleButton from '$lib/toggle-button/toggle-button.svelte';
  import { selectedCameraStore } from "../../stores/selected-camera.store.js";

  function setCamera(camera) {
    selectedCameraStore.setCamera(camera);
  }
</script>

<h2>Select the camera of curiousity</h2>
<div class="flex flex-wrap gap-2">
  <ToggleButton camera="HACF" on:select-camera="{() => setCamera('HACF')}"></ToggleButton>
  <ToggleButton camera="KNES" on:select-camera="{() => setCamera('KNES')}"></ToggleButton>
  <ToggleButton camera="ABCD" on:select-camera="{() => setCamera('ABCD')}"></ToggleButton>
  <ToggleButton camera="KDKS" on:select-camera="{() => setCamera('KDKS')}"></ToggleButton>
  <ToggleButton camera="DKDM" on:select-camera="{() => setCamera('DKDM')}"></ToggleButton>
</div>
