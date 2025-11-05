
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, X } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

interface RecentlyViewedProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecentlyViewed = ({ isOpen, onClose }: RecentlyViewedProps) => {
  const { recentPages, clearRecentPages } = useNavigation();

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Artists': 'from-pink-400 to-purple-500',
      'Blockchains': 'from-blue-400 to-cyan-500',
      'Industries': 'from-green-400 to-emerald-500',
      'Main': 'from-purple-400 to-indigo-500'
    };
    return colors[category] || 'from-gray-400 to-gray-500';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            className="fixed top-20 right-6 w-96 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl z-50 max-h-[70vh] overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Recently Viewed</h3>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-96">
              {recentPages.length === 0 ? (
                <div className="p-6 text-center text-gray-400">
                  No recently viewed pages
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {recentPages.map((page, index) => (
                    <Link
                      key={`${page.path}-${page.visitedAt}`}
                      to={page.path}
                      onClick={onClose}
                      className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/50 hover:border-gray-600"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-white">{page.title}</div>
                          <div className="flex items-center justify-between mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(page.category)} text-white`}>
                              {page.category}
                            </span>
                            <span className="text-xs text-gray-400">
                              {formatTimeAgo(page.visitedAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {recentPages.length > 0 && (
              <div className="p-4 border-t border-gray-800">
                <button
                  onClick={() => {
                    clearRecentPages();
                    onClose();
                  }}
                  className="w-full py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Clear All
                </button>
              </div>
            )}
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecentlyViewed;
