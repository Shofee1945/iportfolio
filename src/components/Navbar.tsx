'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR - FIXED WIDTH */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 w-full z-50 px-4"
      >
        <div className="flex justify-center">
          {/* INI YANG DIUBAH: Width konsisten di desktop */}
          <div className={`
            transition-all duration-300 
            ${scrolled ? 'w-[95%]' : 'w-[90%]'}
            max-w-6xl
          `}>
            {/* Glass Pill */}
            <div className="relative">
              {/* Glass Backdrop */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-[2rem] border border-white/10" />
              
              {/* Content */}
              <div className="relative px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                  <span className="text-blue-400">.</span>
                </div>

                {/* Desktop Nav - FIXED POSITION */}
                <div className="hidden md:flex items-center space-x-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Hire Me
                </a>

                {/* Mobile Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-lg bg-white/10 text-white/80"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-24">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative max-w-sm mx-auto px-4">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium mt-4 shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
