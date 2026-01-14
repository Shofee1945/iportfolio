'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundCircles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effect berdasarkan scroll
  const circle1Y = useTransform(scrollY, [0, 2000], [100, -300]);
  const circle1X = useTransform(scrollY, [0, 2000], [100, 300]);
  const circle1Scale = useTransform(scrollY, [0, 2000], [1, 1.2]);

  const circle2Y = useTransform(scrollY, [0, 2000], [-100, 200]);
  const circle2X = useTransform(scrollY, [0, 2000], [-100, -300]);
  const circle2Scale = useTransform(scrollY, [0, 2000], [1, 0.8]);

  const circle3Y = useTransform(scrollY, [0, 2000], [300, -100]);
  const circle3X = useTransform(scrollY, [0, 2000], [300, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Circle 1 - Primary (Blue/Purple) */}
      <motion.div
        style={{
          y: circle1Y,
          x: circle1X,
          scale: circle1Scale,
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
      />

      {/* Circle 2 - Secondary (Green/Teal) */}
      <motion.div
        style={{
          y: circle2Y,
          x: circle2X,
          scale: circle2Scale,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-green-500/15 via-teal-500/15 to-cyan-500/15 blur-3xl"
      />

      {/* Circle 3 - Accent (Orange/Red) */}
      <motion.div
        style={{
          y: circle3Y,
          x: circle3X,
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10 blur-3xl"
      />

      {/* Mouse Follow Particles */}
      <motion.div
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl"
      />

      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent dark:via-black/5" />
      
      {/* Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default BackgroundCircles;