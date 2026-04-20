export const prerender = true

export async function load() {
  const routes = import.meta.glob('./**')
  const folders = Object.keys(routes)
    .map((route) => route.match(/^\.\/([^\/]+)\/\+page\.svelte$/))
    .filter((route) => route !== null)
    .map((route) => route[1])
    .sort()

  return { folders }
}
