export default function TimelineCard({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="w-full flex flex-col flex-1 bg-black/60 px-4 py-5 md:px-6 font-anybody md:py-6 border-2 border-dashed border-green-500/60">
      <h3 className="text-center font-anybody-condensed font-light text-white text-6xl uppercase">
        {title}
      </h3>
      <span className="text-center text-lg font-roboto-mono font-medium text-green-600">
        {date}
      </span>
    </div>
  );
}
