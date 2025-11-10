import { useState } from "react";
import "./UnderConstructionModal.css";

function UnderConstructionModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="under-construction-overlay">
        <div className="under-construction-center-div">
          <h2 className="under-construction-h2">
            Site is Currently Under Construction
          </h2>

          <div className="under-construction-img-div">
            <img
              className="under-construction-img"
              src="https://media.tenor.com/gB6z2hBaWi8AAAAC/goofing-off-edd-gould.gif"
              alt="under construction gif"
            />
          </div>

          <div className="under-construction-message">
            <p>
              Feel free to poke around and explore the site as we complete it's
              construction.
            </p>
            <p>Be aware that not all areas are functional during this time.</p>
          </div>

          <div className="under-construction-button-div">
            <button
              className="under-construction-button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnderConstructionModal;
