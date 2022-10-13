import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
const Message = ({ children }) => {
  return (
    <div className={`${globals_styles.text} text-center mx-auto`}>
      {children}
    </div>
  );
};

export default Message;
