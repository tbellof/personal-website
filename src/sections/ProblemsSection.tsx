import { problems } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";
import { SurfaceCard } from "../components/ui/SurfaceCard";

export function ProblemsSection() {
  return (
    <SectionShell id="problems" title={problems.title}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.items.map((item) => (
          <SurfaceCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </SectionShell>
  );
}
