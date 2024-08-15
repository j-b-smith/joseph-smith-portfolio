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
    <div className="flex-1 min-h-full grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className="w-full h-40 object-cover cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
          onClick={() => openModal(image)}
        />
      ))}
      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default ImageGallery;
