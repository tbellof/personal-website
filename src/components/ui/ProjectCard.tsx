interface ProjectCardProps {
  title: string;
  description: string;
  detailHref: string;
  detailLabel?: string;
}

export function ProjectCard({
  title,
  description,
  detailHref,
  detailLabel = "Read more →",
}: ProjectCardProps) {
  return (
    <article className="surface-flat flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="m-0 text-[19px] font-medium leading-[1.4] text-every-text">{title}</h3>
        <a
          href={detailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ui shrink-0 text-[11.5px] text-every-muted no-underline transition-colors duration-[180ms] hover:text-every-text"
        >
          {detailLabel}
        </a>
      </div>
      <p className="m-0 mt-3 text-base leading-relaxed text-every-muted">{description}</p>
    </article>
  );
}
