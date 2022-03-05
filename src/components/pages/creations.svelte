<script>
  export let lang;
  import { en, fr } from "./creations.json";
  const langs = ["en","fr"]
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
    {#each useLang.sites as site, i}
      <div class="soln">
        <div class="img-container">
          <a href={"https://kb-blog-cajukev.vercel.app/" + (lang != langs[0] ? lang : "") }>
            <img alt={"site: " + site.name} class="thumbnail" src={"/sites/site-" + (i + 1) + "-400.jpg"} />
          </a>
        </div>

        <div class="overview">
          <p class="name">{site.name}</p>
          <p class="description">{site.description}</p>
          <div class="technologies">
            {#each site.technologies as tech}
              <img src={"/" + tech.tech + ".svg"} alt={tech.tech + " logo"} title={tech.tech} />
            {/each}
          </div>
          <a href={"https://kb-blog-cajukev.vercel.app/" + (lang != langs[0] ? lang : "") } class="site-link">{useLang.visit}</a>
        </div>
        <div class="description">
          <p>{site.info}</p>
          <a href={"/" + (lang != langs[0] ? lang : "") }>Code</a>
        </div>
      </div>
    {/each}
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
            background: linear-gradient(135deg, #ff9c41 0%, #f27c0f 100%),
              linear-gradient(135deg, #ff7c05 0%, rgba(255, 184, 119, 0.770833) 99.99%, rgba(255, 122, 0, 0) 100%);
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
      text-align: center;

      & .soln {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        & .img-container {
          overflow: hidden;
          & img.thumbnail {
            border: 1px solid white;
            max-width: 14rem;
            max-height: 14rem;
            transform: scale(1);
            transition: 1s ease;
            transform-origin: 20% 20%;
            &:hover {
              transform: scale(1.1);
            }
          }
        }

        & .overview {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem 0;
          box-sizing: border-box;
          & .technologies {
            & img {
              height: 2.5rem;
            }
            & img:not(:first-of-type) {
              margin-left: 1rem;
            }
          }
          & .name {
            font-weight: 700;
          }
          & .description {
            font-size: $mini-font-size;
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
        grid-template-columns: auto 1fr 1fr;
        text-align: start;
        gap: 0rem 1rem;
        padding-top: 0;
        & .img-container {
          border-right: 1px solid white;
          height: 100%;
          display: flex;
          align-items: center;
          & img.thumbnail {
            border: none;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
          }
        }
        & div.overview {
          border-right: 1px solid white;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem 1rem 2rem 0;
          box-sizing: border-box;
          & img {
            height: 2.5rem;
          }
        }
        & div.description {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 2rem 1rem 2rem 0;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
