
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, ExternalLink, Zap, Clock, Coins, Code } from 'lucide-react';

const SolanaPage = () => {
  const keyFeatures = [
    {
      title: "Proof of History",
      description: "Innovative consensus mechanism enabling high throughput",
      icon: Clock
    },
    {
      title: "High TPS",
      description: "Capable of processing 65,000+ transactions per second",
      icon: Zap
    },
    {
      title: "Low Fees",
      description: "Transaction costs typically under $0.01",
      icon: Coins
    },
    {
      title: "Developer Friendly",
      description: "Comprehensive tools and documentation for builders",
      icon: Code
    }
  ];

  const technicalSpecs = [
    { label: "Block Time", value: "~0.4 seconds" },
    { label: "Transaction Throughput", value: "65,000+ TPS" },
    { label: "Average Transaction Fee", value: "$0.00025" },
    { label: "Consensus Mechanism", value: "Proof of History + Proof of Stake" },
    { label: "Programming Language", value: "Rust, C, C++" },
    { label: "Total Validators", value: "1,900+" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link 
          to="/blockchains" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blockchains
        </Link>

        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Solana
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            High-performance blockchain designed for mass adoption with blazing fast speeds and low costs
          </p>
          <a
            href="https://solana.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            <span>Visit Official Website</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <div className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={spec.label} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>

        <m.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Core Keywords
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Proof of History', 'High TPS', 'Low Fees', 'Web3'].map((keyword, index) => (
              <div key={keyword} className="bg-gray-900/30 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-800">
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {keyword}
                </span>
              </div>
            ))}
          </div>
        </m.div>

        <m.div
          className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Built for Global Scale
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Solana's innovative architecture enables web-scale applications with consistent performance and low costs, making blockchain accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/industries"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore Use Cases
            </Link>
            <a
              href="https://docs.solana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <span>Developer Docs</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default SolanaPage;
