import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the database
    fetch('https://sportzcar-server.vercel.app/alltoys')
      .then((response) => response.json())
      .then((data) => {
        // Extract the image URLs from the fetched data
        const imageUrls = data.map((item) => item.tphoto);
        // Shuffle the array of image URLs randomly
        const shuffledUrls = imageUrls.sort(() => Math.random() - 0.5);
        // Select the first 10 image URLs from the shuffled array
        const selectedUrls = shuffledUrls.slice(0, 9);
        setImages(selectedUrls);
      });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-center text-blue-700 p-5 text-4xl">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden w-full"
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
