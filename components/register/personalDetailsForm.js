import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { TextField } from "@/components/inputs/textField";

const PersonalDetialsForm = () => {
  return (
    <>
      <h5>Personal details</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1 mb-2">Provide us with some personal details</p>
        <TextField
          name="first_name"
          type="text"
          placeholder="First Name"
          label="Your first name"
        />
        <TextField
          name="last_name"
          type="text"
          placeholder="Last Name"
          label="Your last name"
        />
        <TextField
          name="date_birthday"
          type="date"
          placeholder="Last Name"
          label="Date of birth"
          _className="text-muted"
        />
      </div>
    </>
  );
};

export default PersonalDetialsForm;
