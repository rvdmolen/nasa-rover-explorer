<script>
  import { photoStore } from "../../../stores/photo.store.js";

  import Spinner from "$lib/spinner/spinner.svelte";
  import PhotoCard from "./photo-card.svelte";
  import ToolBar from "./date-tool-bar.svelte";
</script>


<div>
  <div>
    <ToolBar></ToolBar>
  </div>
  <div class="mt-6">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5">

      {#await $photoStore}
        <Spinner></Spinner>
      {:then photos}
        {#if photos && photos.length > 0}
          {#each photos as photo}
            <PhotoCard photo="{photo}"></PhotoCard>
          {/each}
        {:else}
          <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 col-span-full" role="alert">
            <p class="font-bold">Be Warned</p>
            <p>Sorry, there are no photos found!</p>
          </div>

        {/if}
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}

    </div>
  </div>
</div>


