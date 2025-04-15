import React from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  imageSrc,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <button className="close-btn" onClick={onClose} style={{
            padding:"1rem"
        }}>
          X
        </button>
        {
          <>
            <img src={imageSrc ?? ''} alt="Preview" className="modal-image" />
            <a
              href={imageSrc??''}
              download
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬇ Download
            </a>
          </>
        }
      </div>
    </div>
  );
};

export default Modal;
