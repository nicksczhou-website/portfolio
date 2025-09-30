import { motion } from 'motion/react';
import { memo, useMemo } from 'react';

interface ImageDisplayProps {
  hoveredWord: string | null;
  textElements: Record<string, any>;
}

// Common image filter style
const IMAGE_FILTER = 'brightness(0.9) contrast(1.1) saturate(1.2)';

// Animation transitions
const FADE_TRANSITION = { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const };
const WAVE_ANIMATION = {
  rotate: [0, 20, -10, 25, -5, 15, 0],
};
const WAVE_TRANSITION = {
  duration: 1.5,
  repeat: Infinity,
  ease: [0.4, 0, 0.2, 1] as const,
  repeatDelay: 0.5
};

const WavingEmoji = memo(() => (
  <motion.div
    style={{ 
      fontSize: '140px', 
      lineHeight: '1',
      transformOrigin: '70% 70%'
    }}
    animate={WAVE_ANIMATION}
    transition={WAVE_TRANSITION}
  >
    👋
  </motion.div>
));
WavingEmoji.displayName = 'WavingEmoji';

const ComingSoonText = memo(({ text }: { text: string }) => (
  <p className="text-white/85" style={{ 
    fontFamily: 'var(--font-serif)', 
    fontSize: '72px', 
    fontWeight: 'var(--font-weight-normal)', 
    lineHeight: '1.2',
    fontStyle: 'italic'
  }}>
    {text}
  </p>
));
ComingSoonText.displayName = 'ComingSoonText';

const PersonalNote = memo(() => (
  <div className="max-w-[600px] text-center px-8">
    <p className="text-white/90 mb-4" style={{ 
      fontFamily: 'var(--font-serif)', 
      fontSize: 'var(--text-base)', 
      fontWeight: 'var(--font-weight-normal)', 
      lineHeight: '1.6' 
    }}>
      Hey, I am Nick. I am a Senior product designer at Meta.<br />
      I live in Seattle downtown with my dog. I love design as a subject, whether it's ux, graphic, interior, fashion, or architecture.
    </p>
    <div className="space-y-1">
      <p className="text-white/80" style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: 'var(--text-base)', 
        fontWeight: 'var(--font-weight-medium)', 
        lineHeight: '1.5' 
      }}>
        My favorite design mantra are
      </p>
      <p className="text-white/85 italic" style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: 'var(--text-base)', 
        fontWeight: 'var(--font-weight-normal)', 
        lineHeight: '1.5' 
      }}>
        show, don't tell
      </p>
      <p className="text-white/85 italic" style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: 'var(--text-base)', 
        fontWeight: 'var(--font-weight-normal)', 
        lineHeight: '1.5' 
      }}>
        speak people language
      </p>
    </div>
  </div>
));
PersonalNote.displayName = 'PersonalNote';

export const ImageDisplay = memo(({ hoveredWord, textElements }: ImageDisplayProps) => {
  const config = useMemo(() => 
    hoveredWord ? textElements[hoveredWord] : null, 
    [hoveredWord, textElements]
  );

  if (!config) return null;
  
  if (config.showText) {
    return (
      <div className="text-center">
        <ComingSoonText text={config.showText} />
      </div>
    );
  }
  
  if (config.showEmoji) {
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={FADE_TRANSITION}
      >
        <WavingEmoji />
      </motion.div>
    );
  }
  
  if (config.imagesHorizontal) {
    return (
      <div className="flex items-center">
        {config.imagesHorizontal.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`${hoveredWord} ${index + 1}`}
            className="h-[600px] object-contain"
            style={{ 
              filter: IMAGE_FILTER,
              // Mask white background for the 3rd AI glasses image (iPhone mockup)
              ...(index === 2 && hoveredWord === 'ai glasses' ? {
                mixBlendMode: 'multiply',
                filter: `${IMAGE_FILTER} contrast(1.2) brightness(0.95)`
              } : {})
            }}
          />
        ))}
      </div>
    );
  }
  
  if (config.images) {
    return (
      <div className="flex flex-col items-center" style={{ gap: '4px' }}>
        {config.images.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`${hoveredWord} ${index + 1}`}
            className="w-[768px] aspect-[16/9] object-cover"
            style={{ filter: IMAGE_FILTER }}
          />
        ))}
      </div>
    );
  }
  
  if (config.image) {
    return (
      <>
        <img
          src={config.image}
          alt={hoveredWord}
          className={config.isResume ? "max-w-[614px] max-h-[72vh] object-contain" : "w-[768px] aspect-[16/9] object-cover"}
          style={{ filter: IMAGE_FILTER }}
        />
        {config.showPersonalNote && <PersonalNote />}
      </>
    );
  }
  
  return null;
});

ImageDisplay.displayName = 'ImageDisplay';