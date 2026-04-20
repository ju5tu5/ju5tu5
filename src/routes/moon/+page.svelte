<article></article>

<style>
  @property --grain-pos {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes grain {
    to {
      --grain-pos: 360deg;
    }
  }

  article {
    animation: grain 90s linear infinite;
    min-width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    border-radius: 50%;
    background:
      radial-gradient(
        circle at calc(sin(var(--grain-pos)) * 100% + 50%) 50%,
        var(--dark) 0%,
        transparent 100%
      ),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncA type="discrete" tableValues="1 0" /></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(%23grain)" opacity="0.2" /></svg>');
    filter: contrast(1000%) brightness(1500%);
  }

  @media (min-width: 30rem) {
    article {
      grid-column: 5 / 9;
    }
  }
</style>
