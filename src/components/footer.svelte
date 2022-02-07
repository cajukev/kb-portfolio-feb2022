<footer>
  <p>© KBweb, 2022</p>
  <p>Châteauguay, Quebec, Canada</p>
  <p>514-550-7051</p>
  <p>kbweb98@gmail.com</p>
</footer>

<style lang="scss">
  footer{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $mini-font-size;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
    &::after{
      content: "";
      position: absolute;
      top: 0px;
      height: 1px;
      width: 100%;
      background-color: white;
      transform: scaleX(1.2);
    }
    & p{
      padding-top: 0.5rem;
    }
    @media (min-width: $breakpoint-4) {
      flex-direction: row;
      justify-content: flex-start;
      padding-top: 0;
      & p{
        padding-top: 0;
        margin-right: 2rem;
      }
    }
  }
</style>