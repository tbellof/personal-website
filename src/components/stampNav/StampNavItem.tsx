import type { StampNavItem } from "../../types/site";

interface StampNavItemProps {
  item: StampNavItem;
  overlap?: boolean;
}

export function StampNavItem({ item, overlap = false }: StampNavItemProps) {
  return (
    <a
      href={`#${item.sectionId}`}
      aria-label={`Go to ${item.label} section`}
      className={[
        "group relative block h-[160px] w-[120px] shrink-0 snap-center transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        "hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
        "md:h-[180px] md:w-[140px]",
        overlap ? "-ml-4 md:-ml-5" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="surface-flat absolute inset-0 p-1.5 transition-[border-color,box-shadow] duration-200 group-hover:border-[var(--primary)] group-hover:shadow-[var(--glow-primary)]">
        <div
          className="relative h-full w-full overflow-hidden rounded-md border border-[var(--border)]"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <span className="font-mono-ui absolute left-3 top-3 z-10 text-xs font-normal uppercase tracking-[0.12em] text-every-muted transition-colors duration-200 group-hover:text-every-text md:left-4 md:top-4">
            {item.label}
          </span>
          <img
            src={item.illustrationSrc}
            alt=""
            className="absolute bottom-0 left-1/2 h-[55%] w-[85%] -translate-x-1/2 object-contain opacity-70 transition-opacity duration-200 group-hover:opacity-90"
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
}
