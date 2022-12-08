<script>
  import { photoStore } from "../../../stores/photo.store.js";
  import Spinner from '$lib/spinner/spinner.svelte';
  import PhotoCard from './photo-card.svelte';
</script>

<div>
  <div class="pb-10 pl-10 bg-white">
    <p>Header</p>
  </div>
  <div class="mt-6">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

      {#await $photoStore}
        <Spinner></Spinner>
      {:then photos}
        {#if photos && photos.length > 0}
          {#each photos as photo}
            <PhotoCard photo="{photo}"></PhotoCard>
          {/each}
        {:else}
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-10">
            Sorry, there are no photos found!
          </div>
        {/if}
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}

    </div>
  </div>
</div>


