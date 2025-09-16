import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";

export default function CTAS() {
  const t = useTranslations("Hero");
  return (
    <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border-2 border-dashed border-green w-full max-w-lg">
      <LinkButton
        linkName="cta-hero-primary"
        href="http://app.latinhack.io/"
        className=""
      >
        {t("primary-button")}
      </LinkButton>
      <a
        href="https://discord.gg/mwrd8jWV"
        target="_blank"
        data-link-name="cta-hero-secondary"
        className="text-green uppercase font-roboto-mono font-medium cursor-pointer underline text-center align-middle pb-2"
      >
        {t("secondary-button")}
      </a>
    </div>
  );
}
