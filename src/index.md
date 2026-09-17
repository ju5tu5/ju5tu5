---
title: Entrance
eleventyExcludeFromCollections: true
---

<article>

Hi 🖖,

You have reached the digital garden of Justus Sturkenboom, Philosophy/ Computer Science Lecturer at the #AUAS in the [Frontend Design & Development (FDND) Associate degree](https://fdnd.nl), the [Communication & Multimedia Design Bachelors degree](https://cmd-amsterdam.nl) and the [Denkerslab applied philosophy minor](https://denkerslab.nl) programme... and i do some sketchnoting for fun.

## This website is supposed to be a digital garden...

...but i'm a lousy gardener spending all my time on other projects on [GitHub](https://github.com/ju5tu5/) and since recent times [Codeberg](https://codeberg.org/ju5tu5/). Maybe this is exactly what it means to cultivate a digital garden, always pruning, never finished. I'm proud to be a part of the [Digitaal Tuintje webring](https:/digitaaltuintje.nl).

Although my garden is pretty small, it has been rebuilt a couple of times and of course i'm still not satisfied. I started out using static HTML and CSS, which was very satisfactory but missed some scripting features. I enjoy static but a solid build process and some syntactic sugar would be nice, so i went with [sveltekit](https://svelte.dev/docs/kit/introduction) afterwards. This tickled my framework fascination but deemed to be a total overkill for my small garden, like using a [Fendt 1100 Vario MT](https://www.fendt.com/int/agricultural-machinery/tractors/fendt-1100-vario-mt) in my 5,5x12m back yard, and above all it generated ugly code. So now i'm rebuilding using [11ty](https://www.11ty.dev/) as a static site generator...

I'd like to take some time to explain what a digital garden is... so you can expect that here in a while...

I've got a few things going so you can check out how to work with me on the [man page](/man) and change the whole layout as you see fit using my [diwhy?](/diwhy) experiment. I actually started <a href="/the-web-you-want/">writing</a> small essays and wonder if i'll keep doing this.

</article>
<canvas aria-label="Generative artwork: a cluster of vines slowly growing upward. Refresh or click for a new composition.">
    Your browser does not support canvas. Please imagine vines creeping up the page.
</canvas>

<style>
  canvas {
    width: 100%;
  }
  @media (min-width: 30rem) {
    main {
      place-items: end;
    }
    article {
      grid-column: 7 / -1;
    }
    canvas {
      grid-column: 1 / 7;
      grid-row: 1;
      height: 100%;
    }
  }
</style>

<script>
(() => {
  'use strict'

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  const TAU = Math.PI * 2
  const UP = -Math.PI / 2

  const rand = (a, b) => a + Math.random() * (b - a)
  const pick = (...xs) => xs[(Math.random() * xs.length) | 0]
  const angleDiff = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b)) // shortest signed angular difference
  const easeOut = t => 1 - (1 - t) ** 3

  let W, H, S       // css-pixel size and a resolution-independent scale
  let vines, leaves // active growth
  let rafId = null

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    W = canvas.clientWidth
    H = canvas.clientHeight
    canvas.width = Math.round(W * dpr)
    canvas.height = Math.round(H * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0) // draw in css pixels
    ctx.lineCap = 'round'
    // everything visual scales off the shorter edge → consistent on any resolution
    S = Math.max(0.55, Math.min(W, H) / 800)
  }

  function makeVine(x, y, angle, width, hue) {
    return {
      x, y, angle, width, hue,
      age: 0,
      life: Math.round((H / (1.25 * S)) * rand(0.9, 1.35)),
      speed: 1.25 * S * rand(0.85, 1.15),
      swayFreq: rand(0.015, 0.05),
      swayAmp: rand(0.06, 0.16),
      phase: rand(0, TAU),
      leafSide: pick(-1, 1),
      nextLeaf: Math.round(rand(14, 30)),
      curl: 0, // nonzero → decorative end-tendril spiraling in on itself
    }
  }

  function plantCluster() {
    vines = []
    leaves = []
    const cx = rand(0.22, 0.78) * W         // cluster root, random per refresh
    const n = 4 + ((Math.random() * 4) | 0)
    for (let i = 0; i < n; i++) {
      vines.push(makeVine(
        cx + rand(-1, 1) * W * 0.09,
        H + 4,
        UP + rand(-0.7, 0.7),               // randomized initial heading
        rand(3.2, 5.8) * S,
        rand(85, 150)                       // green range, varies per vine
      ))
    }
  }

  function stemWidth(v) {
    return Math.max(0.35, v.width * (1 - v.age / v.life) ** 0.85)
  }

  function drawLeaf(l, t) {
    const len = l.size * t
    const wid = l.size * 0.42 * t

    ctx.save()
    ctx.translate(l.x, l.y)
    ctx.rotate(l.angle)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(len * 0.5, -wid, len, 0)
    ctx.quadraticCurveTo(len * 0.5, wid, 0, 0)
    ctx.fillStyle = `hsl(${l.hue} ${l.sat}% ${l.light}%)`
    ctx.fill()
    ctx.beginPath()                                  // midrib
    ctx.moveTo(0, 0)
    ctx.lineTo(len * 0.92, 0)
    ctx.lineWidth = Math.max(0.4, 0.06 * len)
    ctx.strokeStyle = `hsl(${l.hue} ${l.sat}% ${l.light - 12}%)`
    ctx.stroke()
    ctx.restore()
  }

  function stepVine(v) {
    const px = v.x, py = v.y

    if (v.curl) {
      v.curl *= 1.03                                // tighten into a spiral
      v.angle += v.curl
    } else {
      v.angle += angleDiff(UP, v.angle) * 0.03      // gentle upward bias (0.016)
      v.angle += Math.sin(v.age * v.swayFreq + v.phase) * v.swayAmp // undulation
      v.angle += rand(-0.11, 0.11)                  // jitter → unique every run
    }

    v.x += Math.cos(v.angle) * v.speed
    v.y += Math.sin(v.angle) * v.speed
    v.age++

    const w = stemWidth(v)
    ctx.beginPath()
    ctx.moveTo(px, py)
    ctx.lineTo(v.x, v.y)
    ctx.lineWidth = w
    ctx.strokeStyle = `hsl(${v.hue} 42% ${26 + (1 - w / v.width) * 14}%)`
    ctx.stroke()

    // foliage
    if (!v.curl && v.age >= v.nextLeaf && w > 0.8) {
      v.nextLeaf = v.age + Math.round(rand(14, 30) / S)
      v.leafSide *= -1
      leaves.push({
        x: v.x, y: v.y,
        angle: v.angle + v.leafSide * rand(0.5, 1.15),
        size: rand(9, 22) * S * Math.min(1, w / (2 * S) + 0.45),
        hue: v.hue + rand(-14, 14),
        sat: rand(38, 58),
        light: rand(30, 44),
        t: 0,
        grow: Math.round(rand(24, 48)), // frames to unfold
      })
    }

    // branching
    if (!v.curl && w > 1.5 * S && vines.length < 70 && Math.random() < 0.014) {
      vines.push(makeVine(
        v.x, v.y,
        v.angle + pick(-1, 1) * rand(0.45, 1.0),
        w * rand(0.55, 0.7),
        v.hue + rand(-10, 10)
      ))
    }

    // death: exhausted, too thin, or wandered off-canvas
    if (v.age >= v.life || w <= 0.4 || v.x < -30 || v.x > W + 30 || v.y < -30 || v.y > H + 30) {
      if (!v.curl && Math.random() < 0.45 && v.y > 0) {
        // end in a small tendril curl instead of just stopping
        v.curl = v.leafSide * rand(0.14, 0.24)
        v.age = 0
        v.life = Math.round(rand(26, 44))
        v.width = Math.max(1, w)
        v.speed *= 0.75
        return true
      }
      return false
    }
    return true
  }

  function stepLeaves() {
    for (let i = leaves.length - 1; i >= 0; i--) {
      const l = leaves[i]
      l.t++
      drawLeaf(l, easeOut(Math.min(1, l.t / l.grow))) // opaque redraw covers prior frame
      if (l.t >= l.grow) leaves.splice(i, 1)
    }
  }

  function frame() {
    for (let i = vines.length - 1; i >= 0; i--) {
      if (!stepVine(vines[i])) vines.splice(i, 1)
    }
    stepLeaves()
    rafId = (vines.length || leaves.length) ? requestAnimationFrame(frame) : null
  }

  function start() {
    if (rafId) cancelAnimationFrame(rafId)
    size()
    ctx.clearRect(0, 0, W, H) // stays transparent
    plantCluster()
    if (reducedMotion.matches) {
      // draw the finished composition in one go
      let safety = 20000 // max 20000 steps, no infinite loops here
      while ((vines.length || leaves.length) && safety--) {
        for (let i = vines.length - 1; i >= 0; i--) {
          if (!stepVine(vines[i])) vines.splice(i, 1)
        }
        stepLeaves()
      }
      rafId = null
    } else {
      rafId = requestAnimationFrame(frame)
    }
  }

  // regrow on click/tap and on resize (debounced)
  canvas.addEventListener('click', start)
  let resizeTimer
  addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      if (canvas.clientWidth !== W || canvas.clientHeight !== H) start()
    }, 250)
  })

  start()
})()
</script>
