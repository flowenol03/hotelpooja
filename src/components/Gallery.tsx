import React from "react";
import outerImage from "../assets/outer.jpg";
import familyImage from "../assets/family.jpg";
import interiorImage from "../assets/interior.jpg";
import privateSectionImage from "../assets/private.jpg";
import kitchenImage from "../assets/kitchen.jpg";
import parkingImage from "../assets/parking.jpg";

const galleryItems = [
  {
    src: outerImage,
    title: "Outer View",
    description: "A breathtaking exterior with a perfect blend of elegance and nature.",
  },
  {
    src: familyImage,
    title: "Family Area",
    description: "A cozy and vibrant space designed for quality family time.",
  },
  {
    src: interiorImage,
    title: "Interior",
    description: "Luxurious and modern interiors with a sophisticated ambiance.",
  },
  {
    src: privateSectionImage,
    title: "Private Section",
    description: "Exclusive and serene spaces for a personalized experience.",
  },
  {
    src: kitchenImage,
    title: "Kitchen",
    description: "A state-of-the-art kitchen ensuring world-class dining experiences.",
  },
  {
    src: parkingImage,
    title: "Parking",
    description: "Spacious and secure parking with easy accessibility.",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center uppercase tracking-wide animate-fade-in">
          Gallery
        </h2>
        <p className="text-gray-800 mb-10 text-lg text-center">
          Explore our exclusive spaces
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-2 animate-fade-in"
            >
              {/* Image with zoom effect */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0 text-white text-center px-6">
                <h3 className="text-2xl font-bold neon-text animate-wave">
                  {item.title}
                </h3>
                <p className="text-sm mt-2 text-gray-200 animate-fade-in-delayed">
                  {item.description}
                </p>
              </div>

              {/* Glowing Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-yellow-400/50 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInDelayed {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 0; }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(3deg); }
            50% { transform: rotate(-3deg); }
            75% { transform: rotate(2deg); }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-fade-in-delayed {
            animation: fadeInDelayed 1.5s ease-in-out;
          }

          .animate-wave {
            animation: wave 1.5s infinite ease-in-out;
          }

          .neon-text {
            text-shadow: 0 0 8px yellow, 0 0 16px gold;
          }
        `}
      </style>
    </section>
  );
}

export default Gallery;
