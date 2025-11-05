
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Blockchains = () => {
  const blockchains = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      description: 'The original cryptocurrency and store of value',
      gradient: 'from-yellow-400 to-orange-500',
      website: 'https://bitcoin.org',
      keywords: ['Proof of Work', 'Digital Gold', 'Lightning Network', 'HODL'],
      features: ['Decentralized', 'Secure', 'Immutable', 'Limited Supply']
    },
    {
      id: 'solana',
      name: 'Solana',
      description: 'High-performance blockchain for mass adoption',
      gradient: 'from-purple-400 to-pink-500',
      website: 'https://solana.com',
      keywords: ['Proof of History', 'High TPS', 'Low Fees', 'Web3'],
      features: ['Fast', 'Scalable', 'Developer-Friendly', 'Energy Efficient']
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      description: 'Leading smart contract platform and DeFi ecosystem',
      gradient: 'from-cyan-400 to-blue-500',
      website: 'https://ethereum.org',
      keywords: ['Smart Contracts', 'DeFi', 'NFTs', 'dApps'],
      features: ['Decentralized', 'Programmable', 'EVM', 'Proof of Stake']
    },
    {
      id: 'polkadot',
      name: 'Polkadot',
      description: 'Multi-chain network enabling blockchain interoperability',
      gradient: 'from-pink-400 to-red-500',
      website: 'https://polkadot.network',
      keywords: ['Parachains', 'Interoperability', 'Scalability', 'Governance'],
      features: ['Cross-Chain', 'Shared Security', 'Upgradeable', 'Scalable']
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
            Blockchain Ecosystems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the leading blockchain networks powering the future of decentralized technology
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blockchains.map((blockchain, index) => (
            <m.div
              key={blockchain.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1/*, delay: index * 0.1 */}}
              className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${blockchain.gradient} bg-clip-text text-transparent`}>
                  {blockchain.name}
                </h3>
                <a
                  href={blockchain.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-gray-300 mb-6">{blockchain.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {blockchain.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${blockchain.gradient} mr-3`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {blockchain.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${blockchain.gradient} text-white`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to={`/blockchains/${blockchain.id}`}
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blockchains;
