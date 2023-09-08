<!-- Daisy UI Stack Component that Rotates Images -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	export let images: ImageMetadata[];

	function rotateImages(array: any[]) {
		const first = array.shift(); // Remove the first item
		array.push(first); // Add the removed item to the back
	}

	function handleShuffle() {
		rotateImages(images);
		images = images.slice(); // This triggers Svelte's reactivity
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="stack w-1/3 hover-scale fade-in" on:click={handleShuffle}>
	{#each images as image (image)}
		<img
			src={image.src}
			width={image.width}
			height={image.height}
			alt="stack"
			class="rounded cursor-pointer"
			animate:flip
		/>
	{/each}
</div>
