<script>
  import Success from "/src/components/pages/success.svelte";
  import { lang, page } from "../stores";
  $lang = "en";
  $page = "";
</script>

<svelte:head>
  <title>{"Kevin Brousseau Portfolio"}</title>
  <meta name="description" content={"Success Page"}>
</svelte:head>

<Success lang={"en"} />
