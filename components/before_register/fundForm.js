import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import FundraisingForm from "./token_information_economics/FundraisingForm";
const FundForm = () => {
  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <FundraisingForm />

        <Textarea
          id="project"
          name="project"
          label="How much runway does your project require to ship the final product?"
          min={5}
          max={50}
        />
        <Textarea
          id="currency_coin_token"
          name="currency_coin_token"
          label="What currency/coins/tokens do you plan to hold your funds in?"
          min={5}
          max={20}
        />
        <Textarea
          id="policy"
          name="policy"
          label="What's your coin storage/conversion policy? Do you only convert to fiat when you spend?"
          min={5}
          max={20}
        />
        <Textarea
          id="spendings"
          name="spendings"
          placeholder="Yes, no, share any comments or other plans you may have"
          label="Do you plan to publish your spendings each month during the yield period and publish a
          quarterly report for the following year?"
          min={5}
          max={20}
        />
      </div>
    </>
  );
};

export default FundForm;
