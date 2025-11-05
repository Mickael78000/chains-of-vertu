
import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Plus, Search, Clock, ArrowUp, X } from 'lucide-react';
import RecentlyViewed from './RecentlyViewed';

const QuickActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const actions = [
    {
      icon: Clock,
      label: 'Recently Viewed',
      action: () => {
        setShowRecentlyViewed(true);
        setIsOpen(false);
      }
    },
    {
      icon: ArrowUp,
      label: 'Back to Top',
      action: scrollToTop
    }
  ];

  return (
    <>
      <m.div
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {isOpen && (
            <m.div
              className="absolute bottom-16 right-0 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {actions.map((action, index) => (
                <m.div
                  key={action.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                >
                  <button
                    onClick={action.action}
                    className="flex items-center space-x-3 bg-gray-900/90 backdrop-blur-sm text-white px-3 sm:px-4 py-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all duration-200 border border-gray-700 group min-h-[44px]"
                  >
                    <action.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 flex-shrink-0" />
                    <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">{action.label}</span>
                  </button>
                </m.div>
              ))}
            </m.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center group min-h-[44px] min-w-[44px] ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open quick actions'}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>
      </m.div>

      <RecentlyViewed 
        isOpen={showRecentlyViewed} 
        onClose={() => setShowRecentlyViewed(false)} 
      />
    </>
  );
};

export default QuickActionMenu;
