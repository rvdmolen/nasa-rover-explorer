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
	};
</script>

<nav class="sticky top-0 z-50 flex items-center flex-wrap bg-violet-900 p-3 shadow-lg  ">
	<a class="md:w-full" href="/">
		<div class="inline-flex items-center p-2 mr-4">
			<svg viewBox="0 0 60 60" width="60" height="60"
				><circle cx="25" cy="30" r="15" fill="white" /><g
					transform=" matrix(0.300, -0.15, 0.10, 0.116, 25, 30)"
					><path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="gray"
						><animateTransform
							attributeName="transform"
							type="rotate"
							from="360 0 0"
							to="0 0 0"
							dur="2s"
							repeatCount="indefinite"
						/></path
					></g
				><path
					d="M 15,0 A 15,15 0 0,0 -15,0Z"
					transform="matrix(0.866, -0.5, 0.5, 0.866, 25, 30)"
					fill="white"
				/></svg
			>
			<span class="text-l text-white font-bold uppercase tracking-wide"> Mars Rover Explorer </span>
		</div>
	</a>

	<button
		class="inline-flex p-3 hover:bg-white rounded md:hidden text-white ml-auto hover:text-black outline-none"
		on:click={setMenuState}
	>
		<svg
			class="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>

	{#if active}
		<div class="w-full" transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
			<div class="w-full items-start flex flex-col">
				<NavItems on:menuclick={menuClicked} />
			</div>
		</div>
	{/if}

	<div class="hidden md:inline-flex md:flex-grow md:w-auto">
		<div
			class="md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto w-full items-start flex flex-col"
		>
			<NavItems />
		</div>
	</div>
</nav>
