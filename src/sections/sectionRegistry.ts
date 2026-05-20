import type { ComponentType } from "react";
import type { SectionId } from "../types/site";
import { AboutSection } from "./AboutSection";
import { BuildingSection } from "./BuildingSection";
import { FooterSection } from "./FooterSection";
import { FreeValueSection } from "./FreeValueSection";
import { HeroSection } from "./HeroSection";
import { InspiresSection } from "./InspiresSection";
import { ProblemsSection } from "./ProblemsSection";
import { PublicationsSection } from "./PublicationsSection";

export const sectionRegistry: Record<SectionId, ComponentType> = {
  hero: HeroSection,
  about: AboutSection,
  problems: ProblemsSection,
  building: BuildingSection,
  publications: PublicationsSection,
  freeValue: FreeValueSection,
  inspires: InspiresSection,
  footer: FooterSection,
};
