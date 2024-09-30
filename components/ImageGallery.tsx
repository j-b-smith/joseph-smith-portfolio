import React, { useState } from 'react';
import ImageModal from './ImageModal';
import GoogleAnalytics from '@/utils/GoogleAnalytics';

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
    '/about/10.png',
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    GoogleAnalytics.trackLinkClick(`Image ${image} clicked - ImageGallery`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    GoogleAnalytics.trackLinkClick('Modal closed - ImageGallery');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200 py-2" data-cy="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-auto overflow-hidden cursor-pointer rounded-lg relative"
          onClick={() => openModal(image)}
          data-cy={`image-${index}`}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover hover:opacity-80 transition-opacity"
            data-cy={`image-thumbnail-${index}`}
          />
        </div>
      ))}
      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default ImageGallery;
