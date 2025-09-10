import { useTranslations } from "next-intl";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">{t("title")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
