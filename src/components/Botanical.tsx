type Props = {
  className?: string;
  flip?: boolean;
};

export default function Botanical({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M30 180 Q 60 120, 110 70 T 180 20" />
        <path d="M48 152 q -14 -4 -22 -16 q 14 -2 26 8 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M70 122 q -16 -2 -26 -16 q 16 -4 30 6 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M96 92 q -16 0 -28 -14 q 16 -6 32 4 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M124 64 q -16 2 -30 -10 q 14 -10 32 -2 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M60 168 q 6 -14 22 -20" />
        <path d="M86 138 q 6 -14 24 -20" />
        <path d="M112 108 q 8 -14 26 -18" />
        <path d="M140 78 q 8 -12 28 -14" />
      </g>
    </svg>
  );
}
