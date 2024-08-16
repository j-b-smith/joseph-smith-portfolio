import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ImageGallery: React.FC = () => {
  const images = [
    '/about/1.jpeg',
    '/about/2.jpeg',
    '/about/3.jpeg',
    '/about/4.jpeg',
    '/about/5.jpg',
    '/about/7.jpeg',
    '/about/8.jpeg',
    '/about/9.jpeg',
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden cursor-pointer rounded-lg relative"
          onClick={() => openModal(image)}
        >
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover hover:opacity-80 transition-opacity"
          />
        </div>
      ))}
      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default ImageGallery;
