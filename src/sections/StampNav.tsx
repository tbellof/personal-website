import "../styles/stampnav.css";

const stamps = [
  { dotColor: "#3d8b6e", label: "About me", href: "#about" },
  { dotColor: "#4a7cbf", label: "Problems I solve", href: "#problems" },
  { dotColor: "#7b5ea7", label: "What I'm building", href: "#building" },
  { dotColor: "#b85c4a", label: "My writing", href: "#publications" },
  { dotColor: "#d4843a", label: "Free value I provide", href: "#free-value" },
  { dotColor: "#c9a227", label: "What inspires me", href: "#inspires" },
] as const;

export function StampNav() {
  return (
    <div id="stamp-nav">
      <div className="container">
        <nav className="stamps" aria-label="Sections">
          {stamps.map((stamp) => (
            <a key={stamp.href} href={stamp.href} className="stamp">
              <span
                className="stamp-dot"
                style={{ backgroundColor: stamp.dotColor }}
                aria-hidden="true"
              />
              {stamp.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
