
import { useState, useEffect, useCallback, useMemo } from 'react';

export interface RecentPage {
  path: string;
  title: string;
  category: string;
  visitedAt: number;
}

const STORAGE_KEY = 'recentlyViewed';
const MAX_RECENT_PAGES = 8;

export const useRecentlyViewed = () => {
  const [recentPages, setRecentPages] = useState<RecentPage[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRecentPages(parsed);
      } catch (error) {
        console.error('Failed to parse recently viewed pages:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const addRecentPage = useCallback((page: Omit<RecentPage, 'visitedAt'>) => {
    const newPage: RecentPage = {
      ...page,
      visitedAt: Date.now()
    };

    setRecentPages(prev => {
      // Remove existing entry for the same path
      const filtered = prev.filter(p => p.path !== page.path);
      
      // Add new page at the beginning
      const updated = [newPage, ...filtered].slice(0, MAX_RECENT_PAGES);
      
      // Batch localStorage update
      requestIdleCallback(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      });
      
      return updated;
    });
  }, []);

  const clearRecentPages = useCallback(() => {
    setRecentPages([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const memoizedPages = useMemo(() => recentPages, [recentPages]);

  return {
    recentPages: memoizedPages,
    addRecentPage,
    clearRecentPages
  };
};
