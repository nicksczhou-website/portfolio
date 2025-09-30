// Image imports
import resumeImage from 'figma:asset/042a55d4a95756aa895767c7fcf0b3e0d0872b7b.png';
import personalImage from 'figma:asset/06e93f8b7f03ba69ecaaab7176b67ed4dbb58fea.png';
import growthDesignImage from 'figma:asset/f3967ed4088d4f857d5544ba8b47d1b5a24be7a8.png';
import facebookDesignImage from 'figma:asset/f7634ac53e382dcbbd7973b83d5e261212f78d61.png';
import aiGlassesImage1 from 'figma:asset/b5e1c96106d9aeef8593738c17ce1254a940c416.png';
import aiGlassesImage2 from 'figma:asset/79e3986cd36854e8dc9422722faf344818636ddf.png';
import aiGlassesImage3 from 'figma:asset/f7dbdadd1101f1da3d9b60139dec84d2c8a03ace.png';

// Static configuration for better performance
export const TEXT_ELEMENTS = {
  'ai glasses': {
    position: 'top-[8%] left-[12%]',
    style: { rotate: '-8deg', fontSize: '48px' },
    subtitle: 'inquiry for details',
    subtitleSize: '26px',
    opacity: 'text-white/85',
    imagesHorizontal: [aiGlassesImage1, aiGlassesImage2, aiGlassesImage3]
  },
  'growth design': {
    position: 'bottom-[38%] left-[10%]',
    style: { rotate: '-12deg', fontSize: '52px' },
    subtitle: 'inquiry for details',
    subtitleSize: '28px',
    opacity: 'text-white/75',
    italic: true,
    images: [facebookDesignImage, growthDesignImage]
  },
  'ai tools': {
    position: 'bottom-[12%] left-[7%]',
    style: { rotate: '5deg', fontSize: '56px' },
    opacity: 'text-white/70',
    showText: 'coming soon'
  },
  'me': {
    position: 'top-[12%] right-[15%]',
    style: { rotate: '15deg', fontSize: '64px' },
    opacity: 'text-white/85',
    italic: true,
    image: personalImage,
    showPersonalNote: true
  },
  'resume': {
    position: 'top-[40%] right-[8%]',
    style: { rotate: '8deg', fontSize: '58px' },
    subtitle: 'download',
    subtitleSize: '32px',
    opacity: 'text-white/75',
    image: resumeImage,
    isResume: true,
    link: "https://drive.google.com/file/d/1ASJIFUGAj2vPQoWv6DdwgnH-io1ddhXK/view"
  },
  'contact': {
    position: 'bottom-[18%] right-[12%]',
    style: { rotate: '-6deg', fontSize: '54px', fontStyle: 'italic' },
    subtitle: 'linkedin',
    subtitleSize: '30px',
    opacity: 'text-white/80',
    showEmoji: true,
    link: "https://www.linkedin.com/in/nick-zhou-7aa3a2149/"
  }
} as const;

export const AMPERSANDS = [
  {
    position: 'top-[32%] left-[6%]',
    style: { rotate: '-22deg', fontSize: '78px' }
  },
  {
    position: 'bottom-[24%] left-[8%]',
    style: { rotate: '15deg', fontSize: '68px' }
  }
] as const;

// Animation constants
export const BLUR_OVERLAY_STYLE = {
  backdropFilter: 'blur(4px) saturate(1.3) brightness(0.95)',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
} as const;

export const FADE_TRANSITION = { 
  duration: 0.2, 
  ease: [0.4, 0, 0.2, 1] as const 
};