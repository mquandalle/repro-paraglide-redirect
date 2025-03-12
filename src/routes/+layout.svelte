<script>
  import { localizeHref, setLocale } from '../paraglide/runtime';

    let { children } = $props();
</script>

<a href={localizeHref("/")}>Home</a>

<button onclick={() => setLocale("en")}>en</button>
<button onclick={() => setLocale("fr")}>fr</button>
<button onclick={() => setLocale("de")}>de</button>

<hr />

{@render children()}
