<script lang="ts">
	// Submit form
</script>

<div class="w-full">
	<form
		action=""
		class="flex flex-col w-1/3 mx-auto bg-base-300 rounded-md p-10 fade-in hover-scale shadow-lg"
	>
		<h1 class="mb-5 text-2xl font-semibold w-full flex items-center justify-center underline">
			Send me a Message
		</h1>
		<div class="flex flex-col justify-around">
			<div class="form-control mb-1 mx-5">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label for="name" class="label">
					<span class="label-text">Full Name</span>
				</label>
				<input id="name" type="text" class="input input-primary input-bordered w-full" />
			</div>
			<div class="form-control my-1 mx-5">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label for="email" class="label">
					<span class="label-text">Email</span>
				</label>
				<input id="email" type="text" class="input input-primary input-bordered w-full" />
			</div>
		</div>
		<div class="form-control mt-1 mx-5">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label for="message" class="label">
				<span class="label-text">Message</span>
			</label>
			<textarea id="message" class="textarea textarea-primary textarea-bordered h-40" />
		</div>
		<button class="btn btn-primary w-1/4 mx-auto mt-10">submit</button>
	</form>
</div>
