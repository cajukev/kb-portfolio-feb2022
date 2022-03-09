<script>
  import { date } from "/src/stores";
  export let lang
  import { en, fr } from "./success.json";
  const langs = ["en","fr"];
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
  }

  let dateString = $date.date;

  let dateDay = parseInt(dateString.substring(0, 2));
  let dateMth = parseInt(dateString.substring(3, 5));
  let dateYr = dateString.substring(6, 10);

  let dateTime = dateString.substring(11, 16);

  let monthsList = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    fr: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ]
  };
  let months;
  switch (lang) {
    case "en":
      months = monthsList.en;
      break;
    case "fr":
      months = monthsList.fr;
      break;
  }
</script>
<main>
  <h1>{@html useLang.h1}</h1>
{dateDay + " " + months[dateMth - 1] + " " + dateYr + " - " + dateTime + (parseInt(dateTime) > 11 ? " pm" : " am")}
<p>{@html useLang.p}</p>
</main>


<style lang="scss">
main{
  text-align: center;
  & h1{
    max-width: none;
    margin-bottom: 2rem;
  }
  & p{
    margin-bottom: 1rem;
  }
}
</style>
