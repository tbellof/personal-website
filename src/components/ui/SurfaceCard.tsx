import type { ReactNode } from "react";

interface SurfaceCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export function SurfaceCard({ title, description, children, footer }: SurfaceCardProps) {
  return (
    <article className="surface-flat flex h-full flex-col p-6">
      <h3 className="m-0 text-[19px] font-medium leading-[1.4] text-every-text">{title}</h3>
      <p className="m-0 mt-3 flex-1 text-base leading-relaxed text-every-muted">{description}</p>
      {children}
      {footer ? <div className="mt-4">{footer}</div> : null}
    </article>
  );
}
