import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BreadcrumbNav from '../components/BreadcrumbNav';
import PageTransition from '../components/PageTransition';

const Artists = () => {
  const artists = [
    {
      id: 'kandinsky',
      name: 'Wassily Kandinsky',
      period: '1866-1944',
      movement: 'Abstract Expressionism',
      description: 'Pioneer of abstract art who believed in the spiritual power of color and form',
      gradient: 'from-red-400 to-yellow-500',
      famousWorks: ['Composition VII', 'Yellow-Red-Blue', 'Several Circles'],
      connection: 'Like blockchain protocols, abstract art creates new realities from pure form and structure',
      century: '19th-20th',
      movementCategory: 'abstract',
      to: '/artists/kandinsky',
      image: '/Kandinsky_-_Jaune_Rouge_Bleu.jpg',
      portrait: '/vassily-kandinsky.jpeg'
    },
    {
      id: 'picasso',
      name: 'Pablo Picasso',
      period: '1881-1973',
      movement: 'Cubism',
      description: 'Revolutionary artist who deconstructed traditional perspectives',
      gradient: 'from-blue-400 to-purple-500',
      famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica', 'The Weeping Woman'],
      connection: 'Cubism fragmented reality much like blockchain fragments traditional finance',
      century: '19th-20th',
      movementCategory: 'cubism',
      to: '/artists/picasso',
      image: '/Picasso.jpg',
      portrait: '/pablo-picasso.jpeg'
    },
    {
      id: 'dali',
      name: 'Salvador Dalí',
      period: '1904-1989',
      movement: 'Surrealism',
      description: 'Master of surreal imagery and impossible realities',
      gradient: 'from-pink-400 to-cyan-500',
      famousWorks: ['The Persistence of Memory', 'Dream Caused by the Flight of a Bee', 'Metamorphosis of Narcissus'],
      connection: 'Surrealism imagined impossible worlds, like the virtual realms blockchain enables',
      century: '20th',
      movementCategory: 'surrealism',
      to: '/artists/dali',
      image: '/the-persistence-of-memory-1.jpg',
      portrait: '/salvador-dali.jpeg'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <BreadcrumbNav items={[{ label: 'Artists' }]} />
          </div>

          <m.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Artistic Masters
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the revolutionary artists whose vision parallels the innovation of blockchain technology
            </p>
          </m.div>

          <div className="space-y-12">
            {artists.map((artist, index) => (
              <m.div
                key={artist.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Link
                  to={`/artists/${artist.id}`}
                  className="block bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${artist.gradient} mr-4 overflow-hidden`}>
                          <img
                            src={artist.portrait}
                            alt={`${artist.name} portrait`}
                            className="w-12 h-12 object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold bg-gradient-to-r ${artist.gradient} bg-clip-text text-transparent`}>
                            {artist.name}
                          </h3>
                          <p className="text-gray-400">{artist.period} • {artist.movement}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{artist.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2 text-white">Famous Works</h4>
                        <div className="flex flex-wrap gap-2">
                          {artist.famousWorks.map((work, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300"
                            >
                              {work}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="italic text-gray-400 mb-4">
                        "{artist.connection}"
                      </div>
                      
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span>Explore biography & works</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <img
                          src={artist.image}
                          alt={`${artist.name} artwork`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`relative w-full h-48 rounded-lg bg-gradient-to-br ${artist.gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Artists;
