import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?w=1920&q=80"
          alt="Luxury Hotel Background"
          className="w-full h-full object-cover brightness-90 scale-105 animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-black/35 z-10"></div> {/* Dark overlay */}

        <div className="star-container">
          {[...Array(15)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDuration = Math.random() * 2 + 1.5; // Random twinkle speed
            return (
              <span
                key={i}
                className="twinkling-star"
                style={{
                  top: `${randomY}%`,
                  left: `${randomX}%`,
                  animationDuration: `${randomDuration}s`,
                }}
              ></span>
            );
          })}
        </div>

      </div>


      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-3xl px-6">
        <h1
          className="text-6xl md:text-8xl font-bold mb-6 wave-effect animate-slide-up"
          style={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "2px 2px 8px rgba(0, 255, 255, 0.8)",
            display: "inline-block",
            whiteSpace: "normal",  // Allow wrapping for mobile screens
            wordWrap: "break-word", // Ensure that the text wraps if necessary
          }}
        >
          <span style={{ display: "inline-flex", gap: "25px", flexWrap: "wrap" }}>
            {"Hotel Pooja".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: "inline-flex" }}>
                {word.split("").map((char, index) => (
                  <span
                    key={index}
                    className="wave-text"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      display: "inline-block",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h1>


        <p
          className="text-xl md:text-3xl mb-10 opacity-90 tracking-wide glowing-text animate-fade-in"
          style={{
            fontFamily: "'Merriweather', serif",
            color: "#B3E5FC",
            textShadow: "1px 1px 5px rgba(0, 255, 255, 0.5)",
          }}
        >
          A Taste of Luxury, A Memory of Elegance.
        </p>

        <button
          onClick={scrollToMenu}
          className="relative bg-white text-black px-10 py-4 rounded-full text-xl font-semibold tracking-wider transition-all duration-500 transform hover:scale-110 shadow-lg hover:bg-gray-200 border-glow animate-pop-in"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          View Our Menu
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow pulse-glow">
        <ChevronDown size={40} className="text-white drop-shadow-lg" />
      </div>

      {/* Custom Animations & Effects */}
      <style>
        {`
          @keyframes wave {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-slow {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes pop-in {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes moving-light {
            0% { background-position: -200%; }
            100% { background-position: 200%; }
          }

          @keyframes floating-overlay {
            0% { transform: translateY(0); opacity: 0.1; }
            50% { transform: translateY(-20px); opacity: 0.2; }
            100% { transform: translateY(0); opacity: 0.1; }
          }

          .wave-text {
            display: inline-block;
            animation: wave 1.5s ease-in-out infinite;
          }

          .animate-fade-in { animation: fade-in 1.5s ease-out; }
          .animate-fade-in-slow { animation: fade-in-slow 3s ease-out; }
          .animate-slide-up { animation: slide-up 1.5s ease-out; }
          .animate-pop-in { animation: pop-in 1s ease-out; }
          .animate-bounce-slow { animation: bounce 3s infinite; }

          /* Moving Light Effect */
          .animate-moving-light {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            background-size: 200% 100%;
            animation: moving-light 5s linear infinite alternate;
          }

          /* Floating Overlay */
          .animate-floating-overlay {
            animation: floating-overlay 6s ease-in-out infinite;
          }

          /* Soft Glowing Text */
          .glowing-text {
            text-shadow: 1px 1px 5px rgba(0, 255, 255, 0.5);
          }

          /* Button Glow Effect */
          .border-glow {
            border: 2px solid transparent;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease-in-out;
          }
          .border-glow:hover {
            border: 2px solid rgba(0, 255, 255, 0.7);
            animation: glow 1.5s infinite alternate;
          }

          /* Pulsating Scroll Indicator */
          .pulse-glow {
            animation: glow 1.5s infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
