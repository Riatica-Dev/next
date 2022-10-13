import React, { useContext } from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { TextField } from "@/components/inputs/textField";
import { ValuesContext } from "pages/register";
const BusienssAddressForm = () => {
  const { values } = useContext(ValuesContext);
  return (
    <>
      <h5>
        {values.compaign_type == "I want to create a Not for profit campaign"
          ? "Not For Profit"
          : "Business"}{" "}
        address
      </h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">
          What is the registered address for your{" "}
          {values.compaign_type == "I want to create a Not for profit campaign"
            ? "Not For Profit"
            : "business"}
          ?
        </p>
        <TextField
          name="business_address_one"
          type="text"
          placeholder="Address One"
        />
        <TextField
          name="business_address_two"
          type="text"
          placeholder="Address Two (Optional)"
        />
        <TextField name="business_city" type="text" placeholder="City" />
        <TextField
          name="business_zip_code"
          type="text"
          placeholder="Zip Code"
        />
      </div>
    </>
  );
};

export default BusienssAddressForm;
