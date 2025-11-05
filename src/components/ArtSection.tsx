
import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArtSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Artistic background inspired by the three masters */}
      <div className="absolute inset-0">
        {/* Kandinsky-inspired geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-40 bg-gradient-to-b from-blue-500 to-purple-500 opacity-15 transform rotate-45" />
        
        {/* Picasso-inspired angular shapes */}
        <div className="absolute bottom-20 left-1/4 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-cyan-500/10" />
        
        {/* Dalí-inspired surreal elements */}
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 transform skew-x-12 animate-bounce" style={{animationDuration: '3s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <m.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Art & Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where blockchain innovation meets artistic expression, inspired by the revolutionary vision of Kandinsky, Picasso, and Dalí
          </p>
        </m.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {(() => {
            const items = [
              {
                artist: 'Kandinsky',
                style: 'Abstract Geometry',
                description: 'Like blockchain protocols, abstract art creates new realities from pure form and color',
                gradient: 'from-red-400 to-yellow-500',
                to: '/artists/kandinsky',
                image: '/Kandinsky_-_Jaune_Rouge_Bleu.jpg'
              },
              {
                artist: 'Picasso',
                style: 'Cubist Innovation',
                description: 'Deconstructing traditional perspectives, similar to how blockchain reimagines finance',
                gradient: 'from-blue-400 to-purple-500',
                to: '/artists/picasso',
                image: '/Picasso.jpg'
              },
              {
                artist: 'Dalí',
                style: 'Surreal Vision',
                description: 'Imagining impossible realities, like the virtual worlds blockchain technology enables',
                gradient: 'from-pink-400 to-cyan-500',
                to: '/artists/dali',
                image: '/the-persistence-of-memory-1.jpg'
              }
            ];
            return items.map((artist, index) => (
            <m.div
              key={artist.artist}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1/*, delay: (items.length - 1 - index) * 0.4 */}}
              className="group relative bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${artist.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300 pointer-events-none`} />
              
              <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${artist.gradient} bg-clip-text text-transparent`}>
                <Link to={artist.to} className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded">
                  {artist.artist}
                </Link>
              </h3>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">{artist.style}</h4>
              <p className="text-gray-400">{artist.description}</p>
              
              
              {/* Artistic element */}
              <div className="mt-6 h-48 overflow-hidden rounded-lg">
                <img 
                  src={artist.image} 
                  alt={`${artist.artist} artwork`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </m.div>
            ));
          })()}
        </div>
        
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl text-gray-300 italic">
            "Technology, like art, is a way of seeing and creating new worlds"
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default ArtSection;
