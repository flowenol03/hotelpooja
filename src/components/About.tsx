import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in-up">Our Story</h2>
            <p className="text-xl leading-relaxed animate-fade-in-up delay-200">
              Founded in 1995, Pooja Hotel has been a cornerstone of culinary excellence,
              blending traditional flavors with modern innovation. Our passionate team
              of chefs brings together years of expertise to create unforgettable
              dining experiences.
            </p>
            <p className="text-xl leading-relaxed animate-fade-in-up delay-400">
              We take pride in sourcing the finest ingredients and maintaining the
              highest standards of quality in every dish we serve. Our commitment
              to excellence has earned us numerous accolades and a loyal following
              of food enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
              alt="Restaurant Interior"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-fade-in-up delay-300"
            />
            <img
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=1920&q=80"
              alt="Chef at Work"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-fade-in-up delay-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;