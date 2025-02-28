import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Animated Logo & Description */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">Pooja Hotel</h3>
            <p className="text-gray-400">
              Where culinary excellence meets exceptional service.
            </p>
          </motion.div>

          {/* Animated Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Menu", "Bar", "Reservations", "Contact"].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#F59E0B" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-600 transition-colors duration-200 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Animated Hours */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 11am - 11pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: 10am - 10pm</li>
            </ul>
          </motion.div>

          {/* Animated Newsletter Subscription */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <motion.input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Static Footer Text */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pooja Hotel. All rights reserved.</p>
          <p className="mt-2 text-amber-500 text-sm cursor-pointer hover:text-amber-600">
            Designed by Prathamesh Khandekar
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;