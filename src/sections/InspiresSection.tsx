import { inspires } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";
import { LinkCard } from "../components/ui/LinkCard";

export function InspiresSection() {
  return (
    <SectionShell id="inspires" title={inspires.title} density="tight">
      <ul className="m-0 list-none divide-y divide-[var(--hairline)] p-0">
        {inspires.items.map((item) => (
          <li key={item.title} className="py-6 first:pt-0 last:pb-0">
            <LinkCard title={item.title} description={item.description} href={item.href} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
