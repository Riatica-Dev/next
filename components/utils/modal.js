import React from "react";

const Modal = ({ id, label, children, _className = "" }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={label}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={`${_className} modal-content`}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
