import { hero } from "../content/placeholders";
import { ProfileCard } from "../components/ui/ProfileCard";
import { SectionShell } from "../components/ui/SectionShell";

export function HeroSection() {
  return (
    <SectionShell id="hero" density="airy" className="border-t-0">
      <ProfileCard
        avatarSrc={hero.avatarSrc}
        avatarAlt={hero.avatarAlt}
        greeting={hero.greeting}
        accentWord={hero.accentWord}
        roleLine={hero.roleLine}
      />
      <p className="prose-measure m-0 mt-8 text-lg leading-relaxed text-every-muted md:mt-10">{hero.lede}</p>
    </SectionShell>
  );
}
