"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import LinkButton, { LinkButtonVariant } from "../LinkButton";

export default function WorkshopCard({
  title,
  date,
  calendarLink,
  calendarLabel,
  description,
}: {
  title: string;
  date: string;
  calendarLink: string;
  calendarLabel: string;
  description: string;
}) {
  return (
    <div className="border-2 border-dashed border-green p-5 bg-black/60 workshop-card">
      <p className="text-white text-md font-roboto-mono font-medium">{date}</p>
      <h4 className="font-anybody-condensed font-light text-green text-6xl uppercase mt-2">
        {title}
      </h4>
      <p className="text-white text-lg mt-2 font-roboto-mono font-bold">
        {description}
      </p>
      <LinkButton
        variant={LinkButtonVariant.SMALL}
        href={calendarLink}
        className="mt-6"
        onClick={() => {
          sendGTMEvent({
            event: `view_workshop_${title.toLowerCase().replace(/ /g, "_")}`,
            event_category: "workshops",
            event_label: "primary",
          });
        }}
      >
        {calendarLabel}
      </LinkButton>
    </div>
  );
}
