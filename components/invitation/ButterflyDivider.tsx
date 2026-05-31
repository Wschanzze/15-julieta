interface ButterflyDividerProps {
  flipped?: boolean
}

export default function ButterflyDivider({ flipped = false }: ButterflyDividerProps) {
  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-visible py-4 ${flipped ? "scale-y-[-1]" : ""}`}
      aria-hidden="true"
    >
      {/* Botanical SVG branch with leaves */}
      <svg
        viewBox="0 0 500 60"
        className="w-full max-w-lg h-14 opacity-60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central gold stem */}
        <line x1="60" y1="50" x2="440" y2="50" stroke="#b8962e" strokeWidth="0.8" opacity="0.5" />

        {/* Left branch */}
        <line x1="110" y1="50" x2="85" y2="28" stroke="#b8962e" strokeWidth="0.7" opacity="0.6" />
        <line x1="150" y1="50" x2="130" y2="22" stroke="#b8962e" strokeWidth="0.7" opacity="0.6" />
        <line x1="195" y1="50" x2="175" y2="30" stroke="#b8962e" strokeWidth="0.7" opacity="0.5" />

        {/* Right branch */}
        <line x1="390" y1="50" x2="415" y2="28" stroke="#b8962e" strokeWidth="0.7" opacity="0.6" />
        <line x1="350" y1="50" x2="370" y2="22" stroke="#b8962e" strokeWidth="0.7" opacity="0.6" />
        <line x1="305" y1="50" x2="325" y2="30" stroke="#b8962e" strokeWidth="0.7" opacity="0.5" />

        {/* Leaves left */}
        <ellipse cx="83" cy="24" rx="10" ry="6" fill="#4a6e4a" opacity="0.5" transform="rotate(-30 83 24)" />
        <ellipse cx="128" cy="18" rx="12" ry="7" fill="#4a6e4a" opacity="0.45" transform="rotate(-20 128 18)" />
        <ellipse cx="173" cy="26" rx="9" ry="5" fill="#4a6e4a" opacity="0.4" transform="rotate(-35 173 26)" />

        {/* Leaves right */}
        <ellipse cx="417" cy="24" rx="10" ry="6" fill="#4a6e4a" opacity="0.5" transform="rotate(30 417 24)" />
        <ellipse cx="372" cy="18" rx="12" ry="7" fill="#4a6e4a" opacity="0.45" transform="rotate(20 372 18)" />
        <ellipse cx="327" cy="26" rx="9" ry="5" fill="#4a6e4a" opacity="0.4" transform="rotate(35 327 26)" />

        {/* Small buds left */}
        <circle cx="87" cy="22" r="2.5" fill="#ffffff" stroke="#4a6e4a" strokeWidth="0.8" opacity="0.6" />
        <circle cx="132" cy="15" r="2.5" fill="#ffffff" stroke="#4a6e4a" strokeWidth="0.8" opacity="0.6" />

        {/* Small buds right */}
        <circle cx="413" cy="22" r="2.5" fill="#ffffff" stroke="#4a6e4a" strokeWidth="0.8" opacity="0.6" />
        <circle cx="368" cy="15" r="2.5" fill="#ffffff" stroke="#4a6e4a" strokeWidth="0.8" opacity="0.6" />

        {/* Center ornament */}
        <circle cx="250" cy="50" r="3" fill="#b8962e" opacity="0.5" />
        <circle cx="250" cy="50" r="1.5" fill="#b8962e" opacity="0.8" />
        <line x1="220" y1="50" x2="230" y2="50" stroke="#b8962e" strokeWidth="0.8" opacity="0.6" />
        <line x1="270" y1="50" x2="280" y2="50" stroke="#b8962e" strokeWidth="0.8" opacity="0.6" />

        {/* Extra small leaves center-ish */}
        <ellipse cx="215" cy="44" rx="7" ry="4" fill="#4a6e4a" opacity="0.35" transform="rotate(-25 215 44)" />
        <ellipse cx="285" cy="44" rx="7" ry="4" fill="#4a6e4a" opacity="0.35" transform="rotate(25 285 44)" />
      </svg>
    </div>
  )
}
