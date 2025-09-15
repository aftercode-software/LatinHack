"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import LinkButton, { LinkButtonVariant } from "../LinkButton";

export default function VenuesCard({
  country,
  city,
  date,
  link,
  linkLabel,
}: {
  country: string;
  city: string;
  date: string;
  link: string;
  linkLabel: string;
}) {
  return (
    <div className="bg-black/60 p-6 border-2 border-dashed border-green text-white space-y-2">
      <p className="text-lg font-roboto-mono font-medium">{country}</p>
      <h3 className="text-5xl font-anybody-condensed uppercase text-green">
        {city}
      </h3>
      <p className="text-2xl font-anybody font-bold uppercase">{date}</p>
      <LinkButton
        href={link}
        variant={LinkButtonVariant.SMALL}
        className="mt-4"
        onClick={() => {
          sendGTMEvent({
            event: `view_venue_${country}`,
            event_category: "venues",
            event_label: "primary",
          });
        }}
      >
        {linkLabel}
      </LinkButton>
    </div>
  );
}
