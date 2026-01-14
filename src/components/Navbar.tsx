'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Optimized scroll handler dengan debounce
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    
    // Simple active section detection (tanpa kompleks)
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    // Throttle scroll event
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {/* SIMPLE NAVBAR - NO COMPLEX ANIMATIONS */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass Background - SIMPLE */}
        <div className={`relative transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Glass Effect */}
          <div className={`absolute inset-0 backdrop-blur-md ${
            scrolled 
              ? 'bg-white/70 dark:bg-gray-900/70 border-b border-white/20' 
              : 'bg-white/60 dark:bg-gray-900/60'
          }`} />
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
                <span className="text-blue-500">.</span>
              </div>

              {/* Desktop Navigation - SIMPLE */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-blue-600 dark:text-blue-400 bg-white/30 dark:bg-gray-800/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-sm shadow hover:shadow-md transition-shadow"
              >
                Hire Me
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/20"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - SIMPLE */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-40 md:hidden pt-20 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-white dark:bg-gray-900 mx-4 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-lg font-medium ${
                      activeSection === item.name.toLowerCase()
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 py-3 px-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;