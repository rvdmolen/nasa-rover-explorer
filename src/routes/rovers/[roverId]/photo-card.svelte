<script>
  import { page } from "$app/stores";

  export let photo;
  $: rover = $page.params.roverId || '';
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="{photo.img_src}" alt="Mountain">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{photo.camera.full_name}</div>
    <p class="text-gray-700 text-base">
      {photo.camera.name}
      Photo is taken on {photo.earth_date}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{rover}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nasa</span>
  </div>
</div>
