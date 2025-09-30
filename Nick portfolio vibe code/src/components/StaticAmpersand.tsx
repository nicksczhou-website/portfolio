import { memo } from 'react';

interface StaticAmpersandProps {
  position: string;
  style: Record<string, any>;
  hoveredWord: string | null;
}

export const StaticAmpersand = memo(({ position, style, hoveredWord }: StaticAmpersandProps) => (
  <div 
    className={`absolute ${position} serif-large text-white/80 transition-all duration-300`}
    style={{ 
      ...style,
      filter: hoveredWord ? 'blur(2px)' : 'none',
      opacity: hoveredWord ? 0.3 : 1
    }}
  >
    &
  </div>
));

StaticAmpersand.displayName = 'StaticAmpersand';