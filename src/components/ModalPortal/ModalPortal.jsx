import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalAddTrip from "../Modal/ModalAddTrip";
import { BackdropContainer } from "./ModalPortal.styled";

const modalRoot = document.querySelector("#modal-root");

const ModalPortal = ({ onClose }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <BackdropContainer onClick={handleBackdropClick || onClose()}>
      <ModalAddTrip onClose={onClose} />
    </BackdropContainer>,
    modalRoot
  );
};

export default ModalPortal;
