export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const color = inverted ? "#FFFFFF" : "#0F0F0F";

  return (
    <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
      {/* Mark: two stacked, offset rectangles — representing "building" and scale */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Bottom rectangle */}
        <rect x="4" y="14" width="26" height="16" rx="3" fill={color} />
        {/* Top rectangle, offset right */}
        <rect x="10" y="4" width="20" height="14" rx="3" fill={color} opacity="0.45" />
        {/* Accent line */}
        <rect x="4" y="14" width="6" height="2" rx="1" fill={inverted ? "#0F0F0F" : "#FFFFFF"} />
      </svg>

      {/* Wordmark */}
      <span
        className="font-bold text-[18px] tracking-[-0.02em] leading-none"
        style={{ color }}
      >
        Gigadroom
      </span>
    </a>
  );
}
