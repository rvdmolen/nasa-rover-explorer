<script>
  import { createEventDispatcher } from 'svelte';
  import { Events } from '../../model/events.js';

  export let active;

  let open = false;
  let ariaLabel = 'toggle menu'

  const dispatch = createEventDispatcher();
  const setMenuState = () => {
    dispatch(Events.HAMBURGER_CLICKED)
	};

  $: if (active !== undefined) {
    open = active;
  }

</script>

<style>
  .hamburger {
    height: 25px;
    width: 25px;
  }

  .hamburger .line{
    height: 2px;
    background-color: #e5e7eb;
    display: block;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover{
    cursor: pointer;
  }

  #hamburger-1.open .line:nth-child(2){
    opacity: 0;
  }

  #hamburger-1.open .line:nth-child(1){
    -webkit-transform: translateY(5px) rotate(45deg);
    -ms-transform: translateY(5px) rotate(45deg);
    -o-transform: translateY(5px) rotate(45deg);
    transform: translateY(5px) rotate(45deg);
  }

  #hamburger-1.open .line:nth-child(3){
    -webkit-transform: translateY(-9px) rotate(-45deg);
    -ms-transform: translateY(-9px) rotate(-45deg);
    -o-transform: translateY(-9px) rotate(-45deg);
    transform: translateY(-9px) rotate(-45deg);
  }
</style>

<button class="box inline-flex rounded md:hidden  ml-auto outline-none p-3" on:click={setMenuState} aria-expanded={open} aria-label={ariaLabel} >
  <div class="hamburger" class:open id="hamburger-1">
    <span class="line "></span>
    <span class="line"></span>
    <span class="line "></span>
  </div>
</button>
