"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FormMessageOverlay = ({ message, state, show }) => {
  const [hiddenState, setHiddenState] = useState("d-none");

  const hideOverlay = () => {
    setHiddenState("d-none");
  };

  useEffect(() => {
    show ? setHiddenState("") : setHiddenState("d-none");
  }, [show]);

  return (
    <div className={`form-message-overlay ${hiddenState}`}>
      <div className={`overlay-content ${state}`}>
        <Image
          src="/assets/images/icons/loading-icon.svg"
          alt="loading icon"
          className={`loading-icon ${state === "sending" ? "" : "d-none"}`}
          width={50}
          height={50}
        />
        <h5>{message}</h5>
        <button
          className={`btn btn-primary ${state === "sending" ? "d-none" : ""}`}
          onClick={hideOverlay}
        >
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default FormMessageOverlay;
