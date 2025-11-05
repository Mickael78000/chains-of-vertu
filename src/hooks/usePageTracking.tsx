
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../contexts/NavigationContext';

interface PageInfo {
  title: string;
  category: string;
}

const pageInfoMap: Record<string, PageInfo> = {
  '/': { title: 'Home', category: 'Main' },
  '/industries': { title: 'Industries', category: 'Main' },
  '/blockchains': { title: 'Blockchains', category: 'Main' },
  '/artists': { title: 'Artists', category: 'Main' },
  '/about': { title: 'About', category: 'Main' },
  
  // Industries
  '/industries/research': { title: 'Research', category: 'Industries' },
  '/industries/energy': { title: 'Energy', category: 'Industries' },
  '/industries/finance': { title: 'Finance', category: 'Industries' },
  '/industries/gaming': { title: 'Gaming', category: 'Industries' },
  '/industries/ai': { title: 'AI', category: 'Industries' },
  '/industries/vr': { title: 'VR', category: 'Industries' },
  
  // Blockchains
  '/blockchains/bitcoin': { title: 'Bitcoin', category: 'Blockchains' },
  '/blockchains/solana': { title: 'Solana', category: 'Blockchains' },
  '/blockchains/ethereum': { title: 'Ethereum', category: 'Blockchains' },
  '/blockchains/polkadot': { title: 'Polkadot', category: 'Blockchains' },
  
  // Artists
  '/artists/kandinsky': { title: 'Wassily Kandinsky', category: 'Artists' },
  '/artists/picasso': { title: 'Pablo Picasso', category: 'Artists' },
  '/artists/dali': { title: 'Salvador Dalí', category: 'Artists' },
};

export const usePageTracking = () => {
  const location = useLocation();
  const { addRecentPage } = useNavigation();

  const trackPage = useCallback((pathname: string) => {
    const pageInfo = pageInfoMap[pathname];
    if (pageInfo && pathname !== '/') {
      addRecentPage({
        path: pathname,
        title: pageInfo.title,
        category: pageInfo.category
      });
    }
  }, [addRecentPage]);

  useEffect(() => {
    // Debounce the page tracking to prevent rapid successive calls
    const timer = setTimeout(() => {
      trackPage(location.pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, trackPage]);
};
