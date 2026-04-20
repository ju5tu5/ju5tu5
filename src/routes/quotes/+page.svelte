<script>
  import { onMount } from 'svelte'
  const quotes = [
    {
      text: 'Bring something incomprehensible into the world!',
      cite: 'Gilles Deleuze, A Thousand Plateaus'
    }
  ]

  onMount(() => {
    hydrateBlockquote(randomArrayItem(quotes))
  })

  function hydrateBlockquote(quote) {
    const element = document.querySelector('blockquote')
    element.children[0].innerHTML = quote.text
    element.children[1].innerHTML = quote.cite
  }

  function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
</script>

<blockquote id="incomprehensible">
  <p>{quotes[0].text}</p>
  <cite>{quotes[0].cite}</cite>
</blockquote>

<style>
  blockquote {
    height: fit-content;
    aspect-ratio: 1 / 1;
  }
  @media (min-width: 30rem) {
    blockquote {
      grid-column: 2 / 12;
    }
  }
  @media (min-width: 40rem) {
    blockquote {
      grid-column: 3 / 11;
    }
  }
  @media (min-width: 50rem) {
    blockquote {
      grid-column: 4 / 10;
    }
  }
  @media (min-width: 60rem) {
    blockquote {
      grid-column: 5 / 9;
    }
  }
</style>
