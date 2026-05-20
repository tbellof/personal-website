import type { ReactNode } from "react";

interface IconButtonProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function IconButton({ href, label, children }: IconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex min-h-11 min-w-11 items-center justify-center text-every-icon hover:opacity-80 transition-opacity"
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
