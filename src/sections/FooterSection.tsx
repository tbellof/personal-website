import { footer } from "../content/placeholders";
import { ThemeToggle } from "../components/ThemeToggle";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="flex flex-col gap-8 border-t border-[var(--hairline)] py-12 md:py-16"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Button href={footer.ctaHref}>{footer.ctaLabel}</Button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <IconButton href={footer.email} label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </IconButton>
          <IconButton href={footer.whatsapp} label="WhatsApp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        </div>
      </div>
      <p className="m-0 text-sm text-every-caption">{footer.copyright}</p>
    </footer>
  );
}
