import "../styles/problems.css";

const problems = [
  {
    number: "01",
    title: "Discovery that actually challenges assumptions",
    description:
      "Teams that research to confirm, not to learn. I build discovery loops that surface uncomfortable truths early, before they become expensive.",
  },
  {
    number: "02",
    title: "Roadmaps that hold up to scrutiny",
    description:
      "Beautiful decks that die in sprint planning. I work from constraints first — engineering capacity, tech debt, dependencies — then sequence backward.",
  },
  {
    number: "03",
    title: "Cross-functional alignment without the theater",
    description:
      "Alignment meetings that just spawn more meetings. I build shared context that makes decisions happen at the right level, fast.",
  },
  {
    number: "04",
    title: "Shipping velocity without quality debt",
    description:
      "Move fast and break things — until you can't fix them. I help teams find the threshold where speed and quality reinforce each other.",
  },
] as const;

function ProblemMetrics() {
  return (
    <>
      <div className="problem-metric">
        <div className="problem-metric-value">+0%</div>
        <div className="problem-metric-label">your metric here</div>
      </div>
      <div className="problem-metric">
        <div className="problem-metric-value">+0%</div>
        <div className="problem-metric-label">your metric here</div>
      </div>
    </>
  );
}

export function Problems() {
  return (
    <section id="problems">
      <div className="container">
        <h2 className="section-title">// problems I solve</h2>
        <div className="problems-grid">
          {problems.map((problem) => (
            <div key={problem.number} className="problem-card">
              <div className="problem-number">{problem.number}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
              <div className="problem-metrics">
                <ProblemMetrics />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
