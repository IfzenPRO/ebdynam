import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToPackages = () => {
    document.getElementById('premium-packages').scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: 'ExtraXiters - Premium',
      features: [
        'Aimbot with 6 Sections (Head, Scop, Body, Drag, Scop V2, AimFov 180°)',
        'Aim Smoothness & Ignore Knocked Players',
        'Wall Hack & Camera Hack',
        'Scop AWM & AWM Tracking',
        'Sniper Switch & Aim AWM',
        'Custom External ESP (Chams Menu, Chams Blue, Chams 3D, Chams Box RGB, Chams Blue Box)',
        'Works on Multiple Emulators (MSI/Bluestacks 4.120/4.150/4.180/5.12)',
        'Compatible with Free Fire Amazon',
        'Premium Support 24/7'
      ],
      price: '30$',
      duration: 'Permanent',
      customization: '110$ for Custom Name & KeyAuth'
    },
    {
      name: 'ExtraXiters - Combo',
      features: [
        'Aimbot with 4 different Sections (Head, Scop Fov, Scop Tracking, AimFov 180°)',
        'Aim Smoothness & Ignore Knocked Players',
        'Scop Awm & Scop Awm Tracking',
        'Sniper Switch',
        'Custom External ESP (Chams Menu, Chams Blue, Chams Blue Box)',
        'Works on Multiple Emulators (MSI/Bluestacks 4.120/4.150/4.180/5.12)',
        'Compatible with Free Fire Amazon',
        'Priority Support'
      ],
      price: '28$',
      duration: 'Permanent',
      customization: '95$ for Custom Name & KeyAuth'
    },
    {
      name: 'ExtraXiters - Bypass',
      features: [
        'Premium Panel Access',
        'Basic Features & Standard Support',
        'Works on Multiple Emulators',
        'Compatible with Free Fire Amazon',
        'Custom Name & KeyAuth Available',
        'Basic Support Package',
        'Regular Updates',
        'Standard Features Access'
      ],
      price: '25$',
      duration: 'Permanent',
      customization: '80$ for Custom Name & KeyAuth'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Custom SVG Background */}
        <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" className="w-full h-full">
            <defs>
              <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style="stop-color:#2a0a0a"/>
                <stop offset="100%" style="stop-color:#0a0a0a"/>
              </linearGradient>
              <pattern id="bulletPattern" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="40" fill="none" stroke="#ff0000" stroke-width="1" opacity="0.1"/>
                <circle cx="100" cy="100" r="30" fill="none" stroke="#ff0000" stroke-width="1" opacity="0.1"/>
                <circle cx="100" cy="100" r="20" fill="none" stroke="#ff0000" stroke-width="1" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-gradient)"/>
            <rect width="100%" height="100%" fill="url(#bulletPattern)"/>
            <g opacity="0.15">
              <path d="M0,200 L400,0" stroke="#ff0000" stroke-width="2"/>
              <path d="M800,630 L1200,430" stroke="#ff0000" stroke-width="2"/>
              <path d="M1200,200 L800,0" stroke="#ff0000" stroke-width="2"/>
              <path d="M400,630 L0,430" stroke="#ff0000" stroke-width="2"/>
            </g>
          </svg>
        ` }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="assets/image.png"
              alt="Extra X Cheat Logo"
              className="w-64 md:w-96 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500 tracking-wider">
              Extra X Cheats
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Premium Hacks By ExtraXiters
            </p>
            <motion.button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out transform hover:scale-105
                         border border-red-500 hover:border-red-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPackages}
            >
              Explore Features
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="premium-packages" className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-500">Premium Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 border border-red-500/30 hover:border-red-500
                         transform transition-all duration-300 hover:-translate-y-2
                         shadow-lg hover:shadow-red-500/20"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-4">{product.name}</h3>
              <ul className="space-y-3 mb-6 text-gray-300">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-3xl font-bold text-red-500 mb-2">{product.price}</p>
                <p className="text-gray-400">{product.duration}</p>
                {product.customization && (
                  <p className="text-sm text-red-400 mt-2 mb-4">
                    {product.customization}
                  </p>
                )}
                <motion.button 
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg
                             transition-all duration-300 ease-in-out transform hover:scale-105
                             border border-red-500 hover:border-red-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPopup(true)}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl max-w-md text-center
                       border border-red-500/30"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">Purchase Instructions</h2>
            <p className="mb-6 text-gray-300">To buy, open a ticket in the ExtraXiters Discord server.</p>
            <a
              href="https://discord.gg/fV5AmpvY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold
                         transition-all duration-300 ease-in-out transform hover:scale-105
                         border border-red-500 hover:border-red-400"
            >
              Join ExtraXiters Discord Server
            </a>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-gray-700 hover:bg-gray-800 py-2 px-6 rounded-lg
                         transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;