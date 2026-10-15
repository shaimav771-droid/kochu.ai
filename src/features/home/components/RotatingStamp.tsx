interface RotatingStampProps {
  className?: string
  text?: string
}

export function RotatingStamp({
  className = '',
  text = '• KOCHU.AI • KERALA’S #1 AI CREATOR • 82.5K COMMUNITY ',
}: RotatingStampProps) {
  return (
    <div
      className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer rotating SVG text ring */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-[spin_18s_linear_infinite] group-hover:animate-[spin_8s_linear_infinite] transition-all"
      >
        <path
          id="circlePath"
          d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          fill="none"
        />
        <text className="text-[10.5px] font-mono font-bold uppercase tracking-[0.28em] fill-[#141f10]/75">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center circle with plus sign */}
      <div className="absolute w-10 h-10 rounded-full border border-[#141f10]/15 bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm">
        <span className="text-[#141f10] text-xl font-light leading-none">+</span>
      </div>
    </div>
  )
}
