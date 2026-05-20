import { about } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";

export function AboutSection() {
  return (
    <SectionShell id="about" title={about.title}>
      <div className="prose-measure flex flex-col gap-5">
        {about.body.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 24)}
            className={`m-0 leading-relaxed ${
              index === 0 ? "text-[17px] text-every-text" : "text-base text-every-muted"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}
