<script>
  import Creations from '/src/components/pages/creations.svelte';
  import {lang, page} from '../../stores'
  $lang = "fr"
  $page = "creations"
</script>
  
<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Page de créations"}>
</svelte:head>

<Creations lang={"fr"}></Creations>
