<script>
	import '../app.css';
	import Navigation from '../lib/global/navigation.svelte';
	import HeaderImage from '../lib/global/header-image.svelte';
	import Footer from '../lib/global/footer.svelte';
	import Sticky from '$lib/global/sticky.svelte';
	import MayWantToLook from '$lib/global/may-want-to-look.svelte';
</script>

<header>
	<Navigation />
	<HeaderImage />
</header>
<main class="mt-16">
	<Sticky />
	<slot />
	<MayWantToLook />
</main>
<Footer />
