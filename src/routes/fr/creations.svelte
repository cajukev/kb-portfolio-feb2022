<script>
  import Creations from '/src/components/pages/creations.svelte';
  import {lang, page} from '../../stores'
  $lang = "fr"
  $page = "creations"
</script>
  
<Creations lang={"fr"}></Creations>
