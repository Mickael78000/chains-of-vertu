
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Zap, Leaf, TrendingUp, Users, Battery } from 'lucide-react';

const EnergyPage = () => {
  const tokenUseCases = [
    {
      title: "Carbon Credits",
      description: "Tokenize carbon offsets for transparent environmental impact trading",
      icon: Leaf,
      benefits: ["Verified emissions reduction", "Global marketplace", "Real-time tracking"]
    },
    {
      title: "Energy Trading",
      description: "Peer-to-peer renewable energy trading between producers and consumers",
      icon: TrendingUp,
      benefits: ["Direct energy sales", "Dynamic pricing", "Grid optimization"]
    },
    {
      title: "Grid Optimization",
      description: "Incentivize energy storage and demand response through token rewards",
      icon: Battery,
      benefits: ["Load balancing", "Peak shaving", "Renewable integration"]
    }
  ];

  const realWorldExamples = [
    {
      title: "Power Ledger",
      description: "Blockchain platform enabling peer-to-peer energy trading",
      impact: "50+ energy trading trials worldwide"
    },
    {
      title: "Energy Web Chain",
      description: "Purpose-built blockchain for the energy sector",
      impact: "100+ energy companies using the platform"
    },
    {
      title: "WePower",
      description: "Tokenized renewable energy trading platform",
      impact: "€500M+ in energy contracts tokenized"
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Energy Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Democratizing renewable energy through blockchain technology, creating sustainable economic models for clean energy adoption
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-3 h-3 text-green-400 mr-2" />
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realWorldExamples.map((example, index) => (
              <div key={example.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold mb-3 text-green-400">{example.title}</h4>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <div className="text-sm text-blue-400 font-semibold">{example.impact}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Powering a Sustainable Future
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Blockchain technology is enabling the transition to renewable energy by creating transparent, efficient markets for clean energy trading and carbon reduction.
          </p>
          <Link
            to="/blockchains"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
          >
            Explore Blockchain Solutions
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default EnergyPage;
