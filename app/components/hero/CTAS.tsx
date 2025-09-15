import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";

export default function CTAS() {
  const t = useTranslations("Hero");
  return (
    <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border-2 border-dashed border-green w-full max-w-lg">
      <LinkButton
        onClick={() => {
          sendGTMEvent({
            event: "register_now_hero",
            event_category: "cta",
            event_label: "primary",
          });
        }}
        className=""
      >
        {t("primary-button")}
      </LinkButton>
      <a
        href="https://discord.gg/nerdconf"
        target="_blank"
        onClick={() => {
          sendGTMEvent({
            event: "join_discord_hero",
            event_category: "cta",
            event_label: "secondary",
          });
        }}
        className="text-green uppercase font-roboto-mono font-medium cursor-pointer underline text-center align-middle pb-2"
      >
        {t("secondary-button")}
      </a>
    </div>
  );
}
