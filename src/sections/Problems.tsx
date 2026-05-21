import "../styles/problems.css";

const problems = [
  {
    number: "01",
    title: "Building something new in a market that isn't ready for it",
    description:
      "Zero-to-one in financial services means regulated environments, no existing playbook, and incumbents who'd rather you didn't succeed. I've done this more than once and know how to move fast without cutting corners that come back expensive.",
    metrics: [
      { value: "14 mo", label: "to 1M active policies (first in Brazil)" },
      { value: "R$300M+", label: "annual revenue from zero" },
    ],
  },
  {
    number: "02",
    title: "Distributing financial products at scale without a sales team",
    description:
      "The best distribution in fintech lives inside the product itself. I design offers that meet customers at the right moment in their journey — anchored to real intent, not banners and push notifications.",
    metrics: [
      { value: "~90%", label: "insurance revenue via in-journey cross-sell" },
      { value: "10+", label: "embedded initiatives shipped" },
    ],
  },
  {
    number: "03",
    title: "Making AI do something useful in a regulated product",
    description:
      "Most AI initiatives in financial services die in compliance or stall in a pilot. I know how to design for the regulatory constraints from day one, not as an afterthought, and still ship something that actually moves the needle.",
    metrics: [
      { value: "6.8x", label: "conversion lift (engaged users)" },
      { value: "91%", label: "answer satisfaction" },
    ],
  },
  {
    number: "04",
    title: "Personalizing at scale without losing relevance",
    description:
      "Moving from one-size-fits-all offers to 1:1 personalization for tens of millions of users is a product problem before it's a data problem. I've led the strategy, secured the cross-org buy-in, and seen it through to results.",
    metrics: [
      { value: "8x", label: "conversion improvement" },
      { value: "R$65M+", label: "cumulative revenue, 67% above budget" },
    ],
  },
  {
    number: "05",
    title: "Knowing when to stop growing and fix the foundation",
    description:
      "Growth that outpaces infrastructure is deferred cost, not progress. I've made the case to pause, fix what's broken, and restart — and I know how to bring the team and the business along for that call.",
    metrics: [
      { value: "86→99.5%", label: "core service availability" },
      { value: "9→1.6%", label: "contact rate (82% reduction)" },
    ],
  },
  {
    number: "06",
    title: "Building a product for customers that other products rejected",
    description:
      "Designing for underbanked users means positive unit economics can't be an afterthought — they have to be a constraint from day one. Getting there requires real creativity in the business model, not just the UX.",
    metrics: [
      { value: "NPV/CAC ≥ 1", label: "unit economics at day one" },
      { value: "+130%", label: "customer base growth" },
    ],
  },
  {
    number: "07",
    title: "Building and restructuring product teams under live pressure",
    description:
      "The team you need to ship v1 is rarely the team you need to scale it. I've built teams from zero while shipping, and restructured them mid-execution when the skill mix was wrong — without losing momentum.",
    metrics: [
      { value: "0→40+", label: "team built while launching 4 products in 12 mo" },
      { value: "2 qtrs", label: "to SLO targets after mid-flight restructure" },
    ],
  },
] as const;

function ProblemMetrics({
  metrics,
}: {
  metrics: readonly { value: string; label: string }[];
}) {
  return (
    <>
      {metrics.map((metric) => (
        <div key={metric.label} className="problem-metric">
          <div className="problem-metric-value">{metric.value}</div>
          <div className="problem-metric-label">{metric.label}</div>
        </div>
      ))}
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
                <ProblemMetrics metrics={problem.metrics} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
