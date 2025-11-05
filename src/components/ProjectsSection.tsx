
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [activeEcosystem, setActiveEcosystem] = useState('bitcoin');

  const ecosystems = {
    bitcoin: {
      name: 'Bitcoin',
      color: 'from-orange-400 to-yellow-500',
      description: 'The foundation of digital sovereignty and store of value',
      projects: [
        {
          title: 'Lightning Network Integration',
          description: 'Instant micropayments for content creators',
          tech: ['Bitcoin', 'Lightning', 'TypeScript']
        },
        {
          title: 'Bitcoin Treasury Management',
          description: 'Corporate Bitcoin adoption platform',
          tech: ['Bitcoin', 'Multi-sig', 'React']
        }
      ]
    },
    ethereum: {
      name: 'Ethereum',
      color: 'from-cyan-400 to-blue-500',
      description: 'Leading smart contract platform powering DeFi and Web3',
      projects: [
        {
          title: 'DeFi Aggregator',
          description: 'Multi-protocol yield optimizer across major DeFi platforms',
          tech: ['Ethereum', 'Solidity', 'Hardhat']
        },
        {
          title: 'NFT Marketplace',
          description: 'Decentralized marketplace for digital art and collectibles',
          tech: ['Ethereum', 'ERC-721', 'IPFS']
        }
      ]
    },
    solana: {
      name: 'Solana',
      color: 'from-purple-400 to-pink-500',
      description: 'High-performance blockchain for mass adoption',
      projects: [
        {
          title: 'DeFi Yield Aggregator',
          description: 'Automated yield farming across Solana protocols',
          tech: ['Solana', 'Rust', 'Anchor']
        },
        {
          title: 'Memecoins',
          description: 'Creator-focused marketplace with Pump.fun',
          tech: ['Solana', 'Metaplex', 'React']
        }
      ]
    },
    polkadot: {
      name: 'Polkadot',
      color: 'from-pink-400 to-red-500',
      description: 'Multi-chain network enabling seamless blockchain interoperability',
      projects: [
        {
          title: 'Cross-Chain DEX',
          description: 'Decentralized exchange bridging assets across parachains',
          tech: ['Polkadot', 'Substrate', 'Rust']
        },
        {
          title: 'Parachain Governance',
          description: 'On-chain governance platform for parachain communities',
          tech: ['Polkadot', 'ink!', 'WebAssembly']
        }
      ]
    }
  };

  const total = ecosystems[activeEcosystem].projects.length;

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <m.h2 
          className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blockchain Ecosystems
        </m.h2>
        
        {/* Ecosystem selector */}
        <div className="flex justify-center mb-16 overflow-x-auto md:overflow-visible">
          <div className="flex bg-gray-900/50 rounded-full p-2 backdrop-blur-sm">
            {Object.entries(ecosystems).map(([key, ecosystem]) => (
              <button
                key={key}
                onClick={() => setActiveEcosystem(key)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeEcosystem === key 
                    ? `bg-gradient-to-r ${ecosystem.color} text-white` 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {ecosystem.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active ecosystem content */}
        <m.div
          key={activeEcosystem}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="relative group inline-block text-4xl font-bold mb-4">
            <div className={`absolute -inset-2 bg-gradient-to-r ${ecosystems[activeEcosystem].color} opacity-0 group-hover:opacity-40 blur-3xl rounded-lg transition-all duration-300`} />
            <Link to={`/blockchains/${activeEcosystem}`} className={`relative bg-gradient-to-r ${ecosystems[activeEcosystem].color} bg-clip-text text-transparent hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded`}>
              {ecosystems[activeEcosystem].name} Ecosystem
            </Link>
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {ecosystems[activeEcosystem].description}
          </p>
        </m.div>
        

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/** Calculate total to stagger from bottom-to-top */}
          {(() => { const total = ecosystems[activeEcosystem].projects.length; return null; })()}
          {ecosystems[activeEcosystem].projects.map((project, index) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (total - 1 - index) * 0.06 }}
              className="group relative bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${ecosystems[activeEcosystem].color.split(' ')[1]}, ${ecosystems[activeEcosystem].color.split(' ')[3]})`}}>
                {project.title}
              </h4>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
