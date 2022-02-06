<script>
  import Header from '../components/header.svelte'
  import {lang, page} from '../stores'
</script>

<div class="layout">
  <Header lang={$lang} page={$page}></Header>
  <slot lang={$lang}></slot>
  <footer lang={$lang}></footer>
</div>


<style lang="scss">
  .layout{
    position: relative;
    max-width: 100%;
    width: 95%;
    @media (min-width:$breakpoint-1) {
      
    }
    @media (min-width:$breakpoint-3) {
      width: 85%;
    }
    margin:0 auto;
    &::before{
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 1px;
      background-color: white;
      clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
      animation: ttb 4s 1s ease forwards;
    }
    &::after{
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      height: 100%;
      width: 1px;
      background-color: white;
      clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
      animation: ttb 4s 2s ease forwards;
    }
  }
</style>