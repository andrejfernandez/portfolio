<script lang="ts">
	import stockImg from '../../images/astro.jpg';
	let height = 100;
	let width = 100;
	let src = stockImg.src;
</script>

<div class="stack w-1/3">
	<img {src} alt="astro" class="rounded" {height} {width} />
	<img {src} alt="astro" class="rounded" {height} {width} />
	<img {src} alt="astro" class="rounded" {height} {width} />
</div>
