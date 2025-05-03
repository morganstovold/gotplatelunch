import { motion } from "motion/react";

interface WaveDividerProps {
  className?: string;
  glowColor?: string;
  gradientColors?: string[];
  gradientType?: "hawaiian" | "sunset" | "ocean" | "tropical" | "custom";
  bgClass?: string;
}

export function WaveDivider({
  gradientType = "hawaiian",
  gradientColors,
  bgClass = "fill-background",
}: WaveDividerProps) {
  const wavePath =
    "M0,160 C48,149.3 96,139 288,128 C384,139 480,181 576,197.3 C672,213 768,203 864,170.7 C960,139 1056,85 1152,80 C1248,75 1344,117 1392,138.7 L1440,160 L1440,320 L0,320 Z";

  const gradients = {
    hawaiian: ["#FF6B6B", "#FF9E4D", "#4ECDC4"],
    sunset: ["#FF9E4D", "#FF6B6B", "#A15CF9"],
    ocean: ["#4ECDC4", "#1A86FF", "#2855C7"],
    tropical: ["#00BFFF", "#50C878", "#FFD700"],
  };

  const colors =
    gradientColors ||
    gradients[gradientType as keyof typeof gradients] ||
    gradients.hawaiian;
  const gradientId = `wave-gradient-${gradientType}`;
  const filterId = `glow-${gradientType}`;

  const primaryColor = colors[0];

  return (
    <div className="relative w-full h-48 top-6">
      <div className="absolute bottom-0 left-0 w-full overflow-visible">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {colors.map((color, index) => (
                <stop
                  key={index}
                  offset={`${(index * 100) / (colors.length - 1)}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>

            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood
                floodColor={primaryColor}
                floodOpacity="0.6"
                result="glow-color"
              />
              <feComposite
                in="glow-color"
                in2="blur"
                operator="in"
                result="glow-blur"
              />
              <feComposite in="SourceGraphic" in2="glow-blur" operator="over" />
            </filter>
          </defs>

          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              filter: `url(#${filterId})`,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="32"
            filter={`url(#${filterId})`}
            d={wavePath}
          />

          <path className={bgClass} d={wavePath} />
        </svg>
      </div>
    </div>
  );
}
