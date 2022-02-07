<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
  import Header from '../components/header.svelte'
  import {lang, page} from '../stores'
  import PageTransition from '../components/utils/PageTransition.svelte';
  export let url;
</script>

<div class="layout">
  <Header lang={$lang} page={$page}></Header>
  <PageTransition {url}>
    <slot lang={$lang}></slot>
  </PageTransition>
  
  <footer lang={$lang}></footer>
</div>


<style lang="scss">
  .layout{
    position: relative;
    max-width: 100%;
    min-height: 101vh;
    width: 95%;
    @media (min-width:$breakpoint-1) {
      
    }
    @media (min-width:$breakpoint-3) {
      width: 85%;
    }
    margin:0 auto;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
</style>