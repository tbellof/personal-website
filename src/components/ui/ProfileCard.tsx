interface ProfileCardProps {
  avatarSrc: string;
  avatarAlt: string;
  greeting: string;
  accentWord?: string;
  roleLine?: string;
}

export function ProfileCard({
  avatarSrc,
  avatarAlt,
  greeting,
  accentWord,
  roleLine,
}: ProfileCardProps) {
  const renderGreeting = () => {
    if (accentWord && greeting.includes(accentWord)) {
      const [before, after] = greeting.split(accentWord);
      return (
        <>
          {before}
          <span className="font-display font-normal">{accentWord}</span>
          {after}
        </>
      );
    }
    return greeting;
  };

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
      <img
        src={avatarSrc}
        alt={avatarAlt}
        width={96}
        height={96}
        className="h-20 w-20 shrink-0 rounded-lg border border-every-border object-cover sm:h-24 sm:w-24"
      />
      <div className="min-w-0">
        {roleLine ? (
          <p className="font-mono-ui m-0 mb-3 text-xs font-normal uppercase tracking-[0.14em] text-every-muted">
            {roleLine}
          </p>
        ) : null}
        <h1 className="text-display m-0 text-every-text">{renderGreeting()}</h1>
      </div>
    </div>
  );
}
