import { MovingGradient } from './components/MovingGradient';
import { StaticAmpersand } from './components/StaticAmpersand';
import { TextElement } from './components/TextElement';
import { ImageDisplay } from './components/ImageDisplay';
import { TEXT_ELEMENTS, AMPERSANDS, BLUR_OVERLAY_STYLE, FADE_TRANSITION } from './components/config';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  return (
    <div className="size-full relative">
      <MovingGradient />
      
      {/* Liquid glass blur overlay */}
      <AnimatePresence>
        {hoveredWord && (
          <motion.div
            className="absolute inset-0 z-[1] pointer-events-none backdrop-blur-sm bg-white/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={FADE_TRANSITION}
            style={BLUR_OVERLAY_STYLE}
          />
        )}
      </AnimatePresence>
      
      {/* Text layout */}
      <div className="relative z-10 size-full">
        {/* Static ampersands */}
        {AMPERSANDS.map((amp, index) => (
          <StaticAmpersand 
            key={index}
            position={amp.position}
            style={amp.style}
            hoveredWord={hoveredWord}
          />
        ))}
        
        {/* Interactive text elements */}
        {Object.entries(TEXT_ELEMENTS).map(([word, config]) => (
          <TextElement
            key={word}
            word={word}
            config={config}
            hoveredWord={hoveredWord}
            setHoveredWord={setHoveredWord}
          />
        ))}
      </div>

      {/* Center content display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[5]">
        <AnimatePresence mode="wait">
          {hoveredWord ? (
            <motion.div
              key={hoveredWord}
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION}
            >
              <ImageDisplay hoveredWord={hoveredWord} textElements={TEXT_ELEMENTS} />
            </motion.div>
          ) : (
            <motion.div
              key="default-text"
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION}
            >
              <div className="text-white/60 space-y-1">
                <p style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'var(--text-h2)', 
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '1.3'
                }}>
                  Nick Zhou
                </p>
                <p style={{ 
                  fontFamily: 'var(--font-text)', 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: '1.4'
                }}>
                  Senior Designer @ Meta
                </p>
                <p style={{ 
                  fontFamily: 'var(--font-text)', 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: '1.4'
                }}>
                  Seattle
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}