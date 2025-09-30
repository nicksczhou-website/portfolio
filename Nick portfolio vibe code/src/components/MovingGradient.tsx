import { motion } from 'motion/react';

export function MovingGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-slate-900/10 via-indigo-950/5 to-purple-950/15 backdrop-blur-2xl">
      {/* Primary impressionist wash */}
      <motion.div
        className="absolute w-[140vw] h-[130vh] opacity-25 blur-[120px]"
        style={{
          background: `radial-gradient(ellipse 80% 60%, rgba(74, 93, 249, 0.35), rgba(0, 149, 246, 0.2), rgba(118, 56, 250, 0.15), transparent)`,
          borderRadius: '60% 40% 70% 30%'
        }}
        animate={{
          x: [0, 60, -20, 40, 0],
          y: [0, -40, 30, -10, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
          rotate: [0, 15, -10, 25, 0]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        initial={{ x: "-15%", y: "-15%" }}
      />
      
      {/* Flowing brushstroke layer */}
      <motion.div
        className="absolute w-[110vw] h-[90vh] opacity-30 blur-[80px]"
        style={{
          background: `linear-gradient(135deg, rgba(118, 56, 250, 0.4), rgba(74, 93, 249, 0.25), rgba(0, 149, 246, 0.15), transparent)`,
          borderRadius: '40% 70% 60% 30%'
        }}
        animate={{
          x: [0, -80, 20, -60, 0],
          y: [0, 70, -30, 50, 0],
          scale: [1, 0.7, 1.3, 0.9, 1],
          rotate: [0, -20, 35, -15, 0]
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 8
        }}
        initial={{ x: "25%", y: "-25%" }}
      />
      
      {/* Atmospheric color blend */}
      <motion.div
        className="absolute w-[95vw] h-[75vh] opacity-18 blur-[100px]"
        style={{
          background: `conic-gradient(from 45deg, rgba(0, 149, 246, 0.4), rgba(118, 56, 250, 0.3), rgba(28, 209, 79, 0.25), rgba(0, 149, 246, 0.4))`,
          borderRadius: '70% 30% 40% 60%'
        }}
        animate={{
          x: [0, 45, -15, 35, 0],
          y: [0, -50, 25, -35, 0],
          scale: [1, 1.4, 0.6, 1.2, 1],
          rotate: [0, 40, -25, 60, 0]
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 15
        }}
        initial={{ x: "-25%", y: "25%" }}
      />
      
      {/* Vast atmospheric backdrop */}
      <motion.div
        className="absolute w-[160vw] h-[140vh] opacity-12 blur-[150px]"
        style={{
          background: `radial-gradient(ellipse 70% 50%, rgba(28, 209, 79, 0.25), rgba(0, 149, 246, 0.18), rgba(255, 122, 0, 0.12), transparent)`,
          borderRadius: '50% 60% 70% 40%'
        }}
        animate={{
          x: [0, -30, 15, -40, 0],
          y: [0, 45, -20, 35, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
          rotate: [0, 10, -15, 20, 0]
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: [0.165, 0.84, 0.44, 1],
          delay: 12
        }}
        initial={{ x: "-30%", y: "-30%" }}
      />
      
      {/* Warm impressionist stroke */}
      <motion.div
        className="absolute w-[85vw] h-[60vh] opacity-22 blur-[70px]"
        style={{
          background: `linear-gradient(65deg, rgba(255, 122, 0, 0.45), rgba(28, 209, 79, 0.3), rgba(74, 93, 249, 0.2), transparent)`,
          borderRadius: '80% 20% 60% 40%'
        }}
        animate={{
          x: [0, 55, -25, 45, 0],
          y: [0, -45, 35, -25, 0],
          scale: [1, 1.5, 0.6, 1.3, 1],
          rotate: [0, -30, 45, -20, 0]
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: [0.6, 0.04, 0.98, 0.335],
          delay: 22
        }}
        initial={{ x: "35%", y: "35%" }}
      />
      
      {/* Medium floating blob */}
      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full opacity-30 blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(74, 93, 249, 0.6), rgba(118, 56, 250, 0.3), transparent)`
        }}
        animate={{
          x: [0, -20, 0, 20, 0],
          y: [0, 40, 0, -40, 0],
          scale: [1, 0.9, 1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12
        }}
        initial={{ x: "-30%", y: "50%" }}
      />
      
      {/* Large secondary accent blob */}
      <motion.div
        className="absolute w-[90vw] h-[90vh] rounded-full opacity-18 blur-2xl"
        style={{
          background: `radial-gradient(circle, rgba(0, 149, 246, 0.4), rgba(255, 122, 0, 0.2), transparent)`
        }}
        animate={{
          x: [0, 45, 0, -45, 0],
          y: [0, -35, 0, 35, 0],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 18
        }}
        initial={{ x: "50%", y: "-10%" }}
      />

      {/* Additional Instagram brand color gradients */}
      
      {/* Primary brand gradient */}
      <motion.div
        className="absolute w-[110vw] h-[110vh] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(74, 93, 249, 0.3), rgba(118, 56, 250, 0.15), transparent)`
        }}
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 35, 0, -35, 0],
          scale: [1, 0.85, 1, 1.15, 1]
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        initial={{ x: "10%", y: "60%" }}
      />
      
      {/* Green accent gradient */}
      <motion.div
        className="absolute w-[85vw] h-[85vh] rounded-full opacity-22 blur-2xl"
        style={{
          background: `radial-gradient(circle, rgba(28, 209, 79, 0.35), rgba(0, 149, 246, 0.2), transparent)`
        }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -20, 0, 20, 0],
          scale: [1, 1.25, 1, 0.75, 1]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
        initial={{ x: "70%", y: "40%" }}
      />
      
      {/* Orange vibrant gradient */}
      <motion.div
        className="absolute w-[95vw] h-[95vh] rounded-full opacity-18 blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(255, 122, 0, 0.4), rgba(74, 93, 249, 0.2), transparent)`
        }}
        animate={{
          x: [0, -25, 0, 25, 0],
          y: [0, 45, 0, -45, 0],
          scale: [1, 0.9, 1, 1.1, 1]
        }}
        transition={{
          duration: 33,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 14
        }}
        initial={{ x: "-15%", y: "-5%" }}
      />
      
      {/* Purple depth gradient */}
      <motion.div
        className="absolute w-[75vw] h-[75vh] rounded-full opacity-25 blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(118, 56, 250, 0.45), rgba(28, 209, 79, 0.25), transparent)`
        }}
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20
        }}
        initial={{ x: "40%", y: "70%" }}
      />
      
      {/* Instagram blue core gradient */}
      <motion.div
        className="absolute w-[105vw] h-[105vh] rounded-full opacity-16 blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(0, 149, 246, 0.4), rgba(255, 122, 0, 0.15), transparent)`
        }}
        animate={{
          x: [0, -35, 0, 35, 0],
          y: [0, 25, 0, -25, 0],
          scale: [1, 1.05, 1, 0.95, 1]
        }}
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 11
        }}
        initial={{ x: "60%", y: "-15%" }}
      />
      
      {/* Subtle glass reflection effect */}
      <motion.div
        className="absolute w-[130vw] h-[40vh] rounded-full opacity-8 blur-2xl"
        style={{
          background: `linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(74, 93, 249, 0.05), transparent)`
        }}
        animate={{
          x: [0, -20, 0, 20, 0],
          y: [0, 10, 0, -10, 0],
          scale: [1, 1.1, 1, 0.9, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        initial={{ x: "-15%", y: "10%" }}
      />
      
      {/* Deep purple ambient gradient */}
      <motion.div
        className="absolute w-[65vw] h-[65vh] rounded-full opacity-28 blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(118, 56, 250, 0.35), rgba(0, 149, 246, 0.2), transparent)`
        }}
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -40, 0, 40, 0],
          scale: [1, 0.85, 1, 1.15, 1]
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 16
        }}
        initial={{ x: "80%", y: "80%" }}
      />

      {/* Ethereal color wisps - like broken brushstrokes */}
      
      {/* Soft lavender wisp */}
      <motion.div
        className="absolute w-[60vw] h-[40vh] opacity-35 blur-[60px]"
        style={{
          background: `linear-gradient(120deg, rgba(118, 56, 250, 0.3), rgba(74, 93, 249, 0.2), transparent)`,
          borderRadius: '90% 10% 80% 20%'
        }}
        animate={{
          x: [0, -25, 40, -15, 0],
          y: [0, 35, -20, 45, 0],
          scale: [1, 0.8, 1.6, 0.9, 1],
          rotate: [0, 25, -40, 15, 0]
        }}
        transition={{
          duration: 33,
          repeat: Infinity,
          ease: [0.23, 1, 0.32, 1],
          delay: 5
        }}
        initial={{ x: "10%", y: "70%" }}
      />
      
      {/* Aqua impressionist stroke */}
      <motion.div
        className="absolute w-[75vw] h-[45vh] opacity-28 blur-[90px]"
        style={{
          background: `conic-gradient(from 180deg, rgba(0, 149, 246, 0.4), rgba(28, 209, 79, 0.25), rgba(118, 56, 250, 0.15), transparent)`,
          borderRadius: '30% 70% 20% 80%'
        }}
        animate={{
          x: [0, 70, -30, 50, 0],
          y: [0, -35, 55, -20, 0],
          scale: [1, 1.3, 0.5, 1.4, 1],
          rotate: [0, -45, 30, -60, 0]
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: [0.68, -0.55, 0.265, 1.55],
          delay: 18
        }}
        initial={{ x: "65%", y: "15%" }}
      />
      
      {/* Golden hour blend */}
      <motion.div
        className="absolute w-[90vw] h-[55vh] opacity-20 blur-[110px]"
        style={{
          background: `radial-gradient(ellipse 60% 40%, rgba(255, 122, 0, 0.35), rgba(74, 93, 249, 0.2), rgba(0, 149, 246, 0.15), transparent)`,
          borderRadius: '40% 60% 80% 20%'
        }}
        animate={{
          x: [0, -50, 25, -40, 0],
          y: [0, 40, -45, 30, 0],
          scale: [1, 0.7, 1.5, 0.8, 1],
          rotate: [0, 35, -25, 50, 0]
        }}
        transition={{
          duration: 56,
          repeat: Infinity,
          ease: [0.175, 0.885, 0.32, 1.275],
          delay: 28
        }}
        initial={{ x: "-10%", y: "50%" }}
      />
      
      {/* Delicate color wash */}
      <motion.div
        className="absolute w-[50vw] h-[70vh] opacity-40 blur-[50px]"
        style={{
          background: `linear-gradient(45deg, rgba(28, 209, 79, 0.3), rgba(0, 149, 246, 0.25), rgba(255, 122, 0, 0.2), transparent)`,
          borderRadius: '85% 15% 75% 25%'
        }}
        animate={{
          x: [0, 35, -45, 25, 0],
          y: [0, -50, 20, -35, 0],
          scale: [1, 1.8, 0.4, 1.5, 1],
          rotate: [0, -20, 55, -10, 0]
        }}
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: [0.37, 0, 0.63, 1],
          delay: 35
        }}
        initial={{ x: "75%", y: "60%" }}
      />
      
      {/* Atmospheric depth layer */}
      <motion.div
        className="absolute w-[120vw] h-[80vh] opacity-15 blur-[130px]"
        style={{
          background: `linear-gradient(210deg, rgba(118, 56, 250, 0.25), rgba(255, 122, 0, 0.18), rgba(28, 209, 79, 0.12), transparent)`,
          borderRadius: '60% 40% 30% 70%'
        }}
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, 30, -40, 50, 0],
          scale: [1, 0.9, 1.2, 0.85, 1],
          rotate: [0, 20, -30, 40, 0]
        }}
        transition={{
          duration: 72,
          repeat: Infinity,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 8
        }}
        initial={{ x: "40%", y: "-20%" }}
      />
      
      {/* Subtle highlight shimmer */}
      <motion.div
        className="absolute w-[100vw] h-[30vh] opacity-8 blur-[40px]"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), rgba(74, 93, 249, 0.05), transparent)`,
          borderRadius: '20% 80% 60% 40%'
        }}
        animate={{
          x: [0, -60, 40, -30, 0],
          y: [0, 15, -25, 10, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
          rotate: [0, 5, -10, 8, 0]
        }}
        transition={{
          duration: 85,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 3
        }}
        initial={{ x: "20%", y: "30%" }}
      />
    </div>
  );
}