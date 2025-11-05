
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { m } from 'framer-motion';

interface NavigationItem {
  path: string;
  title: string;
  category?: string;
}

interface NextPrevNavigationProps {
  category: 'artists' | 'blockchains' | 'industries';
  currentPath: string;
}

const NextPrevNavigation = ({ category, currentPath }: NextPrevNavigationProps) => {
  const categoryItems: Record<string, NavigationItem[]> = {
    artists: [
      { path: '/artists/kandinsky', title: 'Wassily Kandinsky', category: 'Abstract Art' },
      { path: '/artists/picasso', title: 'Pablo Picasso', category: 'Cubism' },
      { path: '/artists/dali', title: 'Salvador Dalí', category: 'Surrealism' }
    ],
    blockchains: [
      { path: '/blockchains/bitcoin', title: 'Bitcoin', category: 'Original Blockchain' },
      { path: '/blockchains/solana', title: 'Solana', category: 'High Performance' },
      { path: '/blockchains/ethereum', title: 'Ethereum', category: 'Smart Contracts' },
      { path: '/blockchains/polkadot', title: 'Polkadot', category: 'Interoperability' }
    ],
    industries: [
      { path: '/industries/research', title: 'Research', category: 'Scientific' },
      { path: '/industries/energy', title: 'Energy', category: 'Sustainable' },
      { path: '/industries/finance', title: 'Finance', category: 'Revolutionary' },
      { path: '/industries/gaming', title: 'Gaming', category: 'Next-gen' },
      { path: '/industries/ai', title: 'AI', category: 'Enhanced' },
      { path: '/industries/vr', title: 'VR', category: 'Immersive' }
    ]
  };

  const items = categoryItems[category] || [];
  const currentIndex = items.findIndex(item => item.path === currentPath);
  
  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
      <div className="flex-1">
        {prevItem && (
          <Link
            to={prevItem.path}
            className="group inline-flex items-center space-x-3 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-600"
          >
            <ArrowLeft className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <div>
              <div className="text-sm text-gray-400">Previous</div>
              <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                {prevItem.title}
              </div>
              {prevItem.category && (
                <div className="text-xs text-gray-500">{prevItem.category}</div>
              )}
            </div>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextItem && (
          <Link
            to={nextItem.path}
            className="group inline-flex items-center space-x-3 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-600 text-right"
          >
            <div>
              <div className="text-sm text-gray-400">Next</div>
              <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                {nextItem.title}
              </div>
              {nextItem.category && (
                <div className="text-xs text-gray-500">{nextItem.category}</div>
              )}
            </div>
            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NextPrevNavigation;
