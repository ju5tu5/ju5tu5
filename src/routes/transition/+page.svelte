<script>
  import { onMount } from 'svelte'
  import flammarion from '$lib/assets/flammarion.png'

  onMount(() => {
    document.querySelector('button').addEventListener('click', (event) => {
      document.startViewTransition ? document.startViewTransition(transition) : transition()
    })
  })

  /**
   * Let becoming eclipse being
   */
  function transition() {
    document.querySelector('article').classList.toggle('visual')
  }
</script>

<article>
  <h2>On transitions</h2>
  <p>
    Transitions are the silent passages of existence, where the known trembles at the edge of the
    unknown, and time itself seems to hesitate. They are the liminal spaces where identity dissolves
    and reforms, where becoming eclipses being. In a transition, we are both at home and adrift,
    suspended between what was and what might be. It is here that life speaks most profoundly, not
    in certainties, but in whispers of potential, reminding us that to live is to change and to
    change is to affirm the mystery of existence.
  </p>
  <p>
    As Heraclitus teaches, the river is never the same, and yet it flows—its constancy lies not in
    stillness but in ceaseless transformation. Transitions, like rivers, reveal the flux of life:
    each moment a dissolution and a renewal, an ending that births a beginning. They strip us of
    permanence, reminding us that identity itself is a process, a becoming rather than a being. In
    these thresholds, the familiar dissolves into the unfamiliar, and the self encounters its own
    fragility, its own boundless capacity to adapt and evolve.
  </p>
  <p>
    To dwell in transition is to embrace the paradox of stability within change, to find meaning not
    in arrival but in the act of passage itself, where we are both the current and the banks that
    shape its course.
  </p>
  <img src={flammarion} alt="Flammarion Woodcut" />
  <button>Engage transition</button>
</article>

{#if false}
  <!-- Unreachable but needed to prevent sveltekit style scrubbing *sigh* -->
  <article id="transition" class="visual">
    <p></p>
    <img alt="" />
  </article>
{/if}

<style>
  @keyframes move-out {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @keyframes move-in {
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    to {
      transform: translateY(0%);
    }
  }

  ::view-transition-old(foo) {
    animation: 0.4s ease-in both move-out;
  }

  ::view-transition-new(foo) {
    animation: 0.4s ease-in both move-in;
  }

  article {
    view-transition-name: foo;
    p {
      display: block;
    }
    img {
      display: none;
      max-width: 100%;
      margin: 1rem 0;
    }
    &.visual {
      p {
        display: none;
      }
      img {
        display: block;
      }
    }
  }
  @media (min-width: 30rem) {
    article {
      grid-column: 3 / 11;
    }
  }
</style>
