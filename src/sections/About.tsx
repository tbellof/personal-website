import "../styles/about.css";

const stats = [
  { label: "Currently", value: "Head of Products" },
  { label: "Focus", value: "Fintech, AI, embedded finance" },
  { label: "Writing", value: "The Lighthouse Project" },
  { label: "From", value: "São Luís, Maranhão, Brazil" },
  { label: "Based in", value: "Belo Horizonte, MG, Brazil" },
  { label: "Interests", value: "Product strategy, design, AI" },
] as const;

export function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">// about</h2>
        <div className="about-grid">
          <div className="about-prose">
            <p>
              I&apos;ve spent the last decade leading product teams in fast-moving companies —
              from early-stage startups to scaled platforms. I care about shipping things that
              matter, not about process theater.
            </p>
            <p>
              My edge is in the <strong>dirty work of PM</strong>: the discovery that actually
              challenges assumptions, the roadmap that holds up to engineering constraints, the
              alignment call that doesn&apos;t waste everyone&apos;s time.
            </p>
            <p>
              I write about product, AI workflows, and building in public on Substack. I&apos;m
              building this site the same way I build products — in the open, iterating fast.
            </p>
          </div>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-row">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
