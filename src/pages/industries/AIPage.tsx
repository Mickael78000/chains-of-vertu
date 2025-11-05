
import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Cpu, Database, Network, TrendingUp, Zap } from 'lucide-react';

const AIPage = () => {
  const tokenUseCases = [
    {
      title: "Model Training Rewards",
      description: "Incentivize distributed AI model training through token rewards",
      icon: Cpu,
      benefits: ["Decentralized compute", "Fair compensation", "Global participation"]
    },
    {
      title: "Data Marketplaces",
      description: "Monetize high-quality datasets for AI training purposes",
      icon: Database,
      benefits: ["Data sovereignty", "Quality verification", "Privacy preservation"]
    },
    {
      title: "AI Compute Sharing",
      description: "Share GPU resources and computational power for AI workloads",
      icon: Network,
      benefits: ["Resource optimization", "Cost reduction", "Accessible AI"]
    }
  ];

  const realWorldExamples = [
    {
      title: "Render Network",
      description: "Decentralized GPU rendering network powered by blockchain tokens",
      impact: "10,000+ GPUs in the network"
    },
    {
      title: "Ocean Protocol",
      description: "Decentralized data exchange for AI and analytics",
      impact: "1,000+ datasets published"
    },
    {
      title: "SingularityNET",
      description: "Decentralized AI marketplace for AI services and algorithms",
      impact: "100+ AI services available"
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            AI Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Incentivizing AI development and data sharing through blockchain tokens, creating decentralized AI ecosystems that democratize artificial intelligence
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-3 h-3 text-indigo-400 mr-2" />
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Leading AI Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realWorldExamples.map((example, index) => (
              <div key={example.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold mb-3 text-indigo-400">{example.title}</h4>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <div className="text-sm text-purple-400 font-semibold">{example.impact}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Democratizing Artificial Intelligence
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Blockchain technology is breaking down barriers to AI development, creating incentive structures that promote collaboration and innovation in artificial intelligence.
          </p>
          <Link
            to="/blockchains"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Explore Blockchain Solutions
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default AIPage;
