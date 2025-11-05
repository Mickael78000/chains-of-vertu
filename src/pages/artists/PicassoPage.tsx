import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Calendar, Palette, MapPin, Award } from 'lucide-react';
import NextPrevNavigation from '../../components/NextPrevNavigation';

const PicassoPage = () => {
  const timelineEvents = [
    { year: '1881', event: 'Born in Málaga, Spain' },
    { year: '1897', event: 'Entered Royal Academy of San Fernando in Madrid' },
    { year: '1901', event: 'Blue Period begins following friend\'s suicide' },
    { year: '1904', event: 'Rose Period starts, moves to Paris' },
    { year: '1907', event: 'Paints Les Demoiselles d\'Avignon, begins Cubism' },
    { year: '1912', event: 'Creates first collage, revolutionizing art' },
    { year: '1937', event: 'Paints Guernica in response to Spanish Civil War' },
    { year: '1973', event: 'Dies in Mougins, France' }
  ];

  const famousWorks = [
    {
      title: 'Les Demoiselles d\'Avignon',
      year: '1907',
      description: 'Revolutionary painting that launched the Cubist movement',
      significance: 'Completely broke with traditional perspective'
    },
    {
      title: 'Guernica',
      year: '1937',
      description: 'Powerful anti-war statement depicting bombing of Guernica',
      significance: 'Most famous political painting of the 20th century'
    },
    {
      title: 'The Weeping Woman',
      year: '1937',
      description: 'Cubist portrait expressing human suffering',
      significance: 'Exemplifies emotional power of fragmented form'
    },
    {
      title: 'The Old Guitarist',
      year: '1903',
      description: 'Blue Period masterpiece showing poverty and suffering',
      significance: 'Demonstrates early mastery of emotional expression'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(/Picasso.jpg)' }}
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
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          <img
            src="/pablo-picasso.jpeg"
            alt="Pablo Picasso"
            className="w-40 h-40 rounded-full object-cover mb-8 -ml-[0.5cm]"
          />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pablo Picasso
          </h1>
          <div className="flex items-center justify-center space-x-4 text-xl text-gray-300 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              1881-1973
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Spanish
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Cubism
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary artist who deconstructed traditional perspectives and co-founded Cubism, fundamentally changing how we perceive and represent reality
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Life Timeline
            </h2>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Artistic Innovation
            </h2>
            <div className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Picasso revolutionized art by breaking down objects into geometric forms and reassembling them from multiple perspectives simultaneously. This fragmentation of reality opened new possibilities for artistic expression.
              </p>
              <p className="text-gray-300 leading-relaxed">
                "Every act of creation is first an act of destruction," he famously said, embodying his approach to reinventing artistic traditions.
              </p>
              <div className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Blockchain Connection</h4>
                <p className="text-gray-300 italic">
                  "Cubism fragmented reality much like blockchain fragments traditional finance, creating new structures from the pieces of the old."
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Masterpieces
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousWorks.map((work, index) => (
              <div key={work.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-blue-400">{work.title}</h4>
                  <span className="text-sm text-gray-400">{work.year}</span>
                </div>
                <p className="text-gray-300 mb-3">{work.description}</p>
                <div className="text-sm text-purple-400 font-semibold">{work.significance}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Master of Reinvention
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Picasso's constant reinvention and willingness to break established rules mirrors the disruptive innovation of blockchain technology - both challenge existing paradigms to create something entirely new.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            Explore Creative Industries
          </Link>
        </m.div>

        <NextPrevNavigation category="artists" currentPath="/artists/picasso" />
      </div>
    </div>
  );
};

export default PicassoPage;
