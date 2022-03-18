<script>
  import Index from '/src/components/pages/index.svelte';
  import {lang, page} from '../../stores'
  $lang = "fr"
  $page = ""
</script>
  
<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Page d'accueil"}>
</svelte:head>

<Index lang={"fr"}></Index>

