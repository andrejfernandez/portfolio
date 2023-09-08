<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isVisible = false;
	onMount(() => {
		isVisible = true;
	});
</script>

{#if isVisible}
	<ul
		transition:fade
		class="menu w-20 bg-base-200 justify-start rounded-box fixed right-10 top-1/2 transform -translate-y-1/2 rounded-md z-50"
	>
		<div class="tooltip tooltip-left tooltip-primary" data-tip="Home">
			<li class="mb-2">
				<a href="#home" class="flex justify-center items-center">
					<span class="font-icons text-3xl p-auto text-center">home</span>
				</a>
			</li>
		</div>
		<div class="tooltip tooltip-left tooltip-primary" data-tip="About Me">
			<li class="mb-2">
				<a href="#about" class="flex justify-center items-center">
					<span class="font-icons text-3xl">person</span>
				</a>
			</li>
		</div>

		<div class="tooltip tooltip-left tooltip-primary" data-tip="My Services">
			<li class="mb-2">
				<a href="#services" class="flex justify-center items-center">
					<span class="font-icons text-3xl">design_services</span>
				</a>
			</li>
		</div>
		<div class="tooltip tooltip-left tooltip-primary" data-tip="Contact Me">
			<li>
				<a href="#contact" class="flex justify-center items-center">
					<span class="font-icons text-3xl">mail</span>
				</a>
			</li>
		</div>
	</ul>
{/if}
