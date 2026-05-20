import { Fragment } from "react";
import { siteConfig } from "../config/siteConfig";
import { SectionStampNav } from "../components/stampNav/SectionStampNav";
import { sectionRegistry } from "./sectionRegistry";

export function SectionRenderer() {
  const enabledSections = siteConfig.sections.filter((section) => section.enabled);
  const heroEnabled = enabledSections.some((section) => section.id === "hero");
  const showStampNav = siteConfig.stampNav?.enabled && siteConfig.stampNav.items.length > 0;
  let stampNavRendered = false;

  return (
    <>
      {enabledSections.map((section, index) => {
        const Component = sectionRegistry[section.id];
        const shouldRenderStampNavAfterHero = showStampNav && section.id === "hero";
        const shouldRenderStampNavBeforeFirstContent =
          showStampNav &&
          !stampNavRendered &&
          !heroEnabled &&
          index === 0;

        if (shouldRenderStampNavAfterHero || shouldRenderStampNavBeforeFirstContent) {
          stampNavRendered = true;
        }

        return (
          <Fragment key={section.id}>
            {shouldRenderStampNavBeforeFirstContent ? (
              <SectionStampNav items={siteConfig.stampNav!.items} />
            ) : null}
            <Component />
            {shouldRenderStampNavAfterHero ? (
              <SectionStampNav items={siteConfig.stampNav!.items} />
            ) : null}
          </Fragment>
        );
      })}
    </>
  );
}
