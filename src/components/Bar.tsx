import React, { useState } from "react";
import { motion } from "framer-motion";

// Adjust the paths based on your project structure
import blendersPrideImage from "../assets/blenders.jpg"; // Ensure the path is correct
import smirnoffImage from "../assets/smirnoff.jpg"; // Ensure the path is correct
import signatureDrinkImage from "../assets/signature.jpg"; // Ensure the path is correct

const cocktails = [
  {
    name: "Blenders Pride",
    description: "Premium whiskey, smooth finish, oak notes",
    image: blendersPrideImage,
  },
  {
    name: "Smirnoff",
    description: "Classic vodka, crisp and clean, perfect for cocktails",
    image: smirnoffImage,
  },
  {
    name: "Signature",
    description: "A unique blend of flavors, crafted to perfection",
    image: signatureDrinkImage,
  },
];

const Bar = () => {
  const [ripple, setRipple] = useState(null);

  const handleRipple = (e, index) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setRipple({ x, y, index });

    setTimeout(() => setRipple(null), 500);
  };

  return (
    <section id="bar" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Signature Cocktails
        </motion.h2>

        {/* Cocktail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={index}
              className="group relative h-96 w-full rounded-lg overflow-hidden cursor-pointer perspective-1000 shadow-lg bg-gray-800"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.07, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleRipple(e, index)}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <motion.img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover shimmer-effect"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold">{cocktail.name}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-amber-600 p-6 flex flex-col justify-center items-center text-center rotate-y-180 backface-hidden">
                  <h3 className="text-2xl font-bold mb-4">{cocktail.name}</h3>
                  <p className="text-lg">{cocktail.description}</p>
                </div>
              </div>

              {/* Floating Effect */}
              <motion.div
                className="absolute inset-0"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Ripple Effect */}
              {ripple && ripple.index === index && (
                <span
                  className="absolute bg-white rounded-full opacity-50"
                  style={{
                    width: "150px",
                    height: "150px",
                    left: ripple.x - 75,
                    top: ripple.y - 75,
                    transform: "scale(0)",
                    animation: "ripple 0.5s ease-out",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ripple Animation CSS */}
      <style>
        {
          `
          @keyframes ripple {
            from {
              transform: scale(0);
              opacity: 0.5;
            }
            to {
              transform: scale(1);
              opacity: 0;
            }
          }

          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }

          .shimmer-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%);
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            from {
              left: -100%;
            }
            to {
              left: 100%;
            }
          }
          `
        }
      </style>
    </section>
  );
};

export default Bar;