import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";

export default function CTAS() {
  const t = useTranslations("Hero");
  return (
    <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border-2 border-dashed border-green rounded-md w-full max-w-lg">
      <LinkButton className="">{t("primary-button")}</LinkButton>
      <button className="text-green uppercase font-anybody underline text-center align-middle pb-2">
        {t("secondary-button")}
      </button>
    </div>
  );
}
