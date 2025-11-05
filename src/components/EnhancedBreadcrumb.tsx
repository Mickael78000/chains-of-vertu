
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { m } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<any>;
}

interface EnhancedBreadcrumbProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

const EnhancedBreadcrumb = ({ items = [], showHome = true }: EnhancedBreadcrumbProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (pathSegments.length === 0) return [];

    // Add category level
    if (pathSegments[0]) {
      const category = pathSegments[0];
      breadcrumbs.push({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        href: `/${category}`
      });
    }

    // Add detail level if exists
    if (pathSegments[1]) {
      const detail = pathSegments[1];
      breadcrumbs.push({
        label: detail.charAt(0).toUpperCase() + detail.slice(1).replace(/-/g, ' ')
      });
    }

    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length === 0 && !showHome) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      {showHome && (
        <>
          <Link 
            to="/" 
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          {breadcrumbItems.length > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </>
      )}

      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.href && index < breadcrumbItems.length - 1 ? (
            <Link 
              to={item.href} 
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
            >
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-300 flex items-center">
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              {item.label}
            </span>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default EnhancedBreadcrumb;
