const PERMANENT_REDIRECT = 301;
const defaultTo = "https://github.com/johnstonmatt/cloudflare-workers-redirect";

export default {
  async fetch(request: Request, env: { [key: string]: string }) {
    const to = env.TO || defaultTo;
    return await handleRequest(request, to);
  },
};

async function handleRequest(_: Request, to: string) {
  return new Response(null, {
    status: PERMANENT_REDIRECT,
    headers: {
      Location: to,
    },
  });
}
