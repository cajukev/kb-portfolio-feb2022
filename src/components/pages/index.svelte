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
    font-weight: 400;
    font-size: $header-font-size;
    text-shadow: 0px 0.25rem 0.5rem $main-color-025;
    text-align: center;
    margin-top: 1rem;
    @media (min-width:$breakpoint-3) {
      text-align: initial;
      margin-top: 4rem;
    }
    & :global(span) {
      color: $accent-color;
      font-weight: 700;
      text-shadow: 0px 0.25rem 0.5rem $accent-color-025;
    }
  }
</style>
