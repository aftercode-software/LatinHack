/* eslint-disable @next/next/no-img-element */
"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";

export default function BasicCTA() {
  const t = useTranslations("Hero");
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <img
        src="/flechon.png"
        alt=""
        className="w-30 object-contain animate-bounce"
      />
      <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border-2 border-dashed border-green rounded-md w-full max-w-lg">
        <LinkButton
          onClick={() => {
            sendGTMEvent({
              event: "create_account_basic_cta",
              event_category: "cta",
              event_label: "primary",
            });
          }}
          href="http://app.latinhack.io/"
        >
          {t("primary-button")}
        </LinkButton>
        <a
          onClick={() => {
            sendGTMEvent({
              event: "join_discord_basic_cta",
              event_category: "cta",
              event_label: "secondary",
            });
          }}
          href="https://discord.gg/nerdconf"
          target="_blank"
          className="text-green uppercase font-anybody underline text-center align-middle pb-2"
        >
          {t("secondary-button")}
        </a>
      </div>
    </section>
  );
}
