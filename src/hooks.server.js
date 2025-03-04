import { paraglideMiddleware } from "./paraglide/server";

export const handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ locale }) => {
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace("%lang%", locale),
    });
  });
