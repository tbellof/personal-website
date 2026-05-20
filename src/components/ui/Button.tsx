import type { ReactNode } from "react";

type ButtonVariant = "primary" | "chip" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "font-mono-ui min-h-12 px-6 text-[13px] font-normal rounded-md border border-[rgba(255,248,238,0.2)] bg-every-cta text-every-cta-text cta-glow transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[var(--primary-2)] active:translate-y-px",
  chip:
    "font-mono-ui inline-flex px-2.5 py-1.5 text-[11.5px] font-normal rounded border border-every-border bg-transparent text-every-muted transition-[border-color,color] duration-[180ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-every-muted hover:text-every-text",
  ghost:
    "bg-transparent text-every-muted text-sm p-0 border-none hover:text-every-text transition-colors duration-[120ms]",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${variantClasses[variant]} inline-flex items-center justify-center cursor-pointer no-underline ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
