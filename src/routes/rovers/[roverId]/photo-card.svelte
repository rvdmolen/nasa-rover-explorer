<script>
  import { page } from "$app/stores";
  import ImageLoader from '$lib/image-loader/image-loader.svelte';
  import dayjs from "dayjs";

  export let photo;
  $: rover = $page.params.roverId || '';

  function formatDate(date) {
    return dayjs(date).format('MMM D, YYYY')
  }
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white" >
  <ImageLoader src={photo.img_src} alt="Example image"></ImageLoader>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{photo.camera.full_name}</div>
    <p class="text-gray-700 text-base">
      Photo is taken on
    </p>
    <p>
      {formatDate(photo.earth_date)}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{rover}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nasa</span>
  </div>
</div>
