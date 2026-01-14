'use client';

import { motion } from 'framer-motion';
import { Sparkles, Code, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // Scroll Indicator Component
  const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      // GANTI INI: dari "absolute bottom-10 left-1/2 transform -translate-x-1/2"
      // JADI: "fixed bottom-10 right-10" atau "absolute bottom-10 right-10"
      className="fixed bottom-10 right-10 z-40"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll
        </span>
        <div className="relative">
          {/* Button container */}
          <div className="w-8 h-14 rounded-full border-2 border-blue-500/30 flex items-start justify-center p-2 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            {/* Animated dot */}
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 w-8 h-14 rounded-full bg-blue-500/10 blur-md -z-10" />
        </div>
      </div>
    </motion.div>
  );
};

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium gradient-text">
              Available for freelance work
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold">
            <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="gradient-text block mt-2"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Dev',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I craft <span className="font-semibold text-blue-600 dark:text-blue-400">digital experiences</span> 
            {' '}that blend stunning design with cutting-edge technology. 
            Let's build something amazing together.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {[
              { value: '50+', label: 'Projects', icon: <Rocket className="w-5 h-5" /> },
              { value: '3+', label: 'Years', icon: <Sparkles className="w-5 h-5" /> },
              { value: '100%', label: 'Satisfaction', icon: <Code className="w-5 h-5" /> },
            ].map((stat, idx) => (
              <div key={idx} className="glass px-6 py-4 rounded-xl min-w-[140px]">
                <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                  {stat.icon}
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3"
            >
              View My Work
              <div className="group-hover:translate-y-1 transition-transform">↓</div>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 glass rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Code className="w-5 h-5" />
              Let's Collaborate
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;