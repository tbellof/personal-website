import "../styles/publications.css";

type Platform = "substack" | "linkedin";

const publications: {
  href: string;
  platform: Platform;
  title: string;
  excerpt: string;
  date: string;
}[] = [
  {
    href: "https://substack.com/@thiagobellof",
    platform: "substack",
    title: "The dirty work of PM: why most discovery is just confirmation bias in disguise",
    excerpt:
      "The research looks thorough. The interviews were well-structured. But somehow the team still built the wrong thing. Here's why — and what to do instead.",
    date: "May 2026",
  },
  {
    href: "https://linkedin.com/in/thiagobellof",
    platform: "linkedin",
    title: "I built this site with AI in a week. Here's the full process.",
    excerpt:
      "Brief to live site using Cursor, Claude, and a design spec as the source of truth. Every decision documented, every command shared.",
    date: "May 2026",
  },
  {
    href: "https://substack.com/@thiagobellof",
    platform: "substack",
    title: "Roadmaps are not plans. They're bets. Here's how I make mine.",
    excerpt:
      "Most roadmaps fail because they pretend to know the future. The best ones make the uncertainty explicit and sequence around it.",
    date: "Apr 2026",
  },
  {
    href: "https://linkedin.com/in/thiagobellof",
    platform: "linkedin",
    title: "How I use Claude as a thought partner for every major product decision",
    excerpt:
      "Not for writing. Not for summaries. For stress-testing assumptions, running pre-mortems, and finding the holes in my own reasoning.",
    date: "Apr 2026",
  },
];

function SubstackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PlatformIcon({ platform }: { platform: Platform }) {
  const label = platform === "substack" ? "Substack" : "LinkedIn";
  return (
    <span className={`pub-platform-icon ${platform}`}>
      {platform === "substack" ? <SubstackIcon /> : <LinkedInIcon />}
      {label}
    </span>
  );
}

export function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <h2 className="section-title">// writing</h2>
        <div className="pub-grid">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-card"
            >
              <div className="pub-thumb">cover image</div>
              <h3>{pub.title}</h3>
              <p className="pub-excerpt">{pub.excerpt}</p>
              <div className="pub-meta">
                <span className="pub-date">{pub.date}</span>
                <PlatformIcon platform={pub.platform} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
