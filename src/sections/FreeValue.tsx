import { useCallback, useState } from "react";
import "../styles/freevalue.css";

const commands = [
  {
    id: "discovery",
    emoji: "🔍",
    title: "Discovery interview framework",
    desc: "Structure a 45-min interview that surfaces real problems",
    badge: "discovery",
    body: `## Role
You are a product discovery coach helping me prepare for and debrief a 45-minute customer interview.

## Before the interview
Ask me:
- Who I'm interviewing (role, context, relationship to the problem)
- What hypothesis I'm testing (one sentence)
- What I must learn vs. what would be "nice to know"

## Interview structure (45 min)
Minute 0–5: Context — their role, recent workflow, what "good" looks like
Minute 5–20: Problem exploration — last time the pain happened; what they did; cost of the status quo
Minute 20–35: Solution space — what they've tried; workarounds; buying/adoption criteria
Minute 35–42: Prioritization — what would change their behavior; blockers
Minute 42–45: Close — anything I didn't ask; permission to follow up

## Rules for me
- Don't pitch. Don't lead. Ask "tell me more about that" at least 3 times.
- Capture exact quotes for decisions and edivs.
- Note surprises and contradictions.

## After the interview
Help me synthesize:
1. Verbatim quotes (3–5)
2. Jobs / pains / gains
3. What invalidated or strengthened my hypothesis
4. Next experiment

My context:
[Paste who you're interviewing and your hypothesis here]`,
  },
  {
    id: "roadmap",
    emoji: "🗺️",
    title: "Roadmap sequencing",
    desc: "Sequence your backlog against real constraints, not just value",
    badge: "roadmap",
    body: `## Role
You are a senior PM helping me sequence a roadmap against real constraints—not a flat "value vs effort" matrix.

## I will provide
- Team capacity (people × weeks per quarter)
- Hard deadlines (regulatory, contractual, events)
- Dependencies (tech debt, platform, other teams)
- Top outcomes we're accountable for (metrics or KR)

## Your job
1. Challenge any item that isn't a bet with a falsifiable outcome.
2. Bucket work into: Now (this quarter), Next, Later, and Never (with reason).
3. For "Now": sequence in order of dependency → risk reduction → value, explaining tradeoffs.
4. Flag capacity overload; suggest what to cut or defer with explicit cost.
5. Output a one-page roadmap narrative executives can read in 5 minutes.

## Output format
| Order | Initiative | Bet / outcome | Why now | Main risk | Owner |

## Constraints-first rules
- No item in "Now" without a clear "done" definition.
- If two items compete for the same team, pick one and document the loser.

My inputs:
[Paste backlog, capacity, and constraints here]`,
  },
  {
    id: "prd",
    emoji: "📄",
    title: "PRD first draft",
    desc: "From problem statement to reviewable doc in one pass",
    badge: "prd",
    body: `## Role
You are a PM writing partner. Turn my problem statement into a reviewable PRD draft—not a template dump.

## I will provide
- Problem statement (who, pain, evidence)
- Goal / success metrics
- Scope boundaries (in / out)
- Known constraints

## Produce these sections
1. **Summary** (5 sentences max)
2. **Problem & opportunity** (evidence, why now)
3. **Goals & non-goals**
4. **Users & use cases** (primary + edge)
5. **Requirements** (must / should / could) with acceptance criteria
6. **Experience notes** (flows, not pixel specs)
7. **Dependencies & risks**
8. **Rollout & metrics**
9. **Open questions** (decisions needed, owners)

## Rules
- Flag assumptions as [ASSUMPTION] and missing data as [TBD].
- Prefer measurable acceptance criteria over adjectives.
- Keep v1 scope ruthlessly small; list explicit cuts.

My inputs:
[Paste problem statement and context here]`,
  },
  {
    id: "alignment",
    emoji: "🤝",
    title: "Stakeholder alignment memo",
    desc: "Turn a contested decision into a memo everyone can engage with",
    badge: "alignment",
    body: `## Role
You are helping me write a decision memo that turns a contested product call into something eng and design can engage with—without another alignment meeting.

## I will provide
- The decision (one sentence)
- Options considered (2–4)
- Stakeholders and their concerns
- What happens if we don't decide

## Memo structure
**Title:** Decision: [X]
**Status:** Proposed | Approved | Superseded
**Decision maker:**
**Date:**

### Context (½ page max)
What triggered this; what's at stake.

### Options
| Option | Pros | Cons | Cost / time |

### Recommendation
What we should do and why—linked to strategy and metrics.

### Dissent & risks
What we're accepting; who disagrees and what would change their mind.

### Next steps
Owners, dates, how we'll know it worked.

## Tone
Direct, no jargon. Every paragraph should help someone say yes, no, or "I need X before yes."

My inputs:
[Paste decision context here]`,
  },
] as const;

function CommandBlock({
  command,
  isOpen,
  isCopied,
  onToggle,
  onCopy,
}: {
  command: (typeof commands)[number];
  isOpen: boolean;
  isCopied: boolean;
  onToggle: () => void;
  onCopy: (e: React.MouseEvent) => void;
}) {
  return (
    <div className={`command-block${isOpen ? " open" : ""}`}>
      <div
        className="command-header"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div className="command-header-left">
          <span className="command-emoji">{command.emoji}</span>
          <div>
            <div className="command-title">{command.title}</div>
            <div className="command-desc">{command.desc}</div>
          </div>
        </div>
        <div className="command-header-right">
          <span className="command-type-badge">{command.badge}</span>
          <button
            type="button"
            className={`command-copy-btn${isCopied ? " copied" : ""}`}
            onClick={onCopy}
          >
            {isCopied ? "✓ Copied!" : "Copy"}
          </button>
          <span className="command-chevron" aria-hidden="true">
            ▾
          </span>
        </div>
      </div>
      <div className="command-body-wrap">
        <div className="command-body-inner">
          <div className="command-bar">
            <div className="command-bar-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="command-bar-label">prompt · markdown</span>
          </div>
          <pre className="command-body">{command.body}</pre>
        </div>
      </div>
    </div>
  );
}

export function FreeValue() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleCopy = useCallback(
    async (e: React.MouseEvent, id: string, body: string) => {
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(body);
        setCopiedId(id);
        window.setTimeout(() => setCopiedId(null), 2000);
      } catch {
        setCopiedId(null);
      }
    },
    [],
  );

  return (
    <section id="free-value">
      <div className="container">
        <div className="fv-header">
          <h2 className="section-title">// Free Value I Provide</h2>
          <span className="fv-subtitle">Copy &amp; use in your LLM of choice</span>
        </div>
        <div className="commands-grid">
          {commands.map((command) => (
            <CommandBlock
              key={command.id}
              command={command}
              isOpen={openIds.has(command.id)}
              isCopied={copiedId === command.id}
              onToggle={() => toggle(command.id)}
              onCopy={(e) => handleCopy(e, command.id, command.body)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
