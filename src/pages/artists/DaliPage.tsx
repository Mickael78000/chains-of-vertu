import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Calendar, Palette, MapPin, Award } from 'lucide-react';
import NextPrevNavigation from '../../components/NextPrevNavigation';

const DaliPage = () => {
  const timelineEvents = [
    { year: '1904', event: 'Born in Figueres, Catalonia, Spain' },
    { year: '1922', event: 'Enrolled at Royal Academy of Fine Arts in Madrid' },
    { year: '1929', event: 'Joined the Surrealist movement in Paris' },
    { year: '1931', event: 'Painted The Persistence of Memory (melting clocks)' },
    { year: '1940', event: 'Fled to United States during World War II' },
    { year: '1948', event: 'Returned to Spain, developed "Nuclear Mysticism"' },
    { year: '1974', event: 'Opened Dalí Theatre-Museum in Figueres' },
    { year: '1989', event: 'Died in Figueres, buried in his museum' }
  ];

  const famousWorks = [
    {
      title: 'The Persistence of Memory',
      year: '1931',
      description: 'Iconic surrealist painting featuring melting clocks',
      significance: 'Most recognizable surrealist artwork ever created'
    },
    {
      title: 'Dream Caused by the Flight of a Bee',
      year: '1944',
      description: 'Complex dream sequence with floating elements',
      significance: 'Perfect example of dream logic in visual form'
    },
    {
      title: 'Metamorphosis of Narcissus',
      year: '1937',
      description: 'Double image showing transformation themes',
      significance: 'Demonstrates his "paranoiac-critical method"'
    },
    {
      title: 'The Sacrament of the Last Supper',
      year: '1955',
      description: 'Religious composition with mathematical precision',
      significance: 'Combines spirituality with scientific accuracy'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(/the-persistence-of-memory-1.jpg)', backgroundSize: 'auto 100%' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <Link 
          to="/artists" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Artists
        </Link>

        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-cyan-500 mb-8">
          <img
            src="/salvador-dali.jpeg"
            alt="Salvador Dalí"
            className="w-40 h-40 rounded-full object-cover mb-8 -ml-[0.5cm]"
          />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Salvador Dalí
          </h1>
          <div className="flex items-center justify-center space-x-4 text-xl text-gray-300 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              1904-1989
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Spanish
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Surrealism
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master of surreal imagery and impossible realities, creating dreamscapes that challenge perception and explore the depths of the subconscious mind
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              Life Timeline
            </h2>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{event.year}</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-gray-300">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              Surrealist Vision
            </h2>
            <div className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Dalí developed the "paranoiac-critical method," a technique for accessing the subconscious to create art. He painted dream images and impossible scenarios with photographic precision.
              </p>
              <p className="text-gray-300 leading-relaxed">
                "I don't do drugs. I am drugs," he declared, emphasizing his natural ability to access altered states of consciousness.
              </p>
              <div className="bg-gradient-to-r from-pink-400/10 to-cyan-500/10 rounded-lg p-6 border border-pink-400/20">
                <h4 className="text-lg font-semibold mb-3 text-pink-400">Blockchain Connection</h4>
                <p className="text-gray-300 italic">
                  "Surrealism imagined impossible worlds, like the virtual realms blockchain enables - both create new realities that transcend physical limitations."
                </p>
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Surrealist Masterpieces
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousWorks.map((work, index) => (
              <div key={work.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-pink-400">{work.title}</h4>
                  <span className="text-sm text-gray-400">{work.year}</span>
                </div>
                <p className="text-gray-300 mb-3">{work.description}</p>
                <div className="text-sm text-cyan-400 font-semibold">{work.significance}</div>
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
            Architect of Dreams
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Dalí's ability to visualize and create impossible realities parallels the virtual worlds enabled by blockchain technology - both expand the boundaries of what we consider possible.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
          >
            Explore Creative Industries
          </Link>
        </m.div>

        <NextPrevNavigation category="artists" currentPath="/artists/dali" />
      </div>
    </div>
  );
};

export default DaliPage;
