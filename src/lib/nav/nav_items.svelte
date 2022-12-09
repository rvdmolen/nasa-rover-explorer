<script>
  import { createEventDispatcher } from "svelte";
  import { Events } from "../../model/events.js";
  import { MenuItems } from "../../model/menuitems.js";

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch(Events.MENU_CLICKED);
  };
</script>

{#each MenuItems as item}
  <a href="{item.link}" on:click="{click}"
     class="md:inline-flex md:w-auto lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-violet-600 hover:text-white">
    {item.title}
  </a>
{/each}
