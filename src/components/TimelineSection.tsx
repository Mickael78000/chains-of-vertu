
import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const TimelineSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const timelineEvents = [
    {
      year: '1990s',
      title: 'Birth of the Internet',
      description: 'The global network begins to connect the world',
      color: 'from-green-400 to-blue-500',
      bgImage: 'photo-1605810230434-7631ac76ec81'
    },
    {
      year: '2000',
      title: 'Dot-com Crisis',
      description: 'The first major digital economic bubble bursts',
      color: 'from-red-400 to-orange-500',
      bgImage: 'photo-1470813740244-df37b8c1edcb'
    },
    {
      year: '2008',
      title: 'Financial Crisis',
      description: 'Global economic collapse reveals systemic failures',
      color: 'from-gray-400 to-red-600',
      bgImage: 'photo-1526374965328-7f61d4dc18c5'
    },
    {
      year: '2009',
      title: 'Bitcoin Emerges',
      description: 'Satoshi Nakamoto creates the first decentralized currency',
      color: 'from-yellow-400 to-orange-500',
      bgImage: 'photo-1518770660439-4636190af475'
    },
    {
      year: '2015',
      title: 'Ethereum Era',
      description: 'Smart contracts revolutionize blockchain capabilities',
      color: 'from-blue-400 to-purple-500',
      bgImage: 'photo-1461749280684-dccba630e2f6'
    },
    {
      year: '2020',
      title: 'Solana Speed',
      description: 'High-performance blockchain enables mass adoption',
      color: 'from-purple-400 to-pink-500',
      bgImage: 'photo-1487058792275-0ad4aaf24ca7'
    },
    {
      year: '2021',
      title: 'Ethereum Evolution',
      description: 'The Merge transitions Ethereum to Proof of Stake',
      color: 'from-cyan-400 to-blue-500',
      bgImage: 'photo-1488590528505-98d2b5aba04b'
    },
    {
      year: '2022',
      title: 'Polkadot Expansion',
      description: 'Parachains enable seamless cross-chain communication',
      color: 'from-pink-400 to-red-500',
      bgImage: 'photo-1451187580459-43490279c0fa'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Artificial Intelligence merges with blockchain technology',
      color: 'from-indigo-400 to-purple-600',
      bgImage: 'photo-1473177104440-ffee2f376098'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <m.h2 
          className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ paddingBlock: '1cm' }}
        >
          The Digital Evolution
        </m.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />
          
          {timelineEvents.map((event, index) => (
            <m.div
              key={event.year}
              className={`relative mb-20 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10" />
              
              <div className="relative group">
                <div 
                  className="relative h-64 rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${event.bgImage}?auto=format&fit=crop&w=800&q=80)`
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-30 group-hover:opacity-50 transition-all duration-500`} />
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <span className="text-sm font-semibold text-white/80 mb-2">{event.year}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-200 text-lg">{event.description}</p>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
        
        <m.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Future is Now
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stand at the threshold of a new era where AI, VR, and blockchain converge to create unprecedented possibilities for human interaction and value creation.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default TimelineSection;
