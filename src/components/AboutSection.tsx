
import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mickaël Girondeau
          </h2>
          <p className="text-2xl text-purple-400 font-semibold mb-4">
            Web Architect & Blockchain Developer
          </p>
          <p className="text-xl text-gray-300">
            Bridging art, technology, and decentralization across Ethereum, Solana, and Polkadot ecosystems
          </p>
        </m.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Expertise Across Chains</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-6 bg-gray-900/30 p-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-orange-400">Ethereum Ecosystem</h4>
                <p className="text-gray-300 mb-2">Solidity smart contracts with Hardhat & OpenZeppelin</p>
                <p className="text-sm text-gray-400">Token vesting, CRUD DApps, security auditing</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 bg-gray-900/30 p-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-purple-400">Solana Ecosystem</h4>
                <p className="text-gray-300 mb-2">Rust & Anchor framework, SPL tokens, Blinks</p>
                <p className="text-sm text-gray-400">Research Token DApp with AI integration</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6 bg-gray-900/30 p-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-pink-400">Polkadot Ecosystem</h4>
                <p className="text-gray-300 mb-2">Substrate parachains, ink! contracts, XCM messaging</p>
                <p className="text-sm text-gray-400">Cross-chain bridges & interoperability</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-500/30">
              <h4 className="text-lg font-semibold text-white mb-2">Technical Leadership</h4>
              <p className="text-gray-300 text-sm">
                15+ years managing complex projects • ENSAM Engineering Graduate • Led 20+ engineers with €4M+ budget • 
                Olympic Games 2024 Technical Program Manager delivering at 4x industry speed
              </p>
            </div>
          </m.div>
          
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Where Art Meets Code</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Like Kandinsky's abstraction freed art from representation, blockchain liberates value from centralization. 
              As Picasso fragmented perspective to reveal deeper truths, I deconstruct traditional systems to architect 
              decentralized futures. With the surreal vision of Dalí and the engineering precision of ENSAM, I craft 
              multi-chain ecosystems where innovation dances with security.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Recent Achievements</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <span className="text-purple-400">Research Token DApp:</span> AI-powered incentivization platform on Solana</li>
                <li>• <span className="text-blue-400">EduSign:</span> Multi-chain credential verification with cross-chain bridges</li>
                <li>• <span className="text-pink-400">Cloud Infrastructure:</span> 60% resource reduction, 99.9% uptime</li>
                <li>• <span className="text-orange-400">Multi-Chain Toolkit:</span> Rapid deployment across 3 ecosystems</li>
              </ul>
            </div>
          </m.div>
        </div>
        
        <m.div
          className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Engineering Decentralized Innovation
          </h3>
          <p className="text-xl text-gray-300 mb-4">
            From Olympic-scale infrastructure to cutting-edge DApps
          </p>
          <p className="text-gray-400 mb-8">
            Ethereum • Solana • Polkadot • Smart Contract Security • Cross-Chain Architecture
          </p>
          <Link to="/about" className="inline-block">
            <m.span
              className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </m.span>
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default AboutSection;
