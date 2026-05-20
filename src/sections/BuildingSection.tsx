import { building } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";
import { ProjectCard } from "../components/ui/ProjectCard";

export function BuildingSection() {
  return (
    <SectionShell id="building" title={building.title}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {building.items.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            detailHref={item.detailHref}
            detailLabel={item.detailLabel}
          />
        ))}
      </div>
    </SectionShell>
  );
}
