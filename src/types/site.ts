export type ThemeMode = "dark" | "light" | "system";

export type SectionId =
  | "hero"
  | "about"
  | "problems"
  | "building"
  | "publications"
  | "freeValue"
  | "inspires"
  | "footer";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  navLabel: string | null;
}

export interface StampNavItem {
  sectionId: SectionId;
  label: string;
  illustrationSrc: string;
  backgroundColor: string;
}

export interface StampNavConfig {
  enabled: boolean;
  items: StampNavItem[];
}

export interface SiteConfig {
  defaultTheme: ThemeMode;
  stampNav?: StampNavConfig;
  sections: SectionConfig[];
}
