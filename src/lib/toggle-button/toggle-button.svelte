<style>

  .btn {
    text-decoration: none;
    border: none;
    font-size: 16px;
    background-color: #666;
    color: #fff;
    border-radius: 5px;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    outline: none;
    transition: 0.2s all;
}

/* Style the active class (and buttons on mouse-over) */
.active, .btn:hover {
  background-color: green;
  color: white;
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
</style>

<script>
  export let active = false;

  const setMenuState = () => {
		active = !active;
	};
</script>

<button class="btn p-3" on:click="{setMenuState}" class:active>
  <slot></slot>
</button>
