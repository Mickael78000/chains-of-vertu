
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, ExternalLink, Layers, Code, Shield, Globe } from 'lucide-react';

const EthereumPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/blockchains" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blockchains
        </Link>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ethereum
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            The world's leading programmable blockchain and smart contract platform
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Layers className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-400">
                Pioneering programmable blockchain with Turing-complete smart contracts enabling decentralized applications.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">EVM Ecosystem</h3>
              <p className="text-gray-400">
                Ethereum Virtual Machine powers thousands of dApps, DeFi protocols, and NFT marketplaces.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proof of Stake</h3>
              <p className="text-gray-400">
                Transitioned to energy-efficient PoS consensus with The Merge, reducing energy consumption by 99.95%.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-400">
                Largest developer community and most established smart contract ecosystem with extensive tooling.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Decentralized Finance (DeFi)</h4>
                <p className="text-gray-400">
                  Home to the largest DeFi ecosystem with protocols like Uniswap, Aave, MakerDAO, and Compound managing billions in TVL.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">NFTs and Digital Assets</h4>
                <p className="text-gray-400">
                  The primary platform for NFTs with standards like ERC-721 and ERC-1155, powering digital art, gaming, and collectibles.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Layer 2 Scaling</h4>
                <p className="text-gray-400">
                  Extensive L2 ecosystem including Arbitrum, Optimism, Polygon, and zkSync providing scalability while maintaining security.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Developer Ecosystem</h4>
                <p className="text-gray-400">
                  Rich tooling with Solidity, Hardhat, Truffle, and Web3.js supporting millions of developers worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://ethereum.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span>Official Website</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://docs.ethereum.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span>Documentation</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default EthereumPage;
