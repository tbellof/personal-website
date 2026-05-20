import { footer, hero } from "../content/placeholders";
import "../styles/hero.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/thiagobellof";

const workedLogos = [
  { label: "Inter", initials: "In", color: "#ff7a00" },
  { label: "Will Bank", initials: "WB", color: "#ffe600" },
  { label: "Wiz", initials: "Wz", color: "#7c3aed" },
  { label: "Ambev", initials: "Ab", color: "#003c7e" },
] as const;

const studiedLogos = [
  { label: "UEMA", initials: "UE", color: "#006633" },
  { label: "FDC MBA", initials: "FD", color: "#1e3a5f" },
  { label: "Reforge", initials: "Re", color: "#111111" },
  { label: "Maven", initials: "Mv", color: "#e8442a" },
] as const;

function TrajLogo({
  label,
  initials,
  color,
}: {
  label: string;
  initials: string;
  color: string;
}) {
  return (
    <span className="traj-logo">
      <svg
        className="traj-logo-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <rect width="16" height="16" rx="4" fill={color} />
        <text x="8" y="11" textAnchor="middle">
          {initials}
        </text>
      </svg>
      {label}
    </span>
  );
}

function TrajRow({
  label,
  logos,
}: {
  label: string;
  logos: readonly { label: string; initials: string; color: string }[];
}) {
  return (
    <div className="traj-row">
      <span className="traj-label">{label}</span>
      <div className="traj-logos">
        {logos.map((logo) => (
          <TrajLogo key={logo.label} {...logo} />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-lede">
            <h1 className="display">
              <span className="greeting">Hey 👋 I&apos;m</span>
              <br />
              Thiago Bello.
            </h1>
            <p>{hero.lede}</p>
            <div className="hero-trajectory">
              <TrajRow label="Worked in tech @" logos={workedLogos} />
              <TrajRow label="Studied @" logos={studiedLogos} />
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-photo" aria-label={hero.avatarAlt}>
              <img src={hero.avatarSrc} alt="" />
            </div>
            <div className="hero-contact">
              <a
                href={LINKEDIN_URL}
                className="hero-contact-link linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.25A1.75 1.75 0 1 1 6.5 4.75a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.6c0-1.1-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42V19h-3v-9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.6 2 3.6 4.59V19Z" />
                </svg>
              </a>
              <a href={footer.email} className="hero-contact-link email" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m3 7 9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={footer.whatsapp}
                className="hero-contact-link whatsapp"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
