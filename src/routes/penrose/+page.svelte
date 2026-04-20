<article>
  <div>Write semantic html,</div>
  <div>add css for looks,</div>
  <div>season with js</div>
</article>

<style>
  article {
    --length: 80%;
    --step: calc(var(--length) / 5);
    --tan60: tan(60deg);

    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: calc(var(--step) * 1.2);
    padding-left: calc(var(--step) * 0.4);
    aspect-ratio: 1 / 1.03;

    div {
      position: absolute;
      width: 100%;
      aspect-ratio: 1 / 1;
      transform-origin: calc(var(--step) * 3) calc(var(--step) * 2);
      text-align: center;
      line-height: 3em;

      clip-path: polygon(
        calc(var(--step) * 0.5) 0,
        calc(var(--step) * 5.5) 0,
        calc(var(--step) * 3.5) calc(var(--tan60) * (var(--step) * 2)),
        calc(var(--step) * 3) calc(var(--tan60) * (var(--step) * 1.5)),
        calc(var(--step) * 4) calc(var(--tan60) * (var(--step) * 0.5)),
        0 calc(var(--tan60) * var(--step) * 0.5)
      );

      &:nth-of-type(1) {
        transform: rotate(-40deg);
        background: var(--light);
        background: linear-gradient(to top, var(--light) 60%, transparent);
        color: var(--medium);
      }
      &:nth-of-type(2) {
        transform: rotate(80deg);
        background: var(--medium);
        background: linear-gradient(to top, var(--medium) 60%, var(--light));
        color: var(--dark);
      }
      &:nth-of-type(3) {
        transform: rotate(200deg);
        background: var(--dark);
        background: linear-gradient(to top, var(--dark) 60%, var(--medium));
        color: var(--light);
      }
    }
  }
  @media (min-width: 30rem) {
    article {
      grid-column: 2 / 12;
    }
  }
  @media (min-width: 45rem) {
    article {
      grid-column: 3 / 11;
    }
  }
</style>
