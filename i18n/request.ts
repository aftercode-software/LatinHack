import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, locales } from "./config";

async function getPreferredLocale(): Promise<string> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  if (cookieLocale && locales.includes(cookieLocale as any))
    return cookieLocale;

  const hdrs = await headers();
  const accept = hdrs.get("accept-language") || "";
  const languages = new Negotiator({
    headers: { "accept-language": accept },
  }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export default getRequestConfig(async () => {
  const locale = await getPreferredLocale();

  console.log("locale", locale);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
