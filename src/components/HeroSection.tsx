
import React, { useEffect, useRef } from 'react';
import { m, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMobileDetection } from '../hooks/useMobileDetection';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const { isMobile, isLowEnd } = useMobileDetection();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reduce particles significantly on mobile/low-end devices
    const particleCount = isLowEnd ? 15 : isMobile ? 25 : 100;
    const connectionDistance = isMobile ? 60 : 100;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5),
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    let animationId: number;
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();

        // Draw connections (reduce on mobile)
        if (!isLowEnd) {
          particles.forEach((otherParticle, j) => {
            if (i !== j) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (connectionDistance - distance) / connectionDistance})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile, isLowEnd]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <m.h1 
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Blockchain
          <br />
          Revolution
        </m.h1>
        
        <m.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Tokenizing the future through 
          <br />
          Bitcoin, Ethereum, Solana & Polkadot ecosystems
        </m.p>
        
        <m.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { name: 'Research', path: '/industries/research' },
            { name: 'Energy', path: '/industries/energy' },
            { name: 'Finance', path: '/industries/finance' },
            { name: 'Gaming', path: '/industries/gaming' },
            { name: 'AI', path: '/industries/ai' },
            { name: 'VR', path: '/industries/vr' }
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm hover:bg-purple-800/30 hover:border-purple-400/50 transition-all duration-300 min-h-[44px] flex items-center justify-center min-w-[80px]"
            >
              {item.name}
            </Link>
          ))}
        </m.div>
      </div>
      
      <m.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
      </m.div>
    </section>
  );
};

export default HeroSection;
