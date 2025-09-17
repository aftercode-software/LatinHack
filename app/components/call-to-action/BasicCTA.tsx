/* eslint-disable @next/next/no-img-element */
"use client";
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
      <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border border-dashed border-green w-full max-w-lg">
        <LinkButton
          linkName="create_account_basic_cta"
          href="http://app.latinhack.io/"
        >
          {t("primary-button")}
        </LinkButton>
        <a
          data-link-name="join_discord_basic_cta"
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
