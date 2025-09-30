import { motion } from 'motion/react';
import { memo, useCallback, useMemo } from 'react';

interface TextElementProps {
  word: string;
  config: any;
  hoveredWord: string | null;
  setHoveredWord: (word: string | null) => void;
}

const HOVER_TRANSITION = { duration: 0.15, ease: [0.4, 0, 0.2, 1] as const };
const SUBTITLE_TRANSITION = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

export const TextElement = memo(({ 
  word, 
  config, 
  hoveredWord, 
  setHoveredWord 
}: TextElementProps) => {
  const isHovered = hoveredWord === word;
  const shouldBlur = useMemo(() => hoveredWord && !isHovered, [hoveredWord, isHovered]);
  
  const handleClick = useCallback(() => {
    if (config.link) {
      window.open(config.link, "_blank");
    }
  }, [config.link]);

  const handleHoverStart = useCallback(() => setHoveredWord(word), [word, setHoveredWord]);
  const handleHoverEnd = useCallback(() => setHoveredWord(null), [setHoveredWord]);
  
  const blurStyle = useMemo(() => ({
    filter: shouldBlur ? 'blur(2px)' : 'none',
    opacity: shouldBlur ? 0.3 : 1,
    transition: 'all 0.3s ease'
  }), [shouldBlur]);

  const subtitleStyle = useMemo(() => ({
    fontFamily: 'var(--font-serif)', 
    fontSize: config.subtitleSize,
    fontWeight: 'var(--font-weight-normal)',
    fontStyle: 'italic'
  }), [config.subtitleSize]);
  
  return (
    <motion.div 
      className={`absolute ${config.position} serif-large ${config.opacity} cursor-pointer transition-all duration-300 ${config.italic ? 'italic' : ''}`}
      style={config.style}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      transition={HOVER_TRANSITION}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <div className="text-center leading-tight" style={blurStyle}>
        <div>{word}</div>
        {config.subtitle && (
          <motion.div 
            className="text-white/60"
            style={subtitleStyle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -10
            }}
            transition={SUBTITLE_TRANSITION}
          >
            {config.subtitle}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
});

TextElement.displayName = 'TextElement';