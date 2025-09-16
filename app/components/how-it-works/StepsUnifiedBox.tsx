type Step = { title: string; description: string; num?: string };

export default function StepsUnifiedBox({ steps }: { steps: Step[] }) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-lg border-2 border-dashed border-green-500/60
        bg-black/70
      "
    >
      <div className="flex flex-col md:flex-row">
        {steps.map((s, i) => {
          const num = s.num ?? String(i + 1).padStart(2, "0");
          const isLast = i === steps.length - 1;
          const isFirst = i === 0;

          return (
            <div
              key={`${num}-${s.title}`}
              className={[
                "relative flex-1 flex flex-col",
                !isLast
                  ? 'md:after:content-[""] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:border-2 md:after:border-dashed md:after:border-green-500/60'
                  : "",
                !isFirst ? "border-t-2 border-dashed border-green-500/60 " : "",
              ].join(" ")}
            >
              <div className="flex items-center px-4 md:px-6 py-3  border-b-2 border-dashed border-green-500/60">
                <span className="text-white text-xl font-roboto-mono font-medium">
                  {num}
                </span>
              </div>

              <div className="px-4 py-5 md:px-6 font-anybody md:py-6">
                <h3 className="uppercase text-green-400 font-anybody-condensed font-light leading-tight text-5xl">
                  {s.title}
                </h3>
                <p className="uppercase text-white/95 font-bold mt-3 text-lg max-w-[200px]">
                  {s.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
