
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Bitcoin, CircleDollarSign, Zap, Hexagon } from 'lucide-react';

const MobileProjectsSection = () => {
  const [activeEcosystem, setActiveEcosystem] = useState('bitcoin');

  const ecosystems = {
    bitcoin: {
      name: 'Bitcoin',
      symbol: '₿',
      color: 'from-orange-400 to-yellow-500',
      description: 'Digital Gold',
      icon: Bitcoin
    },
    solana: {
      name: 'Solana',
      symbol: 'SOL',
      color: 'from-purple-400 to-pink-500',
      description: 'High Performance',
      icon: Zap
    },
    ethereum: {
      name: 'Ethereum',
      symbol: 'ETH',
      color: 'from-cyan-400 to-blue-500',
      description: 'Smart Contracts',
      icon: Hexagon
    },
    polkadot: {
      name: 'Polkadot',
      symbol: 'DOT',
      color: 'from-pink-400 to-red-500',
      description: 'Interoperability',
      icon: CircleDollarSign
    }
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <m.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Blockchain Ecosystems
        </m.h2>
        
        {/* Mobile-optimized ecosystem grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {Object.entries(ecosystems).map(([key, ecosystem]) => {
            const Icon = ecosystem.icon;
            return (
              <m.button
                key={key}
                onClick={() => setActiveEcosystem(key)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeEcosystem === key 
                    ? `bg-gradient-to-r ${ecosystem.color}` 
                    : 'bg-gray-900/50 hover:bg-gray-800/50'
                }`}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Icon className="w-8 h-8 text-white" />
                  <div className="text-2xl font-bold text-white">
                    {ecosystem.symbol}
                  </div>
                  <div className="text-sm text-white/80 text-center">
                    {ecosystem.name}
                  </div>
                  <div className="text-xs text-white/60 text-center">
                    {ecosystem.description}
                  </div>
                </div>
              </m.button>
            );
          })}
        </div>
        
        {/* Active ecosystem details */}
        <m.div
          key={activeEcosystem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
        >
          <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${ecosystems[activeEcosystem].color} bg-clip-text text-transparent`}>
            {ecosystems[activeEcosystem].name}
          </h3>
          <p className="text-lg text-gray-300">
            Explore the {ecosystems[activeEcosystem].name} ecosystem and its innovative blockchain solutions.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default MobileProjectsSection;
