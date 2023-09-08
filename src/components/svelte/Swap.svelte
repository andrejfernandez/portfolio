<!-- Daisy UI Swap Component for Theme -->

<script lang="ts">
	let swapVal = true;
	$: theme = swapVal ? 'dark' : 'light';
	$: tip = swapVal ? 'Light Mode' : 'Dark Mode';
	$: if (typeof document !== 'undefined') {
		document.documentElement.dataset.theme = theme;
	}
</script>

<div class="ml-1">
	<div class="tooltip tooltip-primary tooltip-top" data-tip={tip}>
		<label class="swap swap-flip text-3xl mt-1" class:text-neutral-content={swapVal}>
			<input type="checkbox" bind:checked={swapVal} />
			<div class="swap-on font-icons">light_mode</div>
			<div class="swap-off font-icons">dark_mode</div>
		</label>
	</div>
</div>
