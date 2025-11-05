
import React from 'react';
import { m } from 'framer-motion';
import { ExternalLink, Linkedin, Mail, MapPin, Github, Phone } from 'lucide-react';

const About = () => {
  const professionalJourney = [
    {
      year: '2024',
      title: 'Technical Program Manager',
      company: 'Olympic Games 2024',
      description: 'Delivered 3 key infrastructure projects at 4x typical industry speed with 99.9% uptime during critical global-scale events',
      technologies: ['Agile', 'Infrastructure', 'Team Leadership', 'High-Pressure Delivery']
    },
    {
      year: '2022-2025',
      title: 'Technical Team Lead',
      company: 'ESID-Metz / USID-Lille',
      description: 'Managed 20+ engineers and €4M+ budget, boosting team productivity by 25% through mentorship and structured methodologies',
      technologies: ['Team Management', 'System Integration', 'Security', 'Project Lifecycle']
    },
    {
      year: '2015-2018',
      title: 'Systems Integration Specialist',
      company: 'CETID',
      description: 'Designed high-availability security systems with 99.9% uptime for industrial and government sectors',
      technologies: ['Security Systems', 'Surveillance', 'System Integration', 'Compliance']
    }
  ];

  const blockchainProjects = [
    {
      name: 'Research Token DApp',
      chain: 'Solana',
      description: 'AI-integrated research incentivization platform with custom SPL token economics and multi-sig treasury',
      impact: 'Piloting with 5 active researchers, scalable to 100+ users'
    },
    {
      name: 'EduSign Authentication',
      chain: 'Multi-Chain',
      description: 'Educational credential verification system with cross-chain bridges and role-based access control',
      impact: 'Enterprise-grade security audits and institutional compliance'
    },
    {
      name: 'Multi-Chain DApp Toolkit',
      chain: 'Ethereum / Solana / Polkadot',
      description: 'Comprehensive toolkit for rapid cross-chain application deployment including CRUD DApps, token vesting, and XCM messaging',
      impact: 'Empowering developers across multiple ecosystems'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture */}
          <m.div
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-2 ring-purple-500/40 shadow-2xl shadow-purple-500/30">
                <img
                  src="/founder.JPG"
                  alt="Mickaël Girondeau"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
              <div className="pointer-events-none absolute -inset-3 mx-auto rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl opacity-60 -z-10" />
            </div>
          </m.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mickaël Girondeau
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Web Architect & Blockchain Developer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack blockchain developer specializing in multi-chain decentralized applications spanning Ethereum, Solana, and Polkadot ecosystems
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Versailles, France</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:mickael.girondeau@gmail.com" className="hover:text-purple-400 transition-colors">
                mickael.girondeau@gmail.com
              </a>
            </div>
          </div>
        </m.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Professional Journey</h3>
            <div className="space-y-6">
              {professionalJourney.map((job, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-4 border-purple-500 pl-6 bg-gray-900/30 p-4 rounded-r-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-purple-400">{job.title}</h4>
                    <span className="text-sm text-gray-400">{job.year}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">{job.company}</p>
                  <p className="text-gray-400 mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
            
            <div className="space-y-4 pt-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-lg p-4 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Philosophy</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Like Kandinsky's abstraction revolutionized art, blockchain technology reimagines value and trust. 
                  As Picasso fragmented perspective, I deconstruct traditional systems to build decentralized futures. 
                  With the precision of an ENSAM engineer and the vision of an artist, I craft multi-chain ecosystems 
                  where innovation meets security.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/mickaël-girondeau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Mickael78000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+33 6 26 33 68 10</span>
                </div>
              </div>
            </div>
          </m.div>
          
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Blockchain Projects</h3>
            <div className="space-y-4">
              {blockchainProjects.map((project, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-4 rounded-lg border border-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-cyan-400">{project.name}</h4>
                    <span className="text-sm px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full">{project.chain}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <p className="text-sm text-green-400 italic">{project.impact}</p>
                </m.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 mt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Technical Expertise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="text-purple-400 font-semibold mb-2">Blockchain</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Ethereum / Solidity</li>
                    <li>• Solana / Rust / Anchor</li>
                    <li>• Polkadot / Substrate / ink!</li>
                    <li>• Cross-chain bridges</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-cyan-400 font-semibold mb-2">Development</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• React / Next.js / TypeScript</li>
                    <li>• Node.js / REST APIs</li>
                    <li>• Docker / CI/CD</li>
                    <li>• Smart contract auditing</li>
                  </ul>
                </div>
              </div>
            </div>
          </m.div>
        </div>
        
        <m.div
          className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Build Decentralized Futures
          </h3>
          <p className="text-xl text-gray-300 mb-4">
            ENSAM Engineering Graduate • 15+ Years Technical Leadership
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Specializing in Multi-Chain DApps, Smart Contract Security & Scalable Web3 Architecture
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <m.a
              href="mailto:mickael.girondeau@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </m.a>
            <m.a
              href="https://www.linkedin.com/in/mickaël-girondeau"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-white font-semibold text-lg hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </m.a>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
