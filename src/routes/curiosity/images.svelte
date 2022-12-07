<script>

  import { photoStore } from "../../stores/photo.store.js";
  import { page } from "$app/stores";

  // $: photos = getPhotos($photoStore);
  //
  // function getPhotos(photoList) {
  //   console.log(photoList);
  //   debugger
  //   return photoList;
  // }

  // T6TA2IoZfucUrdZJAxgfMNiAixi017pgbx4rtrAs
</script>

{$page.url.pathname}

<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  {#if $photoStore.length > 0}
    {#each $photoStore as photo}

        <!--Card 1-->
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full" src="{photo.img_src}" alt="Mountain">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{photo.camera.full_name}</div>
            <p class="text-gray-700 text-base">
              Photo is taken on {photo.earth_date}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>

    {/each}
  {:else}
    <p>Loading</p>
  {/if}

</div>
