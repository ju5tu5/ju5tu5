<article>
  <h2>On visual artefacts</h2>
  <p>
    Moiré patterns, an interference effect created when two similar grids such as lines, dots, or
    patterns, are overlaid at slightly different angles or scales. New patterns emerge as a set of
    wavy or curved lines, visually striking and complex. When you zoom in and focus on the linework
    you don't see the pattern, it is only by looking at the drawing as a whole that artefacts
    appear.
  </p>
  <p>
    These effects, often avoided or corrected, dwell in the liminal, born not of matter but of
    thought's yearning shadow. Shimmering on the edge of perception, phantoms woven from absence,
    yet their weight presses upon us as though they were carved from stone. Artefacts, unseen yet
    seen, speak of the human mind's power to sculpt void into meaning. A chair that vanishes beneath
    a distracted glance, a key that jingles only in memory, each tells of a world where reality
    dances with imagination. In paradoxical presence, they remind us: what is not there can shape us
    as much as what is, for the artefacts we perceive are as real as the act of perceiving itself.
  </p>
  <p>
    I find these visual artifacts fascinating and did a few experiments using multiple CSS
    background patterns, please check the animate option and see the patterns emerge.
  </p>
</article>

<section id="moire-circles">
  <label>
    <span>Animate</span>
    <input type="checkbox" />
  </label>
</section>

<section id="moire-burst">
  <label>
    <span>Animate</span>
    <input type="checkbox" />
  </label>
</section>

<section id="moire-dots">
  <label>
    <span>Animate</span>
    <input type="checkbox" />
  </label>
</section>

<section id="moire-lines">
  <label>
    <span>Animate</span>
    <input type="checkbox" />
  </label>
</section>

<style>
  /* MARK: Grid position
  */
  @media (min-width: 30rem) {
    article {
      align-self: start;
      grid-column: 1 / 8;
      grid-row: 1 / 5;
    }
    #moire-circles,
    #moire-burst,
    #moire-dots,
    #moire-lines {
      align-self: start;
      grid-column: 8 / 13;
    }
    #moire-burst {
      grid-row: 2;
    }
    #moire-dots {
      grid-row: 3;
    }
    #moire-lines {
      grid-row: 4;
    }
  }
  @media (min-width: 45rem) {
    article {
      grid-column: 1 / 7;
      grid-row: 1 / 4;
    }
    #moire-circles {
      grid-column: 7 / 10;
      grid-row: 1;
    }
    #moire-burst {
      grid-column: 10 / 13;
      grid-row: 1;
    }
    #moire-dots {
      grid-column: 7 / 10;
      grid-row: 2;
    }
    #moire-lines {
      grid-column: 10 / 13;
      grid-row: 2;
    }
  }
  @media (min-width: 60rem) {
    article {
      grid-column: 1 / 5;
    }
    #moire-circles {
      grid-column: 5 / 9;
    }
    #moire-burst {
      grid-column: 9 / 13;
    }
    #moire-dots {
      grid-column: 5 / 9;
    }
    #moire-lines {
      grid-column: 9 / 13;
    }
  }

  #moire-circles,
  #moire-burst,
  #moire-dots,
  #moire-lines {
    position: relative;
    min-width: 100%;
    aspect-ratio: 1/1;

    label {
      display: flex;
      flex-flow: row-reverse;
      position: absolute;
      color: var(--medium);

      bottom: 0;
    }
  }

  /* MARK: Moire-circles
  */
  @property --moire-circles {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes moire-circles {
    to {
      --moire-circles: 360deg;
    }
  }
  #moire-circles {
    &:has(input:checked) {
      animation: moire-circles 10s linear infinite;
      --offset-x: calc(50% + sin(var(--moire-circles)) * 50%);
      --offset-y: calc(50% + cos(var(--moire-circles)) * 50%);
    }

    --offset-x: calc(50% + sin(var(--moire-circles)) * 50%);
    --offset-y: calc(50% + cos(var(--moire-circles)) * 50%);

    background:
      repeating-radial-gradient(
        circle at 100% 100%,
        transparent,
        transparent 4px,
        var(--light) 4px,
        var(--light) 6px
      ),
      repeating-radial-gradient(
        circle at var(--offset-x) var(--offset-y),
        transparent,
        transparent 4px,
        var(--light) 4px,
        var(--light) 5px
      );
  }

  /* MARK: Moire-burst
  */
  @property --moire-burst {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes moire-burst {
    to {
      --moire-burst: 360deg;
    }
  }
  #moire-burst {
    &:has(input:checked) {
      animation: moire-burst 10s linear infinite;
      --offset-x: calc(50% + sin(var(--moire-burst)) * 20%);
      --offset-y: calc(50% + cos(var(--moire-burst)) * 20%);
    }
    --offset-x: calc(50% + sin(var(--moire-burst)) * 20%);
    --offset-y: calc(50% + cos(var(--moire-burst)) * 20%);

    background:
      repeating-conic-gradient(at 50% 55%, transparent 0deg 2deg, var(--light) 2deg 3deg),
      repeating-conic-gradient(
        at var(--offset-x) var(--offset-y),
        transparent 0deg 2deg,
        var(--light) 2deg 3deg
      );
  }

  /* MARK: Moire dots
  */
  @property --moire-dots {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: true;
  }
  @keyframes moire-dots {
    to {
      --moire-dots: 360deg;
    }
  }
  #moire-dots {
    &:has(input:checked) {
      animation: moire-dots 30s linear infinite;
    }

    background: radial-gradient(var(--medium) 1px, transparent 0);
    background-size: 5px 5px;
    overflow: clip;

    &:before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background: radial-gradient(var(--medium) 1px, transparent 0);
      background-size: 5px 5px;
      transform: rotate(var(--moire-dots));
    }
  }

  /* MARK: Moire lines
  */
  @property --moire-lines {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: true;
  }
  @keyframes moire-lines {
    to {
      --moire-lines: 360deg;
    }
  }
  #moire-lines {
    &:has(input:checked) {
      animation: moire-lines 10s linear infinite;
    }

    background:
      repeating-linear-gradient(
        var(--medium),
        var(--medium) 1px,
        transparent 1px,
        transparent 10px
      ),
      repeating-linear-gradient(
        var(--moire-lines),
        var(--medium),
        var(--medium) 1px,
        transparent 1px,
        transparent 10px
      );
  }
</style>
