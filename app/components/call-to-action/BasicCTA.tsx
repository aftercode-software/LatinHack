import { useTranslations } from "next-intl";
import React from "react";
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
        <LinkButton className="text-5xl">{t("primary-button")}</LinkButton>
        <button className="text-green uppercase font-anybody underline text-center align-middle pb-2">
          {t("secondary-button")}
        </button>
      </div>
    </section>
  );
}
