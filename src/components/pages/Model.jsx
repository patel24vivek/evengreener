// Model.jsx
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Model = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <h2>Simple Modal</h2>
      <p>This is a modal using react-responsive-modal.</p>
    </Modal>
  );
};

export default Model;
