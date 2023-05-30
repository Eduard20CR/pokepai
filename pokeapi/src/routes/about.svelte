<script lang="ts">
	function changePic(picNum: number) {
		console.log(picNum);
	}
</script>

<section class="mx-auto px-7 max-w-7xl mt-32">
	<h2 class="text-h2 font-bold">ABOUT</h2>
	<ul class="">
		<li
			on:mouseenter={() => changePic(1)}
			class="mt-7 border-b-2 pb-4 border-white hover:border-black transition-all duration-300"
		>
			<strong> Find Pokemons by Generation, Type, ID, or Name:</strong> Locate Pokemons based on generation,
			type, ID, or name.
		</li>
		<li
			on:mouseenter={() => changePic(2)}
			class="mt-4 border-b-2 pb-4 border-white hover:border-black transition-all duration-300"
		>
			<strong>Explore Pokemon Berries:</strong> Discover valuable berries for your Pokemon journey.
		</li>
		<li
			on:mouseenter={() => changePic(3)}
			class="mt-4 border-b-2 pb-4 border-white hover:border-black transition-all duration-300"
		>
			<strong>Filter and Search Efficiently:</strong> Use advanced search options to quickly find the
			desired Pokemons and berries.
		</li>
	</ul>
</section>
<img class="w-full h-56 mt-8 object-cover" src="https://picsum.photos/1000/300" alt="" />
