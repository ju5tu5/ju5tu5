---
title: Instruments
date: 2026-07-14
---

<article>

## Instrument Panels

Last week i random shuffled all music in my library and while listening to Less Than, a song from the album <cite>Add violence by Nine Inch Nails</cite> (see image) i got inspired by the distressed instrument panel on the cover.

[![Nine Inch Nails - Add Voilence](/assets/nin-add-violence.png)](/assets/nin-add-violence.png)

It made me wonder if i could build similar distressed skeuomophic interfaces using HTML and CSS. I would like to use CSS form inputs and meters combined with pure CSS, using shadows, gradients, and borders with distressed textures using CSS gradients, blend modes, and SVG filters.

Note: this is hard and will probably take a very long time..

</article>

<form>
  <fieldset>
    <label for="anxiety">Anxiety</label>
    <meter id="anxiety" min="0" max="25" low="10" high="20" optimum="15" value="17">
      at 17 (out of 25)
    </meter>
  </fieldset>
  <fieldset>

  </fieldset>
</form>

<style>
  form {
    display: grid;
    gap: var(--gap);
    /* grid-template-columns: 1fr 1fr; */
    backdrop-filter: url(#painted-metal);
    padding: var(--gap);

    font-family: system-ui, sans-serif;
    text-transform: uppercase;
    text-align: center;
  }
  fieldset {
    display: grid;
    gap: var(--gap);
    border: 0;
  }
  label {
    display: block;
    font-weight: bold;
    font-stretch: condensed;
    width: 100%;
    padding: var(--gap);
    color: #f2efe6;
    background: linear-gradient(165deg, #33363d, #212329 55%, #191b20);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.12), /* top bevel catching light */
      inset 0 -2px 3px rgb(0 0 0 / 0.45),    /* bottom bevel */
      0 2px 4px rgb(0 0 0 / 0.35);           /* pin-back drop shadow */
    text-shadow: 0 1px 1px rgb(0 0 0 / 0.6); /* engraved lettering */
    filter: url(#scratched-plastic);
  }

  meter {
    appearance: none;
    -webkit-appearance: none;
    display: block;
    
    border-style: ridge;
    border-color: black;
    border-width: 2rem 2.5rem;

    box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.12), inset 0 -2px 3px rgb(0 0 0 / 0.45), 0 2px 4px rgb(0 0 0 / 0.35);
    width: 100%;
    height: 8rem;
    aspect-ratio: 1 / 2;
    border-radius: 0;
    background: linear-gradient(to right, white, black);
  }
  meter::-moz-meter-bar,
  meter::-webkit-meter-bar {
    background: hotpink;
  }

/* Optimum Range (e.g., green for good) */
meter::-webkit-meter-optimum-value {
  background: linear-gradient(to right, hotpink, #81c784);
}
meter::-moz-meter-optimum-value {
  background: linear-gradient(to right, #4caf50, #81c784);
}

/* Sub-optimum Range (e.g., orange for warning) */
meter::-webkit-meter-suboptimum-value {
  background: linear-gradient(to right, #ff9800, #ffb74d);
}

/* Even Less Good Range (e.g., red for danger) */
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to right, #f44336, #e57373);
}

  @media (min-width: 30rem) {
    main {
      place-items: start;
    }
    article {
      grid-column: 1/7;
    }
    form {
      width: 100%;
      grid-column: 7/-1;
    }
  }

</style>

<svg width="1337" height="1337" xmlns="http://w3.org">
  <defs>
    <filter id="painted-metal" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".08" numOctaves="8" result="noise"/>
      <feDiffuseLighting in="noise" lighting-color="FloralWhite" surfaceScale=".5" result="light">
        <feDistantLight azimuth="50" elevation="40"/>
      </feDiffuseLighting>
    </filter>

  </defs>
  </svg>

<!--
  Scratched matte plastic. Four layers, then a clip:

    1. worn edges — fine displacement nicks the tag silhouette and lettering
    2. matte grain — high-frequency noise soft-lighted over the surface
    3. scratches  — two anisotropic noise fields (one stretched horizontally,
                    one vertically), each thresholded to sparse near-white
                    hairlines and then bent through a coarse displacement
                    field so the lines tilt and curve in random directions;
                    merged with screen. Thresholding happens BEFORE the bend
                    so the hairlines keep their width while changing angle.
    4. scuffs     — broader low-frequency dark patches that dull the sheen
    5. clip       — texture composited back inside the worn silhouette

  Tuning knobs:
    · scratch density/length: baseFrequency of s1/s2-noise (the small
      component controls length, the large one thinness/count), and the
      alpha row of each feColorMatrix — alpha' = 9a − 6.4 keeps ~2.5%
      coverage per field; lower the offset (e.g. −5.8) for more scratches
    · scratch direction spread: the "bend" displacement scales (28 / 46);
      0 = strictly axis-aligned, 60+ = wildly curved
    · scratch brightness: feFuncA slope on "scratches"
    · wear on lettering: feDisplacementMap scale
    · grain strength: feFuncR/G/B slope on "grain" (0.5 ≈ subtle;
      neutral grey 0.5 = no effect under soft-light)
    · change seed on any feTurbulence for a different tag from the same batch

  Keep the filter in the same document: Chromium does not resolve
  cross-document url(#…) filter references.
-->
<svg width="0" height="0" aria-hidden="true" style="position:absolute">
  <filter id="scratched-plastic" x="-3%" y="-6%" width="106%" height="112%" color-interpolation-filters="sRGB">
    <!-- 1 worn silhouette -->
    <feTurbulence type="fractalNoise" baseFrequency="0.11 0.08" numOctaves="2" seed="7" result="edge-noise"/>
    <feDisplacementMap in="SourceGraphic" in2="edge-noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" result="worn"/>
    <!-- 2 matte grain -->
    <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="2" result="grain-noise"/>
    <feColorMatrix in="grain-noise" type="matrix"
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 0 1" result="grain-grey"/>
    <feComponentTransfer in="grain-grey" result="grain">
      <feFuncR type="linear" slope="0.4" intercept="0.25"/>
      <feFuncG type="linear" slope="0.4" intercept="0.25"/>
      <feFuncB type="linear" slope="0.4" intercept="0.25"/>
    </feComponentTransfer>
    <feBlend in="grain" in2="worn" mode="soft-light" result="matte"/>
    <!-- 3a horizontal scratches, bent into varied angles -->
    <feTurbulence type="fractalNoise" baseFrequency="0.01 15" numOctaves="1" seed="27" result="s1-noise"/>
    <feColorMatrix in="s1-noise" type="matrix"
        values="0 0 0 0 0.95
                0 0 0 0 0.93
                0 0 0 0 0.88
                0 0 0 9 -6.4" result="s1-hard"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="1" seed="41" result="s1-bend"/>
    <feDisplacementMap in="s1-hard" in2="s1-bend" scale="28" xChannelSelector="R" yChannelSelector="G" result="s1"/>
    <!-- 3b · vertical-ish scratches, bent the other way -->
    <feTurbulence type="fractalNoise" baseFrequency="15 0.006" numOctaves="1" seed="27" result="s2-noise"/>
    <feColorMatrix in="s2-noise" type="matrix"
        values="0 0 0 0 0.95
                0 0 0 0 0.93
                0 0 0 0 0.88
                0 0 0 9 -6.4" result="s2-hard"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="1" seed="8" result="s2-bend"/>
    <feDisplacementMap in="s2-hard" in2="s2-bend" scale="46" xChannelSelector="R" yChannelSelector="G" result="s2"/>
    <feBlend in="s1" in2="s2" mode="screen" result="scratch-field"/>
    <feGaussianBlur in="scratch-field" stdDeviation="0.3" result="scratch-soft"/>
    <feComponentTransfer in="scratch-soft" result="scratches">
      <feFuncA type="linear" slope="0.55" intercept="0"/>
    </feComponentTransfer>
    <feBlend in="scratches" in2="matte" mode="screen" result="scratched"/>
    <!-- 4 · dull scuffed patches -->
    <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="3" seed="31" result="scuff-noise"/>
    <feColorMatrix in="scuff-noise" type="matrix"
        values="0 0 0 0 0.05
                0 0 0 0 0.05
                0 0 0 0 0.06
                0 0 0 5 -3.1" result="scuff-hard"/>
    <feGaussianBlur in="scuff-hard" stdDeviation="0.6" result="scuff-soft"/>
    <feComponentTransfer in="scuff-soft" result="scuffs">
      <feFuncA type="linear" slope="0.3" intercept="0"/>
    </feComponentTransfer>
    <feComposite in="scuffs" in2="scratched" operator="over" result="dulled"/>
    <!-- 5 · clip texture back inside the worn silhouette -->
    <feComposite in="dulled" in2="worn" operator="in"/>

  </filter>
</svg>
