
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search, Briefcase, Palette, User, Home } from 'lucide-react';

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const searchItems = [
    // Pages
    { title: 'Home', url: '/', icon: Home, category: 'Pages' },
    { title: 'About', url: '/about', icon: User, category: 'Pages' },
    
    // Industries
    { title: 'All Industries', url: '/industries', icon: Briefcase, category: 'Industries' },
    { title: 'Research & Development', url: '/industries/research', icon: Briefcase, category: 'Industries' },
    { title: 'Energy & Sustainability', url: '/industries/energy', icon: Briefcase, category: 'Industries' },
    { title: 'Finance & DeFi', url: '/industries/finance', icon: Briefcase, category: 'Industries' },
    { title: 'Gaming & NFTs', url: '/industries/gaming', icon: Briefcase, category: 'Industries' },
    { title: 'AI & Machine Learning', url: '/industries/ai', icon: Briefcase, category: 'Industries' },
    { title: 'VR & Metaverse', url: '/industries/vr', icon: Briefcase, category: 'Industries' },
    
    // Blockchains
    { title: 'All Blockchains', url: '/blockchains', icon: Briefcase, category: 'Blockchains' },
    { title: 'Bitcoin', url: '/blockchains/bitcoin', icon: Briefcase, category: 'Blockchains' },
    { title: 'Solana', url: '/blockchains/solana', icon: Briefcase, category: 'Blockchains' },
    { title: 'Ethereum', url: '/blockchains/ethereum', icon: Briefcase, category: 'Blockchains' },
    { title: 'Polkadot', url: '/blockchains/polkadot', icon: Briefcase, category: 'Blockchains' },
    
    // Artists
    { title: 'All Artists', url: '/artists', icon: Palette, category: 'Artists' },
    { title: 'Wassily Kandinsky', url: '/artists/kandinsky', icon: Palette, category: 'Artists' },
    { title: 'Pablo Picasso', url: '/artists/picasso', icon: Palette, category: 'Artists' },
    { title: 'Salvador Dalí', url: '/artists/dali', icon: Palette, category: 'Artists' },
  ];

  const handleSelect = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  const groupedItems = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchItems>);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:block">Search...</span>
        <kbd className="hidden md:block pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="bg-gray-900 border-gray-800">
          <CommandInput placeholder="Search pages, industries, blockchains, artists..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(groupedItems).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <CommandItem
                      key={item.url}
                      onSelect={() => handleSelect(item.url)}
                      className="cursor-pointer"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;
