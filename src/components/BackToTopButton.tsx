
import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const BackToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          title="Back to top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
