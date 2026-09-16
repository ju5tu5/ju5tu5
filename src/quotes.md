---
title: Quotes
---

{%- for quote in collections.quote -%}
<article data-category="{{ quote.data.category }}">
{{ quote.content }}
</article>
{%- endfor -%}

<!-- Comment needed to prevent missing </p> parse error.. 11ty glitch? -->

<style>
  main {
    --grid-lanes-polyfill: 1;
    --colls: calc(100vw / 18rem);
    margin: 5rem var(--gap) 3rem var(--gap);
    display: grid-lanes;
  }
  /* article[data-category=philosophy] {} */
</style>

<script type="module">
  import { supportsGridLanes, init } from "/assets/script/grid-lanes-polyfill.js"
  document.addEventListener("DOMContentLoaded", () => {
    if (!supportsGridLanes()) init({ force: true })
  })
</script>
