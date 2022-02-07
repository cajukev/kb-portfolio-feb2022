<script>
  export let lang;
  import { en, fr } from "./solutions.json";
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
  }
</script>

<main>
  <section class="s-top">
    <div class="squares">

    </div>
    <h1>{useLang.h1}</h1>
    <p>{useLang.p}</p>
    <a href={lang == "en" ? "/contact" : "/fr/contact"}>{useLang.a}</a>
  </section>
</main>