interface SubstackEmbedProps {
  publicationUrl: string;
}

export function SubstackEmbed({ publicationUrl }: SubstackEmbedProps) {
  const embedSrc = publicationUrl.replace(/\/$/, "") + "/embed";

  return (
    <div className="surface-flat mx-auto mb-12 max-w-md overflow-hidden">
      <iframe
        src={embedSrc}
        width="100%"
        height="320"
        frameBorder="0"
        scrolling="no"
        title="Subscribe on Substack"
        className="block w-full border-0"
      />
    </div>
  );
}
