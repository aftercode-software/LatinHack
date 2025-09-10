import React from "react";

export default function StepCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-2">
      <h3>{title}</h3> -{">"} <p>{description}</p>
    </div>
  );
}
