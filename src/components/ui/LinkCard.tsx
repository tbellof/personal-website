interface LinkCardProps {
  title: string;
  description: string;
  href?: string | null;
  meta?: string;
}

export function LinkCard({ title, description, href, meta }: LinkCardProps) {
  const content = (
    <>
      {meta ? (
        <p className="font-mono-ui m-0 mb-2 text-xs uppercase tracking-wider text-every-meta">{meta}</p>
      ) : null}
      <h3 className="m-0 text-[19px] font-medium text-every-text">{title}</h3>
      <p className="m-0 mt-3 text-base leading-relaxed text-every-muted">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex flex-col gap-0 bg-transparent text-inherit no-underline transition-colors duration-[120ms] hover:text-[var(--primary)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <article className="flex flex-col gap-0">{content}</article>;
}
