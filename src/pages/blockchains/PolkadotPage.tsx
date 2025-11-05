
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, ExternalLink, Network, Zap, Shield, Layers } from 'lucide-react';

const PolkadotPage = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Polkadot
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Multi-chain protocol enabling blockchain interoperability and scalability
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Network className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Parachains</h3>
              <p className="text-gray-400">
                Specialized blockchains running in parallel, each optimized for specific use cases while sharing security.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Zap className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cross-Chain</h3>
              <p className="text-gray-400">
                Native interoperability allowing seamless transfer of any data or asset between blockchains.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Shield className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shared Security</h3>
              <p className="text-gray-400">
                Unified security model where all parachains benefit from the collective security of the relay chain.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <Layers className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Substrate Framework</h3>
              <p className="text-gray-400">
                Modular framework for building custom blockchains with out-of-the-box networking and consensus.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Heterogeneous Sharding</h4>
                <p className="text-gray-400">
                  Multiple specialized chains (parachains) process transactions in parallel, dramatically increasing throughput and scalability.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">On-Chain Governance</h4>
                <p className="text-gray-400">
                  Democratic governance system allowing stakeholders to vote on network upgrades and parameter changes without hard forks.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Nominated Proof of Stake</h4>
                <p className="text-gray-400">
                  Energy-efficient consensus mechanism where nominators back validators, ensuring network security and decentralization.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Forkless Upgrades</h4>
                <p className="text-gray-400">
                  On-chain WebAssembly meta-protocol enables seamless upgrades without disruptive hard forks.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://polkadot.network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <span>Official Website</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://wiki.polkadot.network"
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

export default PolkadotPage;
