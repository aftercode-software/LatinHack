import { useTranslations } from "next-intl";
import CTAS from "./CTAS";

export default function Prizes() {
  const t = useTranslations("Hero");
  return (
    <section>
      <div className="mt-4 md:mt-10 w-full max-w-3xl border-green border-2">
        <section className="w-full text-center bg-gradient-to-b from-green-950/90 to-green-600/50 py-4 font-anybody font-bold border-b-2 border-green/70">
          <p className="relative z-10 text-xl sm:text-3xl uppercase">
            {t("prizes.first")} <span>+</span> {t("prizes.second")}
          </p>
        </section>

        <p className="max-w-2xl mx-auto px-8 py-4 md:py-6 text-center font-roboto-mono text-base sm:text-xl text-white/90 uppercase tracking-tight bg-black/70">
          {t("prizes.long")}
        </p>
      </div>
      <CTAS />
    </section>
  );
}
