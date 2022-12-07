<script>

  import { photoStore } from "../../../stores/photo.store.js";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { selectedCameraStore } from "../../../stores/selected-camera.store.js";
  import Spinner from '$lib/spinner/spinner.svelte';
  import PhotoCard from './photo-card.svelte';

  $: rover = $page.params.roverId || '';
  $: camera = $selectedCameraStore;

  onMount(() => {
    photoStore.load(rover, camera);
  });
</script>

<div>
  <div class="pb-10 pl-10 bg-white">
    <p>Header</p>
  </div>
  <div class="mt-6">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {#if $photoStore && $photoStore.length > 0}
        {#each $photoStore as photo}
          <PhotoCard photo="{photo}"></PhotoCard>
        {/each}
      {:else if $photoStore === undefined}
        <Spinner></Spinner>
      {:else}
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-10">
          Sorry, there are no photos found!
        </div>
      {/if}
    </div>
  </div>
</div>


