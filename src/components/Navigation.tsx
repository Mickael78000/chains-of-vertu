
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Palette, User, Mail, Menu, X, Network } from 'lucide-react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

interface NavigationProps {
  forceShow?: boolean;
}

const Navigation = ({ forceShow = false }: NavigationProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useMobileDetection();

  const allNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/industries', label: 'Industries', icon: Briefcase },
    { path: '/blockchains', label: 'Blockchains', icon: Network },
    { path: '/artists', label: 'Artists', icon: Palette },
    { path: '/about', label: 'About', icon: User },
  ];

  // Filter navigation items for mobile
  const navItems = isMobile 
    ? allNavItems.filter(item => 
        !['/', '/industries', '/about'].includes(item.path)
      )
    : allNavItems;

  if (location.pathname === '/' && !forceShow) return null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const prefetchMap: Record<string, () => Promise<unknown>> = {
    '/': () => import('../pages/Index'),
    '/industries': () => import('../pages/Industries'),
    '/blockchains': () => import('../pages/Blockchains'),
    '/artists': () => import('../pages/Artists'),
    '/about': () => import('../pages/About'),
  };

  const handlePrefetch = (path: string) => {
    const fn = prefetchMap[path];
    if (fn) fn();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              onClick={closeMobileMenu}
            >
              Blockchain Revolution
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || 
                               (item.path !== '/' && location.pathname.startsWith(item.path));
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onMouseEnter={() => handlePrefetch(item.path)}
                    onFocus={() => handlePrefetch(item.path)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 min-h-[44px] ${
                      isActive 
                        ? 'bg-purple-600/20 text-purple-300' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            <m.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-800 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <h2 className="text-lg font-semibold text-white">Navigation</h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path || 
                                     (item.path !== '/' && location.pathname.startsWith(item.path));
                      
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMobileMenu}
                          onMouseEnter={() => handlePrefetch(item.path)}
                          onFocus={() => handlePrefetch(item.path)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 min-h-[44px] ${
                            isActive 
                              ? 'bg-purple-600/20 text-purple-300' 
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-base">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
