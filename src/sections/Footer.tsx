import { useTheme } from "../hooks/useTheme";
import "../styles/footer.css";

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polyline
        points="2,4 12,13 22,4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="8" y1="10" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="6" x2="8" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 10v8M12 14c0-2 1.5-4 4-4v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 9h20v12L12 15 2 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-name">Thiago Bello</div>
            <p>Product leader. Building in public.</p>
          </div>
          <div className="footer-links">
            <a
              href="mailto:thiago@thiagobello.com"
              className="footer-link"
              title="Email"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://linkedin.com/in/thiagobellof"
              className="footer-link"
              title="LinkedIn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://substack.com/@thiagobellof"
              className="footer-link"
              title="Substack"
              aria-label="Substack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubstackIcon />
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="footer-link"
              title="WhatsApp"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
            <button
              type="button"
              id="theme-btn"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? "[ dark ]" : "[ light ]"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
