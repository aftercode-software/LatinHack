"use client";

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
    <div className="bg-black/60 p-6 text-white space-y-2">
      <p className="text-md font-roboto-mono font-medium">{country}</p>
      <h3 className="text-5xl font-anybody-condensed uppercase text-green">
        {city}
      </h3>
      <p className="text-xl font-roboto-mono font-bold uppercase">{date}</p>
      <LinkButton
        href={link}
        variant={LinkButtonVariant.SMALL}
        className="mt-4"
        linkName={`view_venue_${country}`}
      >
        {linkLabel}
      </LinkButton>
    </div>
  );
}
