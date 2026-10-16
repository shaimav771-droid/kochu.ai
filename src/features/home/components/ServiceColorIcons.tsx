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
        {/* Substrate Metallic Green Gradient */}
        <linearGradient id="ac-sub" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="40%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        {/* Silicon Die Core Gradient */}
        <linearGradient id="ac-core" x1="17" y1="17" x2="47" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B132B" />
          <stop offset="100%" stopColor="#061A23" />
        </linearGradient>
      </defs>

      {/* Ambient shadow underneath chip */}
      <rect x="8" y="11" width="48" height="48" rx="12" fill="#065F46" fillOpacity="0.3" />

      {/* Gold Contact Pins */}
      {/* Top Pins */}
      <rect x="17" y="3.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="25" y="3.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="33" y="3.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="41" y="3.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      {/* Bottom Pins */}
      <rect x="17" y="52.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="25" y="52.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="33" y="52.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="41" y="52.5" width="4.5" height="8" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      {/* Left Pins */}
      <rect x="3.5" y="17" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="3.5" y="25" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="3.5" y="33" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="3.5" y="41" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      {/* Right Pins */}
      <rect x="52.5" y="17" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="52.5" y="25" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="52.5" y="33" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <rect x="52.5" y="41" width="8" height="4.5" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />

      {/* Main Substrate Carrier */}
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="12"
        fill="url(#ac-sub)"
      />
      {/* Glossy Rim Light */}
      <rect
        x="9.5"
        y="9.5"
        width="45"
        height="45"
        rx="10.5"
        stroke="#86EFAC"
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />

      {/* Center Silicon Die */}
      <rect x="17" y="17" width="30" height="30" rx="6" fill="url(#ac-core)" />
      <rect x="17" y="17" width="30" height="30" rx="6" stroke="#16A34A" strokeWidth="1" strokeOpacity="0.6" />

      {/* 4 Corner Neon Squares */}
      <rect x="19.5" y="19.5" width="4.5" height="4.5" rx="1.2" fill="#4ADE80" />
      <rect x="40" y="19.5" width="4.5" height="4.5" rx="1.2" fill="#4ADE80" />
      <rect x="19.5" y="40" width="4.5" height="4.5" rx="1.2" fill="#4ADE80" />
      <rect x="40" y="40" width="4.5" height="4.5" rx="1.2" fill="#4ADE80" />

      {/* Glowing Circuit Pathways */}
      <path
        d="M32 17V26M32 38V47M17 32H26M38 32H47"
        stroke="#4ADE80"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Center AI Brain Core */}
      <circle cx="32" cy="32" r="5.5" fill="#15803D" />
      <circle cx="32" cy="32" r="4" fill="#86EFAC" />
      <circle cx="32" cy="32" r="2" fill="#061A23" />
      <circle cx="31.2" cy="31.2" r="0.9" fill="#FFFFFF" />
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
        {/* Book Spine & Cover Gradient */}
        <linearGradient id="la-cover" x1="6" y1="20" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        {/* Left Page Gradient */}
        <linearGradient id="la-page-left" x1="10" y1="22" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        {/* Right Page Gradient */}
        <linearGradient id="la-page-right" x1="32" y1="22" x2="54" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#ECFDF5" />
        </linearGradient>
        {/* Floating Crystal Diamond */}
        <linearGradient id="la-gem" x1="28" y1="5" x2="36" y2="19" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Floating Magic Sparks */}
      <circle cx="20" cy="11" r="2.2" fill="#FACC15" />
      <circle cx="44" cy="9" r="2" fill="#34D399" />
      <path d="M47 15L48.2 17L50.5 18L48.2 19L47 21.2L45.8 19L43.5 18L45.8 17Z" fill="#F43F5E" />

      {/* Center Floating 3D Crystal Gem */}
      <polygon points="32,5 37.5,12 32,19 26.5,12" fill="url(#la-gem)" />
      <polygon points="32,5 37.5,12 32,19" fill="#818CF8" fillOpacity="0.6" />
      <polygon points="32,5 34.5,12 32,19" fill="#FFFFFF" fillOpacity="0.8" />

      {/* Ambient shadow under book */}
      <ellipse cx="32" cy="49" rx="24" ry="5.5" fill="#0284C7" fillOpacity="0.25" />

      {/* Book Cover Base */}
      <path
        d="M7 43C16 39 26 40 32 44C38 40 48 39 57 43V48C48 44 38 45 32 49C26 45 16 44 7 48V43Z"
        fill="url(#la-cover)"
      />

      {/* Left Page Thick Block */}
      <path
        d="M8 25C16 22 25 23 32 27V44C25 40 16 39 8 42V25Z"
        fill="url(#la-page-left)"
        stroke="#BAE6FD"
        strokeWidth="1.2"
      />
      {/* Left Page Code Lines */}
      <line x1="13" y1="29" x2="27" y2="29" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="13" y1="34" x2="25" y2="34" stroke="#0EA5E9" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85" />
      <line x1="13" y1="39" x2="22" y2="39" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.7" />

      {/* Right Page Thick Block */}
      <path
        d="M56 25C48 22 39 23 32 27V44C39 40 48 39 56 42V25Z"
        fill="url(#la-page-right)"
        stroke="#A7F3D0"
        strokeWidth="1.2"
      />
      {/* Right Page Circuit Glyph */}
      <circle cx="44" cy="32" r="3.8" fill="#10B981" />
      <path d="M44 35.8V40M44 28.2V25" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="32" r="1.6" fill="#FFFFFF" />
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
        {/* Presentation Board Gradient */}
        <linearGradient id="ws-board" x1="10" y1="7" x2="54" y2="43" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#2E2875" />
        </linearGradient>
        {/* Microphone Silver Metallic */}
        <linearGradient id="ws-mic" x1="26" y1="21" x2="38" y2="41" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Ambient Shadow */}
      <rect x="9" y="11" width="46" height="34" rx="9" fill="#1E1B4B" fillOpacity="0.25" />

      {/* Background Presentation Board */}
      <rect
        x="9"
        y="7"
        width="46"
        height="34"
        rx="9"
        fill="url(#ws-board)"
      />
      <rect x="9" y="7" width="46" height="34" rx="9" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Upward Chart Bars on Board */}
      <rect x="15" y="23" width="5" height="11" rx="1.8" fill="#FB7185" />
      <rect x="22.5" y="18" width="5" height="16" rx="1.8" fill="#FBBF24" />
      <rect x="30" y="13" width="5" height="21" rx="1.8" fill="#34D399" />
      {/* Upward Trend Line */}
      <path
        d="M17 22L25 17L32.5 12L46 15"
        stroke="#FDE047"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="15" r="2.6" fill="#EF4444" />

      {/* Soundwaves / Shockmount Arc */}
      <path
        d="M20 37C20 44 26 49.5 32 49.5C38 49.5 44 44 44 37"
        stroke="#A855F7"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Microphone Head (Oval/Capsule) */}
      <rect x="26.5" y="22" width="11" height="18" rx="5.5" fill="url(#ws-mic)" />
      <line x1="26.5" y1="27" x2="37.5" y2="27" stroke="#334155" strokeWidth="1.2" />
      <line x1="26.5" y1="32" x2="37.5" y2="32" stroke="#334155" strokeWidth="1.2" />
      {/* Microphone Glowing Indicator */}
      <circle cx="32" cy="25" r="1.6" fill="#EF4444" />

      {/* Stand Stem & Base */}
      <line x1="32" y1="49.5" x2="32" y2="57" stroke="#94A3B8" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M23 57H41" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
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
        {/* Left Arm Gradient (Brand Emerald) */}
        <linearGradient id="co-arm-left" x1="5" y1="18" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="60%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        {/* Right Arm Gradient (Electric Violet) */}
        <linearGradient id="co-arm-right" x1="59" y1="18" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="60%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Golden Collaboration Sparkles */}
      <path
        d="M32 8L34 13.5L39.5 15.5L34 17.5L32 23L30 17.5L24.5 15.5L30 13.5Z"
        fill="#FBBF24"
      />
      <circle cx="20" cy="17" r="2.2" fill="#FDE047" />
      <circle cx="44" cy="16" r="2.2" fill="#38BDF8" />

      {/* Ambient shadow */}
      <ellipse cx="32" cy="46" rx="22" ry="5" fill="#047857" fillOpacity="0.25" />

      {/* Left Arm & Sleeve */}
      <path
        d="M6 34L18 23C20 21 23.5 21 25.5 23L30 27.5L22 35L17 40L6 42V34Z"
        fill="url(#co-arm-left)"
      />
      {/* Left Cuff */}
      <rect
        x="5"
        y="33"
        width="5.5"
        height="9.5"
        rx="2"
        fill="#10B981"
      />

      {/* Right Arm & Sleeve */}
      <path
        d="M58 34L46 23C44 21 40.5 21 38.5 23L34 27.5L42 35L47 40L58 42V34Z"
        fill="url(#co-arm-right)"
      />
      {/* Right Cuff */}
      <rect
        x="53.5"
        y="33"
        width="5.5"
        height="9.5"
        rx="2"
        fill="#818CF8"
      />

      {/* Hand Clasp & Fingers Joining */}
      <rect x="26.5" y="27" width="12" height="5.5" rx="2.7" fill="#34D399" />
      <rect x="25.5" y="32.5" width="13" height="5.5" rx="2.7" fill="#22C55E" />
      <rect x="24.5" y="38" width="14" height="5.5" rx="2.7" fill="#16A34A" />

      {/* Right Hand Cross Thumb */}
      <path
        d="M32.5 25C34.5 25 36.5 27 35.5 29.5L31.5 38.5C30.5 40.5 28 40.5 27 38.5L25 35C24 33 25 30.5 27 28.5L30.5 25.5C31 25 31.8 25 32.5 25Z"
        fill="#C7D2FE"
      />
    </svg>
  )
}
