import { freeValue } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";
import { CopyBlock } from "../components/ui/CopyBlock";

export function FreeValueSection() {
  return (
    <SectionShell id="freeValue" title={freeValue.title}>
      <p className="prose-measure m-0 mb-8 text-base leading-relaxed text-every-muted">{freeValue.intro}</p>
      <div className="flex flex-col gap-6">
        {freeValue.commands.map((command) => (
          <CopyBlock key={command.title} title={command.title} body={command.body} />
        ))}
      </div>
    </SectionShell>
  );
}
