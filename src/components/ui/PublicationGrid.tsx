import { PublicationGridCard, type PublicationGridCardProps } from "./PublicationGridCard";

interface PublicationGridProps {
  posts: PublicationGridCardProps[];
}

export function PublicationGrid({ posts }: PublicationGridProps) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
      {posts.map((post) => (
        <PublicationGridCard key={post.href + post.title} {...post} />
      ))}
    </div>
  );
}
