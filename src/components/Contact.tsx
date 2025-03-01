import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-r from-purple-200 to-blue-100"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with bounce effect */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          Contact Us ✨
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Static Map */}
          <div className="rounded-lg overflow-hidden shadow-xl h-[400px] border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d432.7224818190905!2d74.329596612146!3d16.746401271840007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1740758750074!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info with Floating Cards */}
          <motion.div
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {[
              { icon: MapPin, title: "Address", text: "Hotel Pooja, Kolhapur Sangali Highway", link: "https://maps.app.goo.gl/E6wPMHgLKt8MksA68" },
              { icon: Phone, title: "Phone", text: "+91 9420132495", link: "tel:+919420132495" },
              { icon: Mail, title: "Email", text: "hotelpooja95@gmail.com", link: "mailto:hotelpooja95@gmail.com" },
              { icon: Clock, title: "Hours", text: "Monday - Sunday: 11:00 AM - 11:00 PM" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link || "#"}
                className="block"
                target={item.link ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                <motion.div
                  className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, repeatType: "mirror" } }}
                >
                  <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              </motion.a>
            ))}

            {/* Social Media with Glowing Icons */}
            <motion.div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-500"
                    whileHover={{
                      scale: 1.4,
                      textShadow: "0px 0px 8px rgba(0, 0, 255, 0.8)",
                      boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.5)",
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
