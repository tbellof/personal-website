export const hero = {
  greeting: "Hey 👋 I'm Thiago Bello",
  accentWord: "Bello",
  roleLine: "Product leader · Fintech · AI",
  lede: "I help product teams turn complex financial products into clear bets — and I build in public while doing it.",
  avatarSrc: "/fotos/hero.jpeg",
  avatarAlt: "Thiago Bello",
};

export const about = {
  title: "About me",
  body: [
    "Product leader with 15+ years building and scaling fintech products in Brazil — from zero-to-one launches to teams of 40+ across product, design, and engineering.",
    "Recently led embedded insurance and benefits at scale. Now exploring what's next: leadership roles, advisory, and shipping tools that make PM work more legible.",
  ],
};

export const problems = {
  title: "Problems I solve",
  items: [
    {
      title: "Turning strategy into shipped product",
      description:
        "Aligning exec intent, customer reality, and engineering constraints when the path isn't obvious.",
    },
    {
      title: "Scaling distribution in regulated markets",
      description:
        "Embedded finance, insurance, and partnerships — where compliance and growth have to coexist.",
    },
    {
      title: "Building product orgs that deliver",
      description:
        "Hiring, rituals, and decision systems that keep teams moving without burning out.",
    },
  ],
};

export const building = {
  title: "What I'm building",
  items: [
    {
      title: "Personal hub (this site)",
      description: "A minimal home for writing, commands, and work-in-progress.",
      detailHref: "https://github.com/tbellof/personal-website",
      detailLabel: "Read more →",
    },
    {
      title: "AI product sense lab",
      description: "Hands-on experiments with agents, RAG, and product workflows.",
      detailHref: "https://thelighthouseproject.substack.com/",
      detailLabel: "Read more →",
    },
  ],
};

export const publications = {
  title: "Publications",
  substackUrl: "https://thelighthouseproject.substack.com/",
  defaultAuthorName: "Thiago Bello",
  defaultAuthorAvatarSrc: "/images/avatar.svg",
  posts: [
    {
      title: "What product leaders owe their teams in the AI era",
      excerpt:
        "How to set direction when the toolchain changes every quarter — and why clarity beats hype.",
      thumbnailSrc: "/images/posts/placeholder.svg",
      date: "Mar 2026",
      href: "https://thelighthouseproject.substack.com/",
    },
    {
      title: "Embedded insurance at scale: lessons from the field",
      excerpt:
        "Distribution mechanics, regulatory guardrails, and the metrics that actually matter.",
      thumbnailSrc: "/images/posts/placeholder.svg",
      date: "Feb 2026",
      href: "https://thelighthouseproject.substack.com/",
    },
    {
      title: "Building AI product sense without a CS degree",
      excerpt:
        "A hands-on path for PMs who need to make technical bets with confidence.",
      thumbnailSrc: "/images/posts/placeholder.svg",
      date: "Jan 2026",
      href: "https://thelighthouseproject.substack.com/",
    },
    {
      title: "The Lighthouse Project — why I'm writing in public",
      excerpt:
        "Essays on product, fintech, and building with AI — a home for long-form thinking.",
      thumbnailSrc: "/images/posts/placeholder.svg",
      date: "Dec 2025",
      href: "https://thelighthouseproject.substack.com/",
    },
  ],
};

export const freeValue = {
  title: "Free value",
  intro: "Commands and prompts I use weekly — copy and adapt.",
  commands: [
    {
      title: "/explore — frame a product problem",
      body: `You are a product thinking partner. Given my context below, help me explore:
1. Problem statement (who, pain, why now)
2. Constraints and assumptions
3. 2–3 solution directions with tradeoffs
4. What I'd need to validate first

Context:`,
    },
    {
      title: "Storybank drill — earned secret under pressure",
      body: `I'm preparing for a senior product interview. Ask me one behavioral question about deploying an earned secret under tactical pressure. After I answer:
- Score clarity, structure, and specificity (1–5 each)
- One thing to cut
- One metric or detail to add`,
    },
    {
      title: "Decisions log template",
      body: `## Decision — [date]
**Decision:** 
**Why:** 
**Alternatives considered:** 
**Revisit when:** `,
    },
  ],
};

export const inspires = {
  title: "What inspires me",
  items: [
    {
      title: "Every",
      description: "Editorial product writing and design discipline.",
      href: "https://every.to/",
    },
    {
      title: "Zevi Arnovitz",
      description: "Building in public with copy-paste AI workflows.",
      href: "https://zeviarnovitz.com/",
    },
    {
      title: "Linear",
      description: "Opinionated tools that respect craft.",
      href: "https://linear.app/",
    },
  ],
};

export const footer = {
  ctaLabel: "Subscribe on Substack",
  ctaHref: "https://thelighthouseproject.substack.com/",
  email: "mailto:hello@thiagobello.com",
  whatsapp: "https://wa.me/5511999999999",
  copyright: `© ${new Date().getFullYear()} Thiago Bello`,
};
