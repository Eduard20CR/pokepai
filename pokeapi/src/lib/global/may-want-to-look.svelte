<script>
	const pokemons = [1, 4, 20, 70, 90];
</script>

<section class="mx-auto px-7 max-w-7xl mt-32">
	<h2 class="text-h2 font-bold">MAY WANT TO LOOK</h2>
	<div class="mt-7 flex flex-col gap-7">
		{#each pokemons as pokemon}
			<article class="border-2 border-black rounded p-4 cursor-pointer">
				<img
					class="mx-auto h-48"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`}
					alt=""
				/>
				<div class="">
					<h3 class="mt-4 text-h3 uppercase font-bold">
						Pikachu <span class="text-gray-2">#20</span>
					</h3>
					<p class="">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate praesentium labore,
						iusto voluptates placeat numquam aperiam laboriosam...
					</p>
					<p class="mt-7">
						<span class="inline-block bg-electric text-white font-bold px-5 rounded-full"
							>ELECTRIC</span
						>
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
