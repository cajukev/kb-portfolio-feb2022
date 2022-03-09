<script>
  import { goto } from "$app/navigation";

  export let lang;
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  const langs = ["en", "fr"];
  let url;
  $: url = $page.url.toString().split("/");
  let option;

  let langChange = () => {
    goto(
      "/" +
        (lang != langs[0]
          ? lang + "/" + url.slice(3).toString().replace(",", "/")
          : url.slice(4).toString().replace(",", "/"))
    );
  };
</script>

<select bind:value={lang} on:change={langChange} name="language" id="language">
  {#each langs as option}
    <option value={option} selected={option == lang ? true : false}>{option}</option>
  {/each}
</select>

<style lang="scss">
  select#language {
    border: none;
    font-size: 1rem;
    font-family: $other-font;
    font-weight: 700;
    padding: 0.1rem;
    border-radius: 0.2rem;
    border: 1px solid white;
    background-color: white;
  }
</style>
