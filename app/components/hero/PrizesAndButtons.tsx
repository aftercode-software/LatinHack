import { useTranslations } from "next-intl";
import CTAS from "./CTAS";

export default function Prizes() {
  const t = useTranslations("Hero");
  return (
    <section className="prizes-and-buttons">
      <div className="mt-4 md:mt-10 w-full max-w-3xl border-2 border-dashed border-green">
        <section className="flex items-center justify-center w-full text-center bg-gradient-to-b from-green-950/90 to-green-600/50 py-4 font-anybody font-bold border-b-2 border-green/70 border-dashed">
          <p className="text-xl sm:text-3xl uppercase text-white leading-6 -mb-2">
            {t("prizes.first")} <span>+</span> {t("prizes.second")}
          </p>
        </section>

        <p className="max-w-2xl mx-auto px-8 py-4 md:py-6 text-center font-anybody font-normal text-base sm:text-xl text-white/90 uppercase tracking-tight bg-black/70">
          {t("prizes.long")}
        </p>
      </div>
      <CTAS />
    </section>
  );
}
