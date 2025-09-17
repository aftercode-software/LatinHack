/* eslint-disable @next/next/no-img-element */
export default function PrizeCard({
  prize,
  iconImage,
  description,
}: {
  prize: string;
  iconImage: string;
  description: React.ReactNode;
}) {
  return (
    <div className="prizes-card">
      <div className="flex flex-row">
        <div className="w-20 bg-green p-2">
          <img
            src={iconImage}
            alt={prize}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center border md:border-l-0 bg-black/60 border-green border-dashed flex-1 flex items-center justify-center md:justify-start py-4 md:py-0 md:pl-4">
          <h3 className="text-green-500 text-6xl md:text-6xl uppercase font-anybody-condensed font-light">
            {prize}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-white text-xl md:text-2xl uppercase font-anybody font-semibold">
        {description}
      </p>
    </div>
  );
}
