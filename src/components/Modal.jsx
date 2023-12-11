import React, { useState } from "react";
import "../global.css";
import closeIcon from "../assets/Close-16.png";

function Modal({ title = "", content, buttons = [], onClose, customStyle }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const closeWhenClickingOutside = (e) => {
    if (e.target.className === "modal open") {
      handleClose();
    }
  };

  window.addEventListener("click", closeWhenClickingOutside);
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="button-header">
          <button onClick={handleClose}>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Close_MD">
                  {" "}
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#ffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="modal-header">
          <h2 style={customStyle?.title}>{title}</h2>
        </div>
        <div className="modal-body">
          <p style={customStyle?.content}>{content}</p>
        </div>
        <div className="footer-buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={button.onClick} style={button.style}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
