
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, DollarSign, Globe, Shield, TrendingUp, Coins } from 'lucide-react';

const FinancePage = () => {
  const tokenUseCases = [
    {
      title: "DeFi Protocols",
      description: "Decentralized financial services without traditional intermediaries",
      icon: Coins,
      benefits: ["Permissionless access", "Global availability", "Transparent operations"]
    },
    {
      title: "Asset Tokenization",
      description: "Convert real-world assets into tradeable digital tokens",
      icon: Shield,
      benefits: ["Fractional ownership", "24/7 trading", "Enhanced liquidity"]
    },
    {
      title: "Cross-border Payments",
      description: "Instant, low-cost international money transfers",
      icon: Globe,
      benefits: ["Near-instant settlement", "Lower fees", "No banking hours"]
    }
  ];

  const realWorldExamples = [
    {
      title: "Uniswap",
      description: "Decentralized exchange protocol with over $1B in daily volume",
      impact: "$1.5T+ in total trading volume"
    },
    {
      title: "MakerDAO",
      description: "Decentralized lending protocol backing the DAI stablecoin",
      impact: "$5B+ in collateral locked"
    },
    {
      title: "Compound",
      description: "Automated money market protocol for lending and borrowing",
      impact: "$10B+ in total value locked"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link 
          to="/industries" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Industries
        </Link>

        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 mb-8">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            Finance Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing traditional financial systems through decentralized protocols, creating inclusive and transparent financial services for everyone
          </p>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tokenUseCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <m.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <TrendingUp className="w-3 h-3 text-yellow-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>

        <m.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            DeFi Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realWorldExamples.map((example, index) => (
              <div key={example.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold mb-3 text-yellow-400">{example.title}</h4>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <div className="text-sm text-green-400 font-semibold">{example.impact}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            The Future of Finance is Decentralized
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            DeFi is creating a more open, transparent, and accessible financial system that operates 24/7 without traditional gatekeepers.
          </p>
          <Link
            to="/blockchains"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
          >
            Explore Blockchain Solutions
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default FinancePage;
