export interface PublicationGridCardProps {
  title: string;
  excerpt: string;
  thumbnailSrc: string;
  date: string;
  href: string;
  authorName: string;
  authorAvatarSrc: string;
}

export function PublicationGridCard({
  title,
  excerpt,
  thumbnailSrc,
  date,
  href,
  authorName,
  authorAvatarSrc,
}: PublicationGridCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col text-inherit no-underline transition-colors duration-[120ms] hover:text-[var(--primary)]"
    >
      <img
        src={thumbnailSrc}
        alt=""
        className="aspect-[4/3] w-full rounded-md border border-every-border object-cover"
        loading="lazy"
      />
      <h3 className="mt-5 mb-0 text-[19px] font-medium leading-[1.4] text-every-text group-hover:text-[var(--primary)]">
        {title}
      </h3>
      <p className="m-0 mt-3 line-clamp-4 text-base leading-relaxed text-every-muted">{excerpt}</p>
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2">
          <img
            src={authorAvatarSrc}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-full border border-every-border object-cover"
          />
          <span className="font-mono-ui text-xs uppercase tracking-wide text-every-meta">{authorName}</span>
        </div>
        <p className="m-0 mt-1 text-sm text-every-meta">{date}</p>
      </div>
    </a>
  );
}
