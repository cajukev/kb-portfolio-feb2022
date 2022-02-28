<script>
  import Creations from '/src/components/pages/creations.svelte';
  import {lang, page} from '../stores'
  $lang = "en"
  $page = "creations"
</script>
  
<Creations lang={"en"}></Creations>
