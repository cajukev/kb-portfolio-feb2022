<script>
  import Creations from '/src/components/pages/creations.svelte';
  import {lang, page} from '../stores'
  $lang = "en"
  $page = "creations"
</script>
  
<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Creations Page"}>
</svelte:head>

<Creations lang={"en"}></Creations>
