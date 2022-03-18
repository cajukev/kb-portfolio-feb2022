<script>
  import Index from "/src/components/pages/index.svelte";
  import { lang, page } from "../stores";
  $lang = "en";
  $page = "";
</script>

<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Home Page"}>
</svelte:head>

<Index lang={"en"} />
