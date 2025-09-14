import { useMessages, useTranslations } from "next-intl";
import Title from "../Title";
import VenuesCard from "./VenuesCard";

export default function Venues() {
  const t = useTranslations("Venues");

  const messages = useMessages();

  const venues = Object.values(messages.Venues.countries);

  console.log(venues);

  return (
    <section className="margin-section">
      <Title>{t("title")}</Title>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {venues.map((country: any) => (
          <VenuesCard
            key={country.country}
            {...country}
            linkLabel={t("linkLabel")}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8 text-center">
        <p className="text-3xl text-white font-bold uppercase">
          {t("microCopy.part-1")}
        </p>
        <p className="text-3xl text-white">{t("microCopy.part-2")}</p>
      </div>
    </section>
  );
}
