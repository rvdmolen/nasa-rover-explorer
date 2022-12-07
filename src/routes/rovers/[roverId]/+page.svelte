<script>
  import Camera from './camera.svelte';
  import RoverImages from './images.svelte';
</script>

<div class="flex flex-wrap flex-1">
    <div class="bg-gray-100 p-8 shadow-xl flex-grow " style="flex-basis: inherit" >
      <Camera />
    </div>
    <div class="flex-1 p-8"  style="flex-basis: 60%;">
      <RoverImages />
    </div>
</div>
