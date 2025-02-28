import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollPosition: number;
}

const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  setIsOpen,
  scrollPosition,
}) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Bar", href: "#bar" },
    { name: "About", href: "#about" },
    { name: "Reservations", href: "#reservations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? "bg-black/90 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Neon Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="#"
              className="text-2xl font-bold text-white tracking-wide font-serif neon-text"
            >
              Pooja Hotel
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="relative px-3 py-2 text-sm font-medium text-white transition-all duration-300 neon-text group"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00FFFF] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white neon-text transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg py-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className="text-lg text-white transition-all duration-300 neon-text"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
