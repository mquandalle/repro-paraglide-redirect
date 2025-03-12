import { getLocale } from "../../paraglide/runtime";

export function load() {
  return {
    lang: getLocale(),
  };
}
