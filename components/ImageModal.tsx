import { ImageModalProps } from "@/types";
import React from "react";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 sm:p-6">
      <div className="relative max-w-full max-h-full">
        <img
          src={imageSrc}
          alt="Selected"
          className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg"
        />
        <button
          className="absolute top-2 right-2 text-white text-2xl sm:text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
