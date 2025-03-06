import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import butterChicken from "../assets/butter.jpg";
import chickenPoojaSpecial from "../assets/chicken.jpg";
import chickenBiryani from "../assets/biryani.jpg";
import paneerTikka from "../assets/panner.jpg";
import specialVegPooja from "../assets/special.jpg";
import paneerButterMasala from "../assets/masala.jpg";


const menuItems = [
  {
    id: 1,
    name: "Butter Chicken",
    description:
      "Tender chicken in rich tomato-butter sauce, garnished with fresh cream and coriander.",
    price: "₹560",
    image: butterChicken,
    category: "Main Course",
  },
  {
    id: 2,
    name: "Chicken Pooja Special",
    description:
      "Specially prepared chicken dish with a unique blend of rich spices and creamy texture.",
    price: "₹560",
    image: chickenPoojaSpecial,
    category: "Main Course",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice layered with exotic spices and tender chicken, slow-cooked for rich flavor.",
    price: "₹300",
    image: chickenBiryani,
    category: "Main Course",
  },
  {
    id: 4,
    name: "Paneer Tikka",
    description:
      "Marinated cottage cheese with aromatic Indian spices, grilled to perfection.",
    price: "₹240",
    image: paneerTikka,
    category: "Appetizers",
  },
  {
    id: 5,
    name: "Special Veg Pooja",
    description:
      "A delightful vegetarian special made with fresh ingredients and aromatic spices.",
    price: "₹300",
    image: specialVegPooja,
    category: "Main Course",
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    description:
      "Slow-cooked paneer in a flavorful curry sauce with aromatic spices.",
    price: "₹240",
    image: paneerButterMasala,
    category: "Main Course",
  }
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="menu" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Signature Dishes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-xl shadow-lg bg-white group border border-gray-200"
              onClick={() => setSelectedItem(item)}
              style={{ minHeight: "400px", cursor: "pointer" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-full h-56 overflow-hidden"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                <p className="text-lg text-gray-600 mt-2">{item.price}</p>
              </div>
              <div className="p-4 text-center">
                <motion.button
                  className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
              >
                <div className="w-full h-60 rounded-xl overflow-hidden mb-6">
                  <motion.img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{selectedItem.name}</h3>
                <p className="text-gray-600 text-lg mb-6">{selectedItem.description}</p>
                <p className="text-2xl font-bold text-amber-600 mb-6">{selectedItem.price}</p>
                <div className="flex justify-end">
                  <motion.button
                    onClick={() => setSelectedItem(null)}
                    className="bg-red-600 text-white px-8 py-3 rounded-full"
                    whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;