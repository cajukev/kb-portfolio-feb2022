<script>
  import Success from "/src/components/pages/success.svelte";
  import { lang, page } from "/src/stores";
  $lang = "fr";
  $page = "";
</script>

<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Page de succes"}>
</svelte:head>

<Success lang={"fr"} />
