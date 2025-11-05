
import React, { useEffect, useState } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import ProjectsSection from '@/components/ProjectsSection';
import MobileProjectsSection from '@/components/MobileProjectsSection';
import ArtSection from '@/components/ArtSection';
import AboutSection from '@/components/AboutSection';
import SectionNavigation from '@/components/SectionNavigation';
import PageTransition from '@/components/PageTransition';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const { isMobile } = useMobileDetection();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Throttle scroll updates for better performance on mobile
    let ticking = false;
    
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = Math.floor(latest * 5);
          setCurrentSection(section);
          ticking = false;
        });
        ticking = true;
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <PageTransition>
      <div className="bg-black text-white overflow-x-hidden">
        <SectionNavigation />
        
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="timeline">
          <TimelineSection />
        </div>
        
        <div id="projects">
          {isMobile ? <MobileProjectsSection /> : <ProjectsSection />}
        </div>
        
        <div id="art">
          <ArtSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        {/* Progress indicator - optimized for mobile */}
        <m.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-50"
          style={{ 
            scaleX: isMobile ? scaleX : scrollYProgress 
          }}
          initial={{ scaleX: 0 }}
        />
      </div>
    </PageTransition>
  );
};

export default Index;
