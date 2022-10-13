import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import SelectCountry from "@/components/inputs/selectCountry";
import { TextField } from "@/components/inputs/textField";

const HomeAddressForm = () => {
  return (
    <>
      <h5>Please provide us with some more information*</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">Home address</p>
        <SelectCountry name="home_country" />
        <TextField name="home_zip_code" type="text" placeholder="Zip Code" />
        <TextField
          name="home_address_one"
          type="text"
          placeholder="Address One"
        />
        <TextField
          name="home_address_two"
          type="text"
          placeholder="Address Two (Optional)"
        />
        <TextField name="home_city" type="text" placeholder="City" />
      </div>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        *We are required by law to ask you this
      </p>
    </>
  );
};

export default HomeAddressForm;
