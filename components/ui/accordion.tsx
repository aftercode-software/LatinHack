"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="border-x-2 border-t-2 border-dashed border-green"
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b-2 border-dashed border-green", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `text-green flex flex-1 items-start justify-between gap-4 px-4 py-4 text-left text-2xl font-anybody font-bold transition-all 
          outline-none disabled:pointer-events-none disabled:opacity-50 bg-black/80 [&[data-state=open]]:text-white [&[data-state=open]]:bg-gradient-to-b [&[data-state=open]]:from-green-950/90 [&[data-state=open]]:to-green-600/50 [&[data-state=open]>svg]:rotate-180`,
          className
        )}
        {...props}
      >
        {children}

        <svg
          id="arrow-alt-circle-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
          fill="white"
        >
          <path d="m15,22h2v-1s2,0,2,0v-1s1,0,1,0v-1s1,0,1,0v-2s1,0,1,0v-2s1,0,1,0v-6h-1s0-2,0-2h-1s0-2,0-2h-1s0-1,0-1h-1s0-1,0-1h-2s0-1,0-1h-2s0-1,0-1h-6v1s-2,0-2,0v1s-2,0-2,0v1s-1,0-1,0v1s-1,0-1,0v2s-1,0-1,0v2s-1,0-1,0v6h1s0,2,0,2h1s0,2,0,2h1s0,1,0,1h1s0,1,0,1h2s0,1,0,1h2s0,1,0,1h6v-1Zm-6-1v-1h-2s0-1,0-1h-2s0-2,0-2h-1s0-2,0-2h-1s0-6,0-6h1v-2s1,0,1,0v-2s2,0,2,0v-1s2,0,2,0v-1s6,0,6,0v1h2s0,1,0,1h2s0,2,0,2h1s0,2,0,2h1s0,6,0,6h-1v2s-1,0-1,0v2s-2,0-2,0v1s-2,0-2,0v1s-6,0-6,0Z" />
          <polygon points="13 17 11 17 11 16 10 16 10 15 9 15 9 14 8 14 8 13 7 13 7 12 11 12 11 6 13 6 13 12 17 12 17 13 16 13 16 14 15 14 15 15 14 15 14 16 13 16 13 17" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up border-t-2 border-dashed 
      bg-black/80 border-green px-4 text-white text-xl font-roboto-mono font-bold"
      {...props}
    >
      <div className={cn("pt-0 py-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
