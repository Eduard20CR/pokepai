<script>
	import Navigation from '../lib/components/navigation.svelte';
	import HeaderImage from '../lib/components/header-image.svelte';
	import Footer from '../lib/components/footer.svelte';
	import '../app.css';
	import Sticky from '$lib/components/sticky.svelte';
</script>

<header>
	<Navigation />
	<HeaderImage />
</header>
<main class="mt-10">
	<Sticky />
	<slot />
</main>
<Footer />
