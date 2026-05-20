import { useState } from "react";
import { Button } from "./Button";

interface CopyBlockProps {
  title: string;
  body: string;
}

export function CopyBlock({ title, body }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="surface-flat relative p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="m-0 text-[19px] font-medium text-every-text">{title}</h3>
        <Button variant="chip" onClick={handleCopy} className="shrink-0">
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="font-mono-ui m-0 overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed text-every-muted">
        <code>{body}</code>
      </pre>
    </article>
  );
}
