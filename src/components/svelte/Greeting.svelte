<script lang="ts">
	// Animation logic
	import { fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let isVisible = false;
	let animatedElement: Element;
	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			isVisible = entry.isIntersecting;
		});
		observer.observe(animatedElement);
		return () => {
			observer.disconnect();
		};
	}); // End animation logic
</script>

<div bind:this={animatedElement} class="fixed z-30">
	{#if isVisible}
		<div class="flex items-center justify-between">
			<h1 class="text-5xl lg:text-8xl" in:fly={{ delay: 100, duration: 400, y: 100 }} out:fade>
				Hi,
			</h1>
			<h1 class="text-5xl lg:text-8xl ml-4" in:fly={{ delay: 600, duration: 600, x: 100 }} out:fade>
				I'm Andre 👋
			</h1>
		</div>
		<p
			class="mt-2 ml-4 text-xl lg:text-3xl float-left"
			in:slide={{ delay: 1100, duration: 600 }}
			out:fade
		>
			Full-Stack Web Developer
		</p>
	{/if}
</div>
