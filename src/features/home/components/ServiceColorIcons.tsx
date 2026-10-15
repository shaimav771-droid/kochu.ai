interface ColorPictureProps {
  className?: string
}

/**
 * 3D Color Picture: Solve a Business Problem (AI Microchip with Glowing Circuits)
 */
export function AiChipColorPicture({ className = 'w-14 h-14' }: ColorPictureProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Soft Depth Shadow */}
        <filter id="chip-shadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#047857" floodOpacity="0.3" />
        </filter>
        {/* Substrate Metallic Green Gradient */}
        <linearGradient id="chip-sub" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="40%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        {/* Gold Pins Gradient */}
        <linearGradient id="chip-gold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        {/* Silicon Die Core Gradient */}
        <linearGradient id="chip-core" x1="18" y1="18" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>
        {/* Neon Circuit Glow */}
        <linearGradient id="chip-neon" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      {/* Gold Contact Pins */}
      {/* Top Pins */}
      <rect x="18" y="4" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="26" y="4" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="34" y="4" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="42" y="4" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      {/* Bottom Pins */}
      <rect x="18" y="54" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="26" y="54" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="34" y="54" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      <rect x="42" y="54" width="4" height="6" rx="1.5" fill="url(#chip-gold)" />
      {/* Left Pins */}
      <rect x="4" y="18" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="4" y="26" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="4" y="34" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="4" y="42" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      {/* Right Pins */}
      <rect x="54" y="18" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="54" y="26" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="54" y="34" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />
      <rect x="54" y="42" width="6" height="4" rx="1.5" fill="url(#chip-gold)" />

      {/* Main Substrate Carrier */}
      <rect
        x="9"
        y="9"
        width="46"
        height="46"
        rx="12"
        fill="url(#chip-sub)"
        filter="url(#chip-shadow)"
      />
      {/* Glossy Rim Light */}
      <rect
        x="10.5"
        y="10.5"
        width="43"
        height="43"
        rx="10.5"
        stroke="#86EFAC"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />

      {/* Center Silicon Die */}
      <rect x="18" y="18" width="28" height="28" rx="7" fill="url(#chip-core)" />
      <rect x="18" y="18" width="28" height="28" rx="7" stroke="#334155" strokeWidth="1" />

      {/* Glowing Circuit Pathways */}
      <path
        d="M24 18V25H18M40 18V25H46M24 46V39H18M40 46V39H46"
        stroke="url(#chip-neon)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center AI Brain Core */}
      <circle cx="32" cy="32" r="6" fill="#15803D" fillOpacity="0.5" />
      <circle cx="32" cy="32" r="4.5" fill="url(#chip-neon)" />
      <circle cx="30.5" cy="30.5" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  )
}

/**
 * 3D Color Picture: Learn AI (Glowing Open Book with Digital Sparks & Gem)
 */
export function LearnAiColorPicture({ className = 'w-14 h-14' }: ColorPictureProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="book-shadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#0284C7" floodOpacity="0.25" />
        </filter>
        {/* Book Spine & Cover Gradient */}
        <linearGradient id="book-cover" x1="6" y1="20" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        {/* Left Page Gradient */}
        <linearGradient id="page-left" x1="10" y1="22" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        {/* Right Page Gradient */}
        <linearGradient id="page-right" x1="32" y1="22" x2="54" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#ECFDF5" />
        </linearGradient>
        {/* Floating Crystal Diamond */}
        <linearGradient id="gem-grad" x1="28" y1="6" x2="36" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Floating Magic Sparks */}
      <circle cx="20" cy="12" r="2" fill="#FACC15" />
      <circle cx="44" cy="10" r="1.8" fill="#34D399" />
      <path d="M47 16L48 18L50 19L48 20L47 22L46 20L44 19L46 18Z" fill="#F43F5E" />

      {/* Center Floating 3D Crystal Gem */}
      <polygon points="32,6 37,13 32,20 27,13" fill="url(#gem-grad)" />
      <polygon points="32,6 37,13 32,20" fill="#818CF8" fillOpacity="0.6" />
      <polygon points="32,6 34,13 32,20" fill="#FFFFFF" fillOpacity="0.7" />

      {/* Book Cover Base */}
      <path
        d="M8 43C16 39 26 40 32 44C38 40 48 39 56 43V48C48 44 38 45 32 49C26 45 16 44 8 48V43Z"
        fill="url(#book-cover)"
        filter="url(#book-shadow)"
      />

      {/* Left Page Thick Block */}
      <path
        d="M9 25C17 22 25 23 32 27V44C25 40 17 39 9 42V25Z"
        fill="url(#page-left)"
        stroke="#BAE6FD"
        strokeWidth="1"
      />
      {/* Left Page Code Lines */}
      <line x1="14" y1="29" x2="27" y2="29" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="14" y1="34" x2="25" y2="34" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
      <line x1="14" y1="39" x2="22" y2="39" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />

      {/* Right Page Thick Block */}
      <path
        d="M55 25C47 22 39 23 32 27V44C39 40 47 39 55 42V25Z"
        fill="url(#page-right)"
        stroke="#A7F3D0"
        strokeWidth="1"
      />
      {/* Right Page Circuit Glyph */}
      <circle cx="43" cy="32" r="3.5" fill="#10B981" />
      <path d="M43 35.5V39M43 28.5V26" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="43" cy="32" r="1.5" fill="#FFFFFF" />
    </svg>
  )
}

