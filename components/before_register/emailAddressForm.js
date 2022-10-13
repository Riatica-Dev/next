import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { TextField } from "@/components/inputs/textField";

const EmailAddressForm = () => {
  return (
    <div className={`${globals_styles.stepsForm}`}>
      <TextField
        id="email"
        name="email"
        type="email"
        label=""
        placeholder="Please provide us with your email address."
      />
    </div>
  );
};

export default EmailAddressForm;
