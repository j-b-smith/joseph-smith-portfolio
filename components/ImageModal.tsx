import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="relative">
        <img
          src={imageSrc}
          alt="Selected"
          className="max-w-full max-h-[80vh] w-auto h-auto rounded-lg"
        />
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
