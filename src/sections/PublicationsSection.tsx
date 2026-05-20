import { publications } from "../content/placeholders";
import { SectionShell } from "../components/ui/SectionShell";
import { SubstackEmbed } from "../components/ui/SubstackEmbed";
import { PublicationGrid } from "../components/ui/PublicationGrid";

export function PublicationsSection() {
  const posts = publications.posts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    thumbnailSrc: post.thumbnailSrc,
    date: post.date,
    href: post.href,
    authorName: publications.defaultAuthorName,
    authorAvatarSrc: publications.defaultAuthorAvatarSrc,
  }));

  return (
    <SectionShell id="publications" title={publications.title}>
      <SubstackEmbed publicationUrl={publications.substackUrl} />
      <PublicationGrid posts={posts} />
    </SectionShell>
  );
}
