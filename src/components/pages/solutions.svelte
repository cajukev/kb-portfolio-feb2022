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
      <div class="square v1" />
      <div class="square special" />
      <div class="square v2" />
    </div>
    <h1>{@html useLang.h1}</h1>

    <p class="info">{useLang.info}</p>
    <a href={lang == "en" ? "/contact" : "/fr/contact"}>{useLang.a}</a>
  </section>
  <section class="solution-list">
    <div class="soln commerce">
      <h2>{useLang.commerce.h2}</h2>
      <svg viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100.97 147.026L97.0442 158.022L89.6804 155.392L93.4974 144.701C86.6836 142.23 80.8832 138.408 76.0964 133.233L81.1073 119.198C82.4907 121.481 84.8746 123.989 88.2591 126.721C91.6436 129.453 94.8127 131.46 97.7666 132.743L104.351 114.3C97.5324 108.552 93.286 103.456 91.6123 99.0114C89.9843 94.5455 90.0507 89.8466 91.8115 84.9148C93.7049 79.6114 97.1811 75.7681 102.24 73.3848C107.311 70.9678 113.032 70.5537 119.402 72.1426L122.767 62.718L130.131 65.3471L126.838 74.5689C133.813 77.4397 138.699 80.479 141.496 83.6867L136.612 97.3674C132.929 92.8155 128.261 89.1682 122.605 86.4256L115.749 105.629C122.16 110.927 126.348 115.869 128.312 120.455C130.289 125.007 130.408 129.715 128.672 134.579C126.67 140.187 123.272 144.077 118.477 146.25C113.695 148.389 107.859 148.648 100.97 147.026ZM109.435 100.061L115.169 83.9992C110.194 83.175 106.983 84.7897 105.535 88.8433C104.293 92.3226 105.593 96.062 109.435 100.061ZM110.684 119.817L105.203 135.17C110.276 136.143 113.543 134.586 115.002 130.499C116.184 127.188 114.745 123.628 110.684 119.817Z"
          fill="#120439"
        />
        <path
          d="M197.214 110.874C197.214 158.86 158.313 197.761 110.326 197.761C62.3399 197.761 23.439 158.86 23.439 110.874C23.439 62.887 62.3399 23.9862 110.326 23.9862C158.313 23.9862 197.214 62.887 197.214 110.874Z"
          stroke="#120439"
          stroke-width="9"
        />
        <path
          class="inner"
          d="M209.929 110.36C209.929 165.085 165.565 209.449 110.84 209.449C56.1149 209.449 11.7515 165.085 11.7515 110.36C11.7515 55.6351 56.1149 11.2716 110.84 11.2716C151.114 11.2716 185.776 35.2988 201.274 69.8006"
          stroke="#120439"
          stroke-width="3"
        />
        <path
          class="outer"
          d="M108.12 3.07972C167.653 1.8614 216.902 49.1348 218.12 108.668C219.339 168.201 172.065 217.45 112.532 218.668C52.9993 219.886 3.75064 172.613 2.53232 113.08C1.63572 69.2674 27.0021 31.0251 64.1901 13.3975"
          stroke="#120439"
          stroke-width="3"
        />
        <path d="M75.4141 51.8312C83.3783 47.6996 88.0581 46.0967 96.9774 45.1569M76.4409 54.9117C84.4719 50.6653 89.1413 48.9894 98.0042 48.2373" stroke="#120439" />
        <path d="M160.273 158.375C166.59 150.44 168.729 146.045 170.602 138.304M163.192 159.799C168.77 152.881 171.691 148.879 173.52 139.728" stroke="#120439" />
      </svg>
      <a href="">{useLang.estimate}</a>
      <p class="info">{@html useLang.commerce.info}</p>
      <p class="price">{@html useLang.commerce.price}</p>
      <p class="included">{@html useLang.commerce.included}</p>
      <div class="preview">
        <p>{useLang.commerce.preview}</p>
        <a href="/">{useLang.commerce.a2}</a>
        <img />
      </div>
    </div>
    <div class="soln information">
      <h2>{useLang.information.h2}</h2>
      <svg viewBox="0 0 73 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2C1.25217 2 36.1771 2 45.9597 2" stroke="#120439" stroke-width="2" />
        <path class="square" d="M50.9185 14.4974V2H71.3246V14.4974H50.9185Z" stroke="#120439" stroke-width="2" />
        <path class="line1" d="M0 65H71.3244" stroke="#120439" stroke-width="2" />
        <path d="M0 52.5027H71.3244" stroke="#120439" stroke-width="2" />
        <path class="line2" d="M0 39.4921H72" stroke="#120439" stroke-width="2" />
        <path d="M71.3244 26.9948H0" stroke="#120439" stroke-width="2" />
        <path d="M0 14.4973H45.9597" stroke="#120439" stroke-width="2" />
      </svg>

      <a href="">{useLang.estimate}</a>
      <p class="info">{@html useLang.information.info}</p>
      <p class="price">{@html useLang.information.price}</p>
      <p class="included">{@html useLang.information.included}</p>
      <div class="preview">
        <p>{useLang.information.preview}</p>
        <a href="/">{useLang.information.a2}</a>
        <img />
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    & section.s-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      & .squares {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        width: 100%;
        & .square {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 20%;
          box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.15);
          &.v1 {
            background: #7b8dea;
            animation: square-idle 8s ease infinite;
            margin-left: 1rem;
            margin-right: auto;
          }
          &.special {
            width: 6rem;
            height: 6rem;
            background: linear-gradient(135deg, #ff9c41 0%, #f27c0f 100%), linear-gradient(135deg, #ff7c05 0%, rgba(255, 184, 119, 0.770833) 99.99%, rgba(255, 122, 0, 0) 100%);
            box-shadow: 0rem 0rem 1rem rgba(233, 111, 0, 0.6);
            animation: square-spin 10s ease-in-out infinite;
          }
          &.v2 {
            background: #a6aef2;
            animation: square-idle 8s 1s ease infinite;
            margin-right: 1rem;
            margin-left: auto;
          }
        }
      }
      & h1 {
        font-size: $header-font-size;
        font-family: $header-font;
        stroke: $bg-color;
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        filter: drop-shadow(0px 0px 1rem white);
        z-index: 1;
      }
      & p.info {
        margin-top: 1.5rem;
        max-width: 40rem;
      }
      & a {
        margin-top: 1rem;
      }
    }
    & section.solution-list {
      margin-bottom: 1.5rem;
      & .soln {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        & svg {
          max-width: 8rem;
          max-height: 8rem;
        }
        &.commerce {
          & svg {
            & path.inner {
              transform-origin: center;
              animation: rotate-anim 12s linear forwards infinite;
            }
            & path.outer {
              transform-origin: center;
              animation: rotate-counter-anim 16s linear forwards infinite;
            }
          }
        }
        &.information {
          & svg {
            & path.square {
              stroke-dasharray: 55.807 10;
              stroke-dashoffset: 65.807;
              animation: dash 5s linear infinite;
            }
            & path.line1 {
              stroke-dashoffset: 71.324;
              stroke-dasharray: 61.324 10;
              animation: dash 3s linear infinite;
            }
            & path.line2 {
              stroke-dashoffset: 71.324;
              stroke-dasharray: 61.324 10;
              animation: dash 3s 1.5s linear infinite;
            }
          }
        }
      }
    }

    @media (min-width: $breakpoint-1) {
      & section.s-top {
        & .squares {
          & .square {
            &.special {
              width: clamp(8rem, 16vw, 12rem);
              height: clamp(8rem, 16vw, 12rem);
            }
          }
        }
      }
    }
    @media (min-width: $breakpoint-2) {
      & section.s-top {
        & .squares {
          & .square {
            &.v1 {
              margin-right: 8rem;
            }
            &.v2 {
              margin-left: 8rem;
            }
          }
        }
      }
    }
    @media (min-width: $breakpoint-3) {
      & section.solution-list .soln {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, auto);
        align-items: start;
        justify-items: center;
        text-align: center;
        padding: 1rem 2rem;
        gap: 0rem 1rem;
      }
    }
  }
</style>
