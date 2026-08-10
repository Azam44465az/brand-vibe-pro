interface ScoobieIconProps {
  className?: string;
  fill?: string;
}

export function ScoobieIcon({ className = "h-4 w-4", fill = "currentColor" }: ScoobieIconProps) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden="true">
      <path
        fill={fill}
        d="M336,301.3c-27.5,26.4-117.6,86.4-140.3,101.4c-2.9,1.9-6.8,1.2-8.9-1.7h0c-2.1-3-1.4-7.2,1.7-9.2l54.9-36
	c3.7-2.5,4.8-7.5,2.3-11.2l0,0c-2.5-3.7-7.5-4.8-11.2-2.3l-61.1,40.1l-0.1-0.2l-27.6,18.1c-3.7,2.5-8.8,1.4-11.2-2.3v0
	c-2.5-3.7-1.4-8.8,2.3-11.2l27.1-17.8l0,0l58.8-38.6c3.7-2.5,4.8-7.5,2.3-11.2l0,0c-2.5-3.7-7.5-4.8-11.2-2.3l-53.6,35.2
	c-3.2,2.1-7.5,1.3-9.7-1.8l0,0c-2.4-3.4-1.5-8,2-10.2c26.4-16.4,125.1-78.2,143.5-95.8c5.2-5,4.3-8.1,2.6-9.7
	c-13.3-13-87.3,60.1-130.2,18.1c-21.8-21.3-35-58.8,11.3-106.5c31.2-30,65.5-49.7,65.5-49.7l44.4,62.3c0,0-49.1,24.7-70.3,45.1
	c-5.2,5-4.3,8.1-2.6,9.7c12.6,12.3,87.4-60.1,130.2-18.1C368.7,216.5,381.9,254,336,301.3z"
      />
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
