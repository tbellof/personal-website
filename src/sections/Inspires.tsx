import { useState } from "react";
import "../styles/inspires.css";

const inspires = [
  {
    href: "https://twitter.com/shreyas",
    thumbRound: true,
    src: "https://pbs.twimg.com/profile_images/1478937607798071299/6DhAgv3J_400x400.jpg",
    fallback: "👤",
    type: "person",
    title: "Shreyas Doshi",
    description:
      "Frameworks that cut through PM complexity without making it feel simple.",
  },
  {
    href: "https://www.lennysnewsletter.com",
    thumbRound: true,
    src: "https://pbs.twimg.com/profile_images/1508832704030314500/aSHsJNVw_400x400.jpg",
    fallback: "👤",
    type: "person",
    title: "Lenny Rachitsky",
    description:
      "Making product craft concrete and accessible for a new generation of PMs.",
  },
  {
    href: "https://zeviarnovitz.com",
    thumbRound: false,
    src: "https://zeviarnovitz.com/favicon.ico",
    fallback: "🌐",
    type: "site / design",
    title: "zeviarnovitz.com",
    description:
      "Proof that a PM can build something beautiful in public. Structure I admire.",
  },
  {
    href: "https://every.to",
    thumbRound: false,
    src: "https://every.to/favicon.ico",
    fallback: "📰",
    type: "publication",
    title: "Every.to",
    description:
      "Editorial rigor applied to technology and work. One of the few newsletters I actually read.",
  },
  {
    href: "https://basecamp.com/shapeup",
    thumbRound: false,
    src: "https://basecamp.com/assets/favicon-32x32-77b0b23e3eb20b86ab81d7614aabf07b6a8ebbc6f9c50e3d76a4c8cdfbc3ef26.png",
    fallback: "📖",
    type: "book",
    title: "Shape Up",
    description:
      "The most honest thing written about how software actually gets built under time pressure.",
  },
  {
    href: "https://cursor.com",
    thumbRound: false,
    src: "https://cursor.com/favicon.ico",
    fallback: "⚙️",
    type: "tool",
    title: "Cursor + Claude",
    description:
      "The first time AI tooling genuinely changed how I work, not just what I prompt.",
  },
] as const;

function InspireThumb({
  src,
  alt,
  fallback,
  round,
}: {
  src: string;
  alt: string;
  fallback: string;
  round: boolean;
}) {
  const [failed, setFailed] = useState(false);

  const className = round ? "inspire-thumb round" : "inspire-thumb";

  if (failed) {
    return (
      <div className={className} aria-hidden="true">
        {fallback}
      </div>
    );
  }

  return (
    <div className={className}>
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </div>
  );
}

export function Inspires() {
  return (
    <section id="inspires">
      <div className="container">
        <h2 className="section-title">// what inspires me</h2>
        <div className="inspires-grid">
          {inspires.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inspire-card"
            >
              <InspireThumb
                src={item.src}
                alt={item.title}
                fallback={item.fallback}
                round={item.thumbRound}
              />
              <div className="inspire-body">
                <div className="inspire-type">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
