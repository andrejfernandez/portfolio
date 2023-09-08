<script lang="ts">
	let swapVal = true;
	$: theme = swapVal ? 'dark' : 'light';
	$: tip = swapVal ? 'Light Mode' : 'Dark Mode';
	$: if (typeof document !== 'undefined') {
		document.documentElement.dataset.theme = theme;
	}
</script>

<div class="ml-1">
	<div class="tooltip tooltip-top font-light" data-tip={tip}>
		<label class="swap swap-flip text-3xl mt-1" class:text-neutral-content={swapVal}>
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={swapVal} />
			<div class="swap-on font-icons">light_mode</div>
			<div class="swap-off font-icons">dark_mode</div>
			<!-- <div class="swap-on"><img src={moon.src} alt="Dark" /></div>
			<div class="swap-off"><img src={sun.src} alt="Light" /></div> -->
		</label>
	</div>
</div>
