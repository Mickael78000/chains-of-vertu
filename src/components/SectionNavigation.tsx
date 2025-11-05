
import React from 'react';
import { m } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SectionNavigation = () => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'art', label: 'Art' },
    { id: 'about', label: 'About' }
  ];

  const { activeSection, scrollToSection } = useScrollSpy(sections.map(s => s.id));

  return (
    <m.div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-full p-3 border border-gray-800">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-purple-500 scale-125'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            title={section.label}
          />
        ))}
      </div>
    </m.div>
  );
};

export default SectionNavigation;
