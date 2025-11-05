
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { Home, X } from 'lucide-react';
import Navigation from './Navigation';

const FloatingHomeButton = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  // Only show on the homepage
  if (location.pathname !== '/') return null;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <m.div
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <button
          onClick={toggleNav}
          className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 min-h-[44px] min-w-[44px]"
          title={showNav ? "Close Navigation" : "Open Navigation"}
          aria-label={showNav ? "Close Navigation" : "Open Navigation"}
        >
          {showNav ? <X className="w-5 h-5" /> : <Home className="w-5 h-5" />}
        </button>
      </m.div>

      <AnimatePresence>
        {showNav && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowNav(false)}
            />
            <m.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Navigation forceShow={true} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHomeButton;
