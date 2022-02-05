<script>
  export let lang;
  import { en, fr } from "./index.json";
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
  }
</script>

<h1>{@html useLang.h1}</h1>

<style lang="scss">
  h1 {
    color: $main-color;
    font-family: $header-font;
    font-weight: 300;
    font-size: 3rem;
    text-shadow: 0px 0.25rem 0.5rem $main-color-025;
    & :global(span) {
      color: $accent-color;
      font-weight: 700;
      text-shadow: 0px 0.25rem 0.5rem $accent-color-025;
    }
  }
</style>
