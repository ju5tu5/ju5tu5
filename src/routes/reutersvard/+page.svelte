<article>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</article>

<style>
  @media (min-width: 30rem) {
    article {
      grid-column: 2 / 12;
    }
  }
  article {
    /* background-color: red; */
    --length: min(90vw, 90vh);

    --size: calc(var(--length) / 6);
    --gap: calc(var(--size) / 2);
    --step: calc(var(--size) + var(--gap));
    --rotateX: 55deg;

    position: relative;
    min-width: 100%;
    aspect-ratio: 1 / 1.1;

    div,
    div::before,
    div::after,
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: grid;
      place-items: center;
      transform-origin: 0 0;
      transform-style: preserve-3d;
      aspect-ratio: 1/1;
      width: var(--size);
    }

    div {
      background: var(--light);
      background: linear-gradient(to top right, var(--light), white);

      &::before {
        transform: rotate3d(0, 1, 0, 90deg);
        background: var(--dark);
        background: linear-gradient(to bottom left, var(--dark), var(--medium));
      }
      &::after {
        top: 100%;
        transform: rotate3d(-1, 0, 0, 90deg);
        background: var(--medium);
        background: linear-gradient(to top right, var(--medium), var(--light));
      }

      &:nth-of-type(1) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 3.2), calc(var(--step) * -2), calc(var(--step) * -3.5));
      }
      &:nth-of-type(2) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 3.2), calc(var(--step) * -1), calc(var(--step) * -3.5));
      }
      &:nth-of-type(3) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 3.2), 0, calc(var(--step) * -3.5));
      }
      &:nth-of-type(4) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 2.2), 0, calc(var(--step) * -3.5));
      }
      &:nth-of-type(5) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 1.2), 0, calc(var(--step) * -3.5));
      }
      &:nth-of-type(6) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 0.2), 0, calc(var(--step) * -3.5));
      }
      &:nth-of-type(7) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 0.2), 0, calc(var(--step) * -2.5));
      }
      &:nth-of-type(8) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 0.2), 0, calc(var(--step) * -1.5));
      }
      &:nth-of-type(9) {
        transform: rotateX(var(--rotateX)) rotateZ(-45deg)
          translate3d(calc(var(--step) * 0.2), 0, calc(var(--step) * -0.5));
      }
    }

    &::before {
      transform: rotateX(var(--rotateX)) rotateZ(-45deg)
        translate3d(calc(var(--step) * 3.2), calc(var(--step) * -2), calc(var(--step) * -3.5));
      background: var(--light);
      background: linear-gradient(to top right, var(--light), white);
      z-index: 1;
    }

    &::after {
      transform: rotateX(35deg) rotateY(45deg)
        translate3d(calc(var(--step) * -2), calc(var(--step) * 3.5), calc(var(--step) * 3.2));
      background: var(--dark);
      background: linear-gradient(to top right, var(--dark), var(--medium));
      z-index: 1;
    }
  }
</style>
