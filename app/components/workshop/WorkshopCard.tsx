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
    <div className="border-2 border-dashed border-green p-5 bg-black/60">
      <p className="text-white text-md">{date}</p>
      <h4 className="font-anybody text-green text-3xl uppercase mt-2">
        {title}
      </h4>
      <p className="text-white text-lg mt-2">{description}</p>
      <LinkButton
        variant={LinkButtonVariant.SMALL}
        href={calendarLink}
        className="mt-6"
      >
        {calendarLabel}
      </LinkButton>
    </div>
  );
}
