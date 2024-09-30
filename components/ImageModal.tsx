import React from 'react';
import { ImageModalProps } from '@/types';
import GoogleAnalytics from '@/utils/GoogleAnalytics';

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 sm:p-6" data-cy="image-modal">
      <div className="relative max-w-full max-h-full" data-cy="modal-content">
        <img
          src={imageSrc}
          alt="Selected"
          className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg"
          data-cy="modal-image"
        />
        <button
          className="absolute top-2 right-2 text-white text-2xl sm:text-3xl"
          onClick={() => {
            onClose();
            GoogleAnalytics.trackLinkClick('Close button clicked - ImageModal');
          }}
          data-cy="close-modal-button"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
