interface ScoobieIconProps {
  className?: string;
  stroke?: string;
  eyes?: string;
  smile?: string;
}

export function ScoobieIcon({
  className = "h-4 w-4",
  stroke = "#FFFBF4",
  eyes = "#FFFBF4",
  smile = "#ABD4F2",
}: ScoobieIconProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="18" width="100" height="84" rx="26" stroke={stroke} strokeWidth="9" />
      <circle cx="45" cy="52" r="7" fill={eyes} />
      <circle cx="75" cy="52" r="7" fill={eyes} />
      <path d="M52 68 L72 78 L52 88 Z" fill={smile} />
    </svg>
  );
}

interface ScoobieWordmarkProps {
  className?: string;
  dotColor?: string;
}

export function ScoobieWordmark({ className = "", dotColor = "var(--primary-brand)" }: ScoobieWordmarkProps) {
  return (
    <span className={className}>
      scoobie<span style={{ color: dotColor }}>.</span>
    </span>
  );
}
