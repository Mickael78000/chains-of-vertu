import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Calendar, Palette, MapPin, Award } from 'lucide-react';
import NextPrevNavigation from '../../components/NextPrevNavigation';

const KandinskyPage = () => {
  const timelineEvents = [
    { year: '1866', event: 'Born in Moscow, Russia' },
    { year: '1896', event: 'Moved to Munich to study art' },
    { year: '1910', event: 'Painted first abstract watercolor' },
    { year: '1911', event: 'Co-founded Der Blaue Reiter group' },
    { year: '1919', event: 'Returned to Russia, worked in art education' },
    { year: '1922', event: 'Moved to Germany, taught at Bauhaus' },
    { year: '1933', event: 'Fled to France due to Nazi regime' },
    { year: '1944', event: 'Died in Neuilly-sur-Seine, France' }
  ];

  const famousWorks = [
    {
      title: 'Composition VII',
      year: '1913',
      description: 'Considered one of the first purely abstract paintings',
      significance: 'Revolutionary breakthrough in abstract art'
    },
    {
      title: 'Yellow-Red-Blue',
      year: '1925',
      description: 'Masterpiece exploring the emotional qualities of color',
      significance: 'Demonstrates his color theory principles'
    },
    {
      title: 'Several Circles',
      year: '1926',
      description: 'Geometric composition with overlapping circles',
      significance: 'Perfect synthesis of form and color'
    },
    {
      title: 'Composition VIII',
      year: '1923',
      description: 'Complex geometric abstract composition',
      significance: 'Marked his mature abstract style'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(/Kandinsky_-_Jaune_Rouge_Bleu.jpg)' }}
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
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-r from-red-400 to-yellow-500 mb-8">
          <img
            src="/vassily-kandinsky.jpeg"
            alt="Wassily Kandinsky"
            className="w-40 h-40 rounded-full object-cover mb-8 -ml-[0.5cm]"
          />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
            Wassily Kandinsky
          </h1>
          <div className="flex items-center justify-center space-x-4 text-xl text-gray-300 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              1866-1944
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Russian-French
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Abstract Expressionism
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneer of abstract art who believed in the spiritual power of color and form, revolutionizing the art world by abandoning representational imagery
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
              Life Timeline
            </h2>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-yellow-500 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
              Artistic Philosophy
            </h2>
            <div className="bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Kandinsky believed that art should express the artist's inner emotional and spiritual state rather than simply represent the external world. He developed theories about the emotional and spiritual effects of color and form.
              </p>
              <p className="text-gray-300 leading-relaxed">
                "The artist must train not only his eye but also his soul," he wrote, emphasizing the spiritual dimension of artistic creation.
              </p>
              <div className="bg-gradient-to-r from-red-400/10 to-yellow-500/10 rounded-lg p-6 border border-red-400/20">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Blockchain Connection</h4>
                <p className="text-gray-300 italic">
                  "Like blockchain protocols, abstract art creates new realities from pure form and structure, establishing value through innovation rather than representation."
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
            Famous Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousWorks.map((work, index) => (
              <div key={work.title} className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-red-400">{work.title}</h4>
                  <span className="text-sm text-gray-400">{work.year}</span>
                </div>
                <p className="text-gray-300 mb-3">{work.description}</p>
                <div className="text-sm text-yellow-400 font-semibold">{work.significance}</div>
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
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
            The Father of Abstract Art
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Kandinsky's revolutionary approach to art parallels the innovation of blockchain technology - both create new paradigms that transcend traditional boundaries and establish value through pure innovation.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
          >
            Explore Creative Industries
          </Link>
        </m.div>

        <NextPrevNavigation category="artists" currentPath="/artists/kandinsky" />
      </div>
    </div>
  );
};

export default KandinskyPage;
