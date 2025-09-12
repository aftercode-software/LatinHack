type Step = { title: string; description: string; num?: string };

export default function StepsUnifiedBox({ steps }: { steps: Step[] }) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-lg border border-dashed border-green-500/60
        bg-transparent
      "
    >
      <div className="flex flex-col md:flex-row">
        {steps.map((s, i) => {
          const num = s.num ?? String(i + 1).padStart(2, "0");
          const isLast = i === steps.length - 1;

          return (
            <div
              key={`${num}-${s.title}`}
              className={[
                "relative flex-1 flex flex-col",
                !isLast
                  ? 'md:after:content-[""] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:border-r md:after:border-dashed md:after:border-green-500/60'
                  : "",
                i > 0 ? "md:border-t-0 border-t border-dashed border-green-500/60" : "",
              ].join(" ")}
            >
              <div className="flex items-center px-4 md:px-6 h-9 border-b border-dashed border-green-500/60">
                <span className="text-white text-[11px] font-mono">{num}</span>
              </div>

              <div className="px-4 py-5 md:px-6 md:py-6">
                <h3 className="uppercase text-green-400 text-[22px] md:text-[26px] leading-tight">
                  {s.title}
                </h3>
                <p className="uppercase text-white/95 tracking-wide leading-relaxed text-[12px] md:text-[13px] mt-3">
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
