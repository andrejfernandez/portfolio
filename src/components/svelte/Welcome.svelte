<!-- Animated Welcome Message Component -->

<script lang="ts">
	// Animation logic
	import { fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let isVisible = false;
	onMount(() => {
		isVisible = true;
	}); // End animation logic
</script>

{#if isVisible}
	<div id="welcome" class="hover-scale p-24">
		<div class="flex items-center justify-between">
			<h1 class="text-8xl" in:fly={{ delay: 100, duration: 800, y: 100 }} out:fade>Hi,</h1>
			<div class="flex" in:fly={{ delay: 400, duration: 800, x: 100 }}>
				<h1 class="text-8xl ml-4" out:fade>I'm Andre</h1>
				<h1 id="hand" class="text-8xl ml-4 wave">👋</h1>
			</div>
		</div>
		<p class="mt-2 ml-4 text-3xl float-left" in:slide={{ delay: 1100, duration: 800 }} out:fade>
			Full-Stack Web Developer
		</p>
	</div>
{/if}

<style>
	@keyframes waveAnimation {
		0%,
		100% {
			transform: rotate(10deg);
		}
		50% {
			transform: rotate(-10deg);
		}
	}
	#welcome:hover .wave {
		display: inline-block;
		animation: waveAnimation 2s infinite;
		transform-origin: 80% 80%; /* Adjust this value to get the desired pivot point */
	}
</style>
