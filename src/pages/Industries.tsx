
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight, Zap, Cpu, DollarSign, Gamepad2, Brain, Glasses } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 'research',
      title: 'Research',
      icon: Brain,
      description: 'Tokenizing scientific breakthroughs and intellectual property',
      gradient: 'from-blue-400 to-purple-500',
      tokenUses: ['IP tokenization', 'Research funding', 'Data sharing incentives']
    },
    {
      id: 'energy',
      title: 'Energy',
      icon: Zap,
      description: 'Democratizing renewable energy through blockchain',
      gradient: 'from-green-400 to-blue-500',
      tokenUses: ['Carbon credits', 'Energy trading', 'Grid optimization']
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: DollarSign,
      description: 'Revolutionizing traditional financial systems',
      gradient: 'from-yellow-400 to-green-500',
      tokenUses: ['DeFi protocols', 'Asset tokenization', 'Cross-border payments']
    },
    {
      id: 'gaming',
      title: 'Gaming',
      icon: Gamepad2,
      description: 'Creating true digital ownership in virtual worlds',
      gradient: 'from-red-400 to-pink-500',
      tokenUses: ['NFT assets', 'Play-to-earn', 'Virtual economies']
    },
    {
      id: 'ai',
      title: 'AI',
      icon: Cpu,
      description: 'Incentivizing AI development and data sharing',
      gradient: 'from-indigo-400 to-purple-500',
      tokenUses: ['Model training rewards', 'Data marketplaces', 'AI compute sharing']
    },
    {
      id: 'vr',
      title: 'VR',
      icon: Glasses,
      description: 'Building immersive metaverse experiences',
      gradient: 'from-pink-400 to-cyan-500',
      tokenUses: ['Virtual real estate', 'Avatar economies', 'Experience tokens']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Industry Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how blockchain tokenization is revolutionizing industries and creating new economic models
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <m.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={`/industries/${industry.id}`}
                  className="group block bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${industry.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {industry.tokenUses.map((use, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3" />
                        {use}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
