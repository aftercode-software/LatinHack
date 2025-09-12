import { useTranslations } from "next-intl";

export default function CTAS() {
  const t = useTranslations("Hero");
  return (
    <div className="space-y-4 mx-auto relative p-2 bg-black/90 md:-top-4 flex flex-col border-2 border-green rounded-md w-full max-w-lg">
      <button className="bg-gradient-to-b font-upheaval from-white to-green-600 rounded-sm py-2 text-black uppercase text-4xl">
        {t("primary-button")}
      </button>
      <button className="text-green uppercase font-anybody underline text-center align-middle pb-2">
        {t("secondary-button")}
      </button>
    </div>
  );
}
