<script>
  import Camera from './camera.svelte';
  import RoverImages from './images.svelte';
</script>

<div class="flex flex-wrap flex-1">
    <div class="bg-white p-8 shadow-xl flex-auto" style="f2lex-grow: 1" >
      <Camera />
    </div>
    <div class="flex-1 p-8  bg-red-300" style="flex-basis: 60%;">
      <RoverImages />
    </div>
</div>
