<script>
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import NavItems from './nav_items.svelte';

  export let active = false;

  const setMenuState = () => {
    active = !active;
  };
  
  const menuClicked = () => {
    active = false;
  }
</script>

<nav class="sticky top-0 z-50 flex items-center flex-wrap bg-orange-900 p-3 shadow-lg  ">
  
      <a class="md:w-full" href="/">
        <div class='inline-flex items-center p-2 mr-4' >
            <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                class='fill-current text-white h-8 w-8 mr-2'
            >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span class='text-l text-white font-bold uppercase tracking-wide'>
              My Awesome blog
            </span>
        </div>
      </a>
  

      <button
        class='inline-flex p-3 hover:bg-white rounded md:hidden text-white ml-auto hover:text-black outline-none'
        on:click={setMenuState}
      >
        <svg
          class='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg >
      </button>                                
      
      {#if active}
        <div class="w-full" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
          <div class='w-full items-start flex flex-col'>            
            <NavItems on:menuclick={menuClicked} />            
          </div>
        </div>
      {/if}

      <div class="hidden md:inline-flex md:flex-grow md:w-auto lg:inline-flex lg:flex-grow lg:w-auto">
          <div class='md:inline-flex lg:inline-flex md:flex-row lg:flex-row md:ml-auto lg:ml-auto md:w-auto lg:w-auto w-full md:items-center lg:items-center items-start  flex flex-col md:h-auto lg:h-auto'>            
            <NavItems />                   
          </div>
      </div>

</nav>