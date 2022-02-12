<script>
  import TimePicker from "../timepicker.svelte";
  import { en, fr } from "./contact.json";
  import { fly } from "svelte/transition";
  export let lang;
  export let timeslots;

  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
  }
  /**
   * State: variable state machine
   * [0] - Nothing clicked
   * [1] - RDV clicked -> Show form & toggle class
   */
  let state = 0;
</script>

<main>
  <div class="options">
    <div class="option">
      <a href="/" class="square">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.88 10.6667C19.2 15.4133 20 20.0533 21.28 24.48L14.88 30.88C12.6933 24.48 11.3067 17.7067 10.8267 10.6667H18.88ZM71.4667 74.7733C76 76.0533 80.64 76.8533 85.3333 77.1733V85.12C78.2933 84.64 71.52 83.2533 65.0667 81.12L71.4667 74.7733ZM24 0H5.33333C2.4 0 0 2.4 0 5.33333C0 55.4133 40.5867 96 90.6667 96C93.6 96 96 93.6 96 90.6667V72.0533C96 69.12 93.6 66.72 90.6667 66.72C84.0533 66.72 77.6 65.6533 71.6267 63.68C71.0933 63.4667 70.5067 63.4133 69.9733 63.4133C68.5867 63.4133 67.2533 63.9467 66.1867 64.96L54.4533 76.6933C39.36 68.96 26.9867 56.64 19.3067 41.5467L31.04 29.8133C32.5333 28.32 32.96 26.24 32.3733 24.3733C30.4 18.4 29.3333 12 29.3333 5.33333C29.3333 2.4 26.9333 0 24 0Z"
            fill="#EDEDF6"
          />
        </svg>
      </a>
      <p>Appel</p>
    </div>
    <div class="option">
      <a href="/" class="square">
        <svg viewBox="0 0 108 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M107.333 11C107.333 5.13337 102.533 0.333374 96.6665 0.333374H11.3332C5.4665 0.333374 0.666504 5.13337 0.666504 11V75C0.666504 80.8667 5.4665 85.6667 11.3332 85.6667H96.6665C102.533 85.6667 107.333 80.8667 107.333 75V11ZM96.6665 11L53.9998 37.6667L11.3332 11H96.6665ZM96.6665 75H11.3332V21.6667L53.9998 48.3334L96.6665 21.6667V75Z"
            fill="#EDEDF6"
          />
        </svg>
      </a>
      <p>Courriel</p>
    </div>
    <div class="option">
      <button on:click={() => (state = 1)} class={"square " + (state == 1 ? "selected" : "")}>
        <svg viewBox="0 0 96 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.3333 11.3333H80V0.666626H69.3333V11.3333H26.6667V0.666626H16V11.3333H10.6667C4.74667 11.3333 0.0533333 16.1333 0.0533333 22L0 96.6666C0 102.533 4.74667 107.333 10.6667 107.333H85.3333C91.2 107.333 96 102.533 96 96.6666V22C96 16.1333 91.2 11.3333 85.3333 11.3333ZM85.3333 96.6666H10.6667V43.3333H85.3333V96.6666ZM85.3333 32.6666H10.6667V22H85.3333V32.6666ZM48 59.3333H74.6667V86H48V59.3333Z"
            fill="#EDEDF6"
          />
        </svg>
      </button>
      <p>Rendez-vous</p>
    </div>
  </div>
  {#if state == 1}
    <div class="timepicker" transition:fly={{ duration: 300, x: -5, opacity: 0.5 }}>
      <TimePicker {lang} {timeslots} />
    </div>
  {/if}
  <div class="final">
    <p>
      N'hésitez pas à me contacter pour plus d'information.<br /><br />
      Merci d'avoir visité mon site!
    </p>
  </div>
</main>

<style lang="scss">
  main {
    padding-top: 0.5rem;
    & .options {
      /*display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      place-items: center;
      text-align: center;*/
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      & .option {
        padding-top: 1rem;
        min-width: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        & .square {
          border-radius: 20%;
          border: none;
          width: 6rem;
          height: 6rem;
          background: linear-gradient(135deg, #ff9c41 0%, #f27c0f 100%), linear-gradient(135deg, #ff7c05 0%, rgba(255, 184, 119, 0.770833) 99.99%, rgba(255, 122, 0, 0) 100%);
          box-shadow: 0rem 0rem 1rem rgba(233, 111, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: bottom center;
          transform: scale(0.5);
          animation: grow 2s cubic-bezier(0.18, 1.84, 0.79, 0.89) forwards;
          cursor: pointer;
          & svg {
            width: 70%;
            height: 70%;
            filter: drop-shadow(0px 0.1rem 0.2rem rgba(0, 0, 0, 0.1));
          }
          &.selected {
            box-shadow: 0rem 0rem 1rem rgba(233, 111, 0, 0.6), inset 0px 0px 0px 0.25rem white;
          }
        }
        & p {
          margin-top: 0.5rem;
        }
      }
    }

    & .timepicker {
      margin: 2rem 0;
    }

    & .final {
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    @media (min-width: $breakpoint-3) {
      padding-top: 3.5rem;
      & .option {
        width: 12rem;
      }
    }
  }
</style>
