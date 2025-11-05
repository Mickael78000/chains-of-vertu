
import React, { createContext, useContext, ReactNode, memo } from 'react';
import { useRecentlyViewed, RecentPage } from '../hooks/useRecentlyViewed';

interface NavigationContextType {
  recentPages: RecentPage[];
  addRecentPage: (page: Omit<RecentPage, 'visitedAt'>) => void;
  clearRecentPages: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const NavigationProviderComponent = ({ children }: { children: ReactNode }) => {
  const recentlyViewed = useRecentlyViewed();

  return (
    <NavigationContext.Provider value={recentlyViewed}>
      {children}
    </NavigationContext.Provider>
  );
};

export const NavigationProvider = memo(NavigationProviderComponent);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
