<script>
  const { folders } = $props()
</script>

<header>
  <h1 class="visually-hidden">ju5tu5.nl</h1>

  <a href="/" aria-label="Go to the garden entrance">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 31 19"
        aria-labelledby="logoTitle logoDesc"
        role="img"
      >
        <title id="logoTitle">Justus' logo</title>
        <desc id="logoDesc">
          A stylistic, ippon-inspired representation of the word 'justus' presented as a breathing
          logo... *sigh*
        </desc>
        <path
          d="M2 4h2v15H2zm3 0h2v11H5zm3 0h2v11H8zm3 0h2l2 11h-2zm5-4h2v15h-2zm3 4h2v11h-2zm3 0h2v11h-2zm3 0h2l2 11h-2z"
        />
        <path d="M0 8h31v2H0z" />
      </svg>
    </div>
  </a>

  <nav>
    <h2 class="visually-hidden">Quicklinks:</h2>
    <p class="visually-hidden">Here are some quicklinks to certain patches in this garden</p>
    <ul>
      {#each folders as folder}
        <li><a href="./{folder}">{folder}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--gap);
    z-index: calc(infinity);
  }
  header > a {
    display: block;
    align-self: flex-start;
    animation: breathe 5s ease-out infinite normal;
  }

  @keyframes breathe {
    0% {
      transform: scale(0.96);
    }
    25% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.96);
    }
    100% {
      transform: scale(0.96);
    }
  }

  header > a div {
    @supports (animation-timeline: scroll()) {
      animation: rotateX linear;
      animation-timeline: scroll(root y);
    }
  }
  header > a svg {
    background: red;
    fill: white;
    min-height: 3rem;

    @supports (animation-timeline: scroll()) {
      animation: rotateY linear;
      animation-timeline: scroll(root x);
    }
  }

  @keyframes rotateX {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(720deg);
    }
  }
  @keyframes rotateY {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(720deg);
    }
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    gap: 0 var(--gap);
    list-style: none;
    max-width: calc(100vw - 7rem);
    z-index: 99;
  }
  li {
    border-radius: 0.2rem;
    background-color: var(--bgcolor);
  }
  nav a {
    text-transform: capitalize;
  }
</style>
