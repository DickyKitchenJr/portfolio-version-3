import { useState } from "react";
import "./SuccessfulSubmission.css";
import kapow from "../assets/images/kapow.png";

function SuccessfulSubmission() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="success-overlay">
      <div className="comic-box success-inner-div">
        <div>
          <h2>Success!</h2>
          <p className="write-up">Your message has been sent successfully.</p>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
        <img className="comic-word" src={kapow} alt="comic style KAPOW" />
      </div>
    </div>
  );
}

export default SuccessfulSubmission;
