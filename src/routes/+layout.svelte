<script>
  import '$lib/style.css'
  import { dev } from '$app/environment'
  import jsts from '$lib/assets/jsts.svg'
  import { Header, Footer } from '$lib'
  let { children, data } = $props()
</script>

<svelte:head>
  <link rel="icon" href={jsts} />
</svelte:head>

<Header folders={data.folders} />

<main>
  {@render children()}
</main>

<Footer />

{#if dev}
  <div id="dev"></div>
  <style>
    div#dev {
      position: fixed;
      bottom: 0;
      z-index: 0;
      overflow: hidden;
      width: 100%;
      height: 3rem;

      &::before {
        content: '';
        position: absolute;
        transform: rotate(-1deg);
        top: var(--gap);

        height: var(--gap);
        width: 100%;
        opacity: 0.4;
        background-color: yellow;
        background-image: repeating-linear-gradient(
          45deg,
          yellow 0,
          yellow var(--gap),
          black var(--gap),
          black calc(var(--gap) * 2)
        );
      }
    }
  </style>
{/if}

<style>
  main {
    --colls: 1;

    position: relative;
    padding: 4rem var(--gap) 3rem var(--gap);

    max-width: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-columns: repeat(var(--colls), 1fr);
    gap: var(--gap);
    color: var(--fgcolor);
    background-color: var(--bgcolor);
  }

  @media (min-width: 30rem) {
    main {
      --colls: 12;
      place-items: center;
      justify-content: stretch;
    }
  }
</style>