/**
 * 3D Color Picture: Workshops & Speaking (Broadcast Microphone & Stage Screen)
 */
export function WorkshopsColorPicture({ className = 'w-14 h-14' }: ColorPictureProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="mic-shadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#8B5CF6" floodOpacity="0.25" />
        </filter>
        {/* Presentation Board Gradient */}
        <linearGradient id="board-grad" x1="10" y1="8" x2="54" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
        {/* Chart Bar 1 (Coral) */}
        <linearGradient id="bar-coral" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        {/* Chart Bar 2 (Gold) */}
        <linearGradient id="bar-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        {/* Chart Bar 3 (Emerald) */}
        <linearGradient id="bar-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
        {/* Microphone Silver Metallic */}
        <linearGradient id="mic-metal" x1="26" y1="22" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Background Presentation Board */}
      <rect
        x="10"
        y="8"
        width="44"
        height="32"
        rx="8"
        fill="url(#board-grad)"
        filter="url(#mic-shadow)"
      />
      <rect x="10" y="8" width="44" height="32" rx="8" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Upward Chart Bars on Board */}
      <rect x="16" y="24" width="4.5" height="10" rx="1.5" fill="url(#bar-coral)" />
      <rect x="23" y="19" width="4.5" height="15" rx="1.5" fill="url(#bar-gold)" />
      <rect x="30" y="14" width="4.5" height="20" rx="1.5" fill="url(#bar-green)" />
      {/* Upward Trend Line */}
      <path
        d="M18 23L25 18L32 13L46 17"
        stroke="#FCD34D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="17" r="2.5" fill="#EF4444" />

      {/* Soundwaves / Broadcast Ripples */}
      <path
        d="M20 38C20 44 26 49 32 49C38 49 44 44 44 38"
        stroke="#A855F7"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Microphone Head (Oval/Capsule) */}
      <rect x="27" y="24" width="10" height="18" rx="5" fill="url(#mic-metal)" />
      <line x1="27" y1="30" x2="37" y2="30" stroke="#475569" strokeWidth="1" />
      <line x1="27" y1="35" x2="37" y2="35" stroke="#475569" strokeWidth="1" />
      {/* Microphone Glowing Indicator */}
      <circle cx="32" cy="27" r="1.5" fill="#EF4444" />

      {/* Stand Stem & Base */}
      <line x1="32" y1="49" x2="32" y2="57" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 57H40" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

/**
 * 3D Color Picture: Collaborate With Me (Vibrant Dynamic Handshake)
 */
export function CollaborateColorPicture({ className = 'w-14 h-14' }: ColorPictureProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="hand-shadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#047857" floodOpacity="0.25" />
        </filter>
        {/* Left Arm Gradient (Brand Emerald) */}
        <linearGradient id="arm-left" x1="6" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="60%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        {/* Right Arm Gradient (Electric Indigo/Violet) */}
        <linearGradient id="arm-right" x1="58" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="60%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        {/* Golden Energy Spark */}
        <linearGradient id="energy-gold" x1="28" y1="20" x2="36" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Golden Collaboration Sparkles */}
      <path
        d="M32 10L33.5 15L38 16.5L33.5 18L32 23L30.5 18L26 16.5L30.5 15Z"
        fill="url(#energy-gold)"
      />
      <circle cx="21" cy="18" r="1.8" fill="#FACC15" />
      <circle cx="43" cy="17" r="1.8" fill="#38BDF8" />

      {/* Main Handshake Group */}
      <g filter="url(#hand-shadow)">
        {/* Left Arm & Sleeve */}
        <path
          d="M6 34L18 23C20 21 23 21 25 23L29 27L22 34L17 39L6 42V34Z"
          fill="url(#arm-left)"
        />
        {/* Left Cuff */}
        <rect
          x="5"
          y="33"
          width="5"
          height="9.5"
          rx="2"
          fill="#34D399"
        />

        {/* Right Arm & Sleeve */}
        <path
          d="M58 34L46 23C44 21 41 21 39 23L35 27L42 34L47 39L58 42V34Z"
          fill="url(#arm-right)"
        />
        {/* Right Cuff */}
        <rect
          x="54"
          y="33"
          width="5"
          height="9.5"
          rx="2"
          fill="#A5B4FC"
        />

        {/* Hand Clasp & Fingers Joining */}
        {/* Left Hand Fingers wrapped */}
        <rect x="27" y="27" width="11" height="5.5" rx="2.5" fill="#34D399" />
        <rect x="26" y="32" width="12" height="5.5" rx="2.5" fill="#22C55E" />
        <rect x="25" y="37" width="13" height="5.5" rx="2.5" fill="#16A34A" />

        {/* Right Thumb / Palm Cross */}
        <path
          d="M32 25C34 25 36 27 35 29L31 38C30 40 28 40 27 38L25 34C24 32 25 30 27 28L30 25C31 24.5 31.5 25 32 25Z"
          fill="#C7D2FE"
        />
      </g>
    </svg>
  )
}
