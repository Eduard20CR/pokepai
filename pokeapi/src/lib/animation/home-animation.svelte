<script>
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	let show = true;
	setTimeout(() => {
		show = false;
	}, 100);
</script>

{#if show}
	<div class="fixed top-0 left-0 z-50 h-screen w-screen">
		<div
			out:fly={{ duration: 1000, y: -1000, opacity: 1, easing: cubicIn }}
			class="relative h-1/2 bg-primary z-50"
		>
			<div
				class="absolute top-full left-1/2 z-40 h-52 w-52 bg-black rounded-full -translate-y-1/2 -translate-x-1/2"
			>
				<div
					class="absolute w-5/6 h-5/6 bg-white rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				/>
			</div>
		</div>
		<div out:fly={{ duration: 1000, y: 1000, opacity: 1, easing: cubicIn }} class="h-1/2 bg-white">
			&nbsp;
		</div>
	</div>
{/if}
