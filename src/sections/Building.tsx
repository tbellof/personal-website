import "../styles/building.css";

type BuildingStatus = "live" | "ongoing" | "evolving";

const buildingCards: {
  status: BuildingStatus;
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    status: "live",
    icon: "🌐",
    title: "This site",
    description:
      "A personal hub built in public — React + Vite, Cursor, Claude. Documenting every decision and workflow as a LinkedIn post series.",
  },
  {
    status: "ongoing",
    icon: "✍️",
    title: "The Lighthouse Project",
    description:
      "A Substack about product strategy, AI workflows, and the mechanics of building well. Essays for PMs who want to think more clearly.",
  },
  {
    status: "evolving",
    icon: "⚙️",
    title: "AI-assisted PM workflows",
    description:
      "A toolkit of prompts, commands, and workflows for product managers who want to use AI without the hype. Shared below, free to copy.",
  },
];

export function Building() {
  return (
    <section id="building">
      <div className="container">
        <h2 className="section-title">// what I&apos;m building</h2>
        <div className="building-grid">
          {buildingCards.map((card) => (
            <div
              key={card.title}
              className={`building-card ${card.status}`}
            >
              <div className="building-card-top">
                <div className="building-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <span className={`building-status ${card.status}`}>{card.status}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
