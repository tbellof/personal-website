import { siteConfig } from "../../config/siteConfig";
import type { StampNavItem as StampNavItemType } from "../../types/site";
import { StampNavItem } from "./StampNavItem";

interface SectionStampNavProps {
  items: StampNavItemType[];
}

function getEnabledItems(items: StampNavItemType[]): StampNavItemType[] {
  const enabledSectionIds = new Set(
    siteConfig.sections.filter((section) => section.enabled).map((section) => section.id),
  );

  return items.filter((item) => enabledSectionIds.has(item.sectionId));
}

export function SectionStampNav({ items }: SectionStampNavProps) {
  const enabledItems = getEnabledItems(items);

  if (enabledItems.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Sections" className="py-6 md:py-10">
      <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full snap-x snap-mandatory flex-nowrap pl-1 md:justify-center md:pl-0">
          {enabledItems.map((item, index) => (
            <StampNavItem key={item.sectionId} item={item} overlap={index > 0} />
          ))}
        </div>
      </div>
    </nav>
  );
}
