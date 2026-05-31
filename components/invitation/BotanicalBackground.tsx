import Image from "next/image"

export default function BotanicalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base white background */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Top-left botanical corner */}
      <div className="absolute -top-8 -left-8 w-72 h-96 opacity-40">
        <Image
          src="/botanical-corner.png"
          alt=""
          fill
          className="object-contain object-top-left"
          sizes="288px"
        />
      </div>

      {/* Bottom-right botanical corner (flipped) */}
      <div className="absolute -bottom-8 -right-8 w-72 h-96 opacity-35" style={{ transform: "rotate(180deg)" }}>
        <Image
          src="/botanical-corner.png"
          alt=""
          fill
          className="object-contain object-top-left"
          sizes="288px"
        />
      </div>

      {/* Inline SVG botanical leaves scattered */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="40" rx="30" ry="60" fill="#4a6e4a" transform="rotate(-20 100 40)" />
        <ellipse cx="140" cy="80" rx="22" ry="45" fill="#4a6e4a" transform="rotate(15 140 80)" />
        <ellipse cx="70" cy="100" rx="18" ry="38" fill="#4a6e4a" transform="rotate(-35 70 100)" />
        <line x1="100" y1="100" x2="100" y2="0" stroke="#b8962e" strokeWidth="1.5" opacity="0.6" />
        <line x1="140" y1="120" x2="140" y2="40" stroke="#b8962e" strokeWidth="1" opacity="0.5" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.06]"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="80" cy="180" rx="28" ry="55" fill="#4a6e4a" transform="rotate(20 80 180)" />
        <ellipse cx="120" cy="150" rx="20" ry="42" fill="#4a6e4a" transform="rotate(-15 120 150)" />
        <ellipse cx="50" cy="140" rx="16" ry="35" fill="#4a6e4a" transform="rotate(30 50 140)" />
        <line x1="90" y1="220" x2="90" y2="100" stroke="#b8962e" strokeWidth="1.5" opacity="0.5" />
      </svg>

      {/* Subtle green watercolor wash at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 30% 100%, #4a6e4a 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-48 opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 100%, #4a6e4a 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
