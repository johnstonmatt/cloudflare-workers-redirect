# cloudflare-workers-redirect

A simple redirect edge function designed for [cloudflare workers](https://workers.cloudflare.com/)

## why?

After I built and deployed [deno-redirect](https://github.com/johnstonmatt/deno-redirect) I was curious about the other edge platforms and decided to compare the developer experience. Deno was way easier to get started with (and finished), but I was able to get this working in a few minutes too.

## usage

1. Sign up at [https://dash.cloudflare.com/sign-up/workers](https://dash.cloudflare.com/sign-up/workers)

2. Get an API key from [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

3. Copy this template repo and replace the `TO` variable in [wrangler.toml](wrangler.toml) with the URL you want to redirect to.

## in action

[redirect.runningon.workers.dev](https://redirect.runningon.workers.dev) will redirect you here.

## what about cloudflare's redirect services?

They are almost certainly a better solution. This was a toy project to see how easy it was to use with cloudflare workers.