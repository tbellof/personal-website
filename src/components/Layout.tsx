import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-every-bg text-every-text transition-[background-color,color] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
      <main className="mx-auto max-w-[1120px] px-6 pb-16 pt-4 md:px-8 md:pb-20 md:pt-8">{children}</main>
    </div>
  );
}
