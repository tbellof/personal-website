import type { ReactNode } from "react";

type SectionDensity = "airy" | "default" | "tight";

interface SectionShellProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  density?: SectionDensity;
}

const densityClasses: Record<SectionDensity, string> = {
  airy: "py-16 md:py-24",
  default: "py-10 md:py-16",
  tight: "py-8 md:py-12",
};

export function SectionShell({
  id,
  title,
  children,
  className = "",
  density = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`border-t border-[var(--hairline)] first:border-t-0 ${densityClasses[density]} ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      {title ? (
        <h2
          id={`${id}-heading`}
          className="mb-6 text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] text-every-text md:mb-8"
        >
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
