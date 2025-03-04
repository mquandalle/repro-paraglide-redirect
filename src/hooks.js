import { deLocalizeUrl } from "./paraglide/runtime";

export const reroute = (request) => {
  return deLocalizeUrl(request.url).pathname;
};
