import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToPackages = () => {
    document.getElementById('premium-packages').scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'Basic Package',
      price: '$19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro Package',
      price: '$39.99',
      features: ['All Basic Features', 'Pro Feature 1', 'Pro Feature 2'],
    },
    {
      title: 'Enterprise Package',
      price: '$99.99',
      features: ['All Pro Features', 'Enterprise Feature 1', 'Enterprise Feature 2'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ExtraXiters</h1>
          <button
            onClick={scrollToPackages}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            View Packages
          </button>
        </div>
      </nav>

      <main>
        <section className="container mx-auto py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Welcome to ExtraXiters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Your one-stop solution for all your digital needs
          </motion.p>
        </section>

        <section id="premium-packages" className="container mx-auto py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-3xl font-bold text-blue-500 mb-6">{product.price}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-6 w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 p-8 rounded-lg max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Please fill out the form below and we'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Index;
