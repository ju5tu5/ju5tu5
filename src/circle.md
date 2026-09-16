---
title: circle
date: 2026-06-24
---

<article>

# I might want to write ...

... something or other ... sometimes.

</article>

<style>
  @property --hue {
    syntax: "<angle>";
    inherits: true;
    initial-value: 360deg;
  }

  @property --offset {
    syntax: "<length>";
    initial-value: 80px;
    inherits: false;
  }
  @keyframes tunnel {
    from {
      --offset: 0px;
    }
  }
  @keyframes rotate {
    from {
      --hue: 0deg;
    }
  }

  main {
    --size: 40px;
    --color: hsla(var(--hue), 100%, 50%, .3);
    background: repeating-radial-gradient(circle,
      var(--color) var(--offset),
      var(--color)  calc(var(--offset) + var(--size)),
      #0000 0,
      #0000 calc(var(--offset) + var(--size) + var(--size)),
    );
    background-image: url(/assets/jsts.svg) no-repeat center;
    place-items: center;
  }
  @media (prefers-reduced-motion: no-preference) {
    main {
      animation: tunnel 10s infinite linear, rotate 100s infinite linear;
    }
  }
  @media (min-width: 30rem) {
    article {
      max-width: 30rem;
      grid-column: 3 / 11;
    }
  }
</style>
