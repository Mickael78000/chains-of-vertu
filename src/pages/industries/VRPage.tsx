import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Glasses, Home, Users, Coins, Sparkles } from 'lucide-react';
import BreadcrumbNav from '../../components/BreadcrumbNav';

const VRPage = () => {
  const tokenUseCases = [
    {
      title: "Virtual Real Estate",
      description: "Own, develop, and monetize virtual land in immersive metaverse worlds",
      icon: Home,
      benefits: ["Digital ownership", "Development rights", "Rental income"]
    },
    {
      title: "Avatar Economies",
      description: "Create, customize, and trade digital identities and wearables",
      icon: Users,
      benefits: ["Personal expression", "Social status", "Cross-platform assets"]
    },
    {
      title: "Experience Tokens",
      description: "Access exclusive VR experiences and events through token ownership",
      icon: Sparkles,
      benefits: ["VIP access", "Exclusive content", "Community membership"]
    }
  ];

  const realWorldExamples = [
    {
      title: "Horizon Worlds",
      description: "Meta's social VR platform with virtual world creation tools",
      impact: "300,000+ virtual worlds created"
    },
    {
      title: "VRChat",
      description: "Social VR platform with user-generated content and avatars",
      impact: "25M+ registered users"
    },
    {
      title: "Somnium Space",
      description: "Open, social, and persistent VR world built on blockchain",
      impact: "5,000+ virtual land parcels sold"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <BreadcrumbNav items={[
          { label: 'Industries', href: '/industries' },
          { label: 'VR & Metaverse' }
        ]} />

        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-cyan-500 mb-8">
            <Glasses className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            VR Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building immersive metaverse experiences through blockchain technology, creating new realities where digital ownership and virtual economies thrive
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-cyan-500 mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <Sparkles className="w-3 h-3 text-pink-400 mr-2" />
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Leading VR Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realWorldExamples.map((example, index) => (
              <div key={example.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold mb-3 text-pink-400">{example.title}</h4>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <div className="text-sm text-cyan-400 font-semibold">{example.impact}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            The Future is Virtual
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            VR and blockchain technology are converging to create persistent virtual worlds where digital experiences have real economic value and true ownership.
          </p>
          <Link
            to="/blockchains"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
          >
            Explore Blockchain Solutions
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default VRPage;
