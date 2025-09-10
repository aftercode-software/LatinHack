"use client";

import Link from "next/link";

type Action =
  | { label: string; href: string; variant?: "primary" | "link"; onClick?: never }
  | { label: string; onClick: () => void; variant?: "primary" | "link"; href?: never };

export type CardProgressProps = {
  title: string;
  description?: string;
  actions?: Action[];     
  className?: string;    
};

export default function CardProgress({
  title,
  description,
  actions = [],
  className = "",
}: CardProgressProps) {
  return (
    <div className={`p-4 rounded border border-gray-200 ${className}`}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      {description ? <p className="text-gray-600 mb-4">{description}</p> : null}

      {actions.length > 0 && (
        <div className="flex items-center gap-3">
          {actions.map((a, i) => {
            const isPrimary = (a.variant ?? "primary") === "primary";

            if ("href" in a && a.href) {
              return isPrimary ? (
                <Link
                  key={i}
                  href={a.href}
                  className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90"
                >
                  {a.label}
                </Link>
              ) : (
                <Link
                  key={i}
                  href={a.href}
                  className="text-sm text-gray-600 hover:text-black underline underline-offset-4"
                >
                  {a.label}
                </Link>
              );
            }

            return isPrimary ? (
              <button
                key={i}
                type="button"
                onClick={a.onClick}
                className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90"
              >
                {a.label}
              </button>
            ) : (
              <button
                key={i}
                type="button"
                onClick={a.onClick}
                className="text-sm text-gray-600 hover:text-black underline underline-offset-4"
              >
                {a.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
