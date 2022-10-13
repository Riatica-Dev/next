import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { InputGroup } from "@/components/inputs/inputGroup";

const TokensGiven = () => {
  return (
    <>
      <h5>
        How many of your project&apos;s tokens will you give for 1 SGB / 1 FLR
        received?
      </h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">How many tokens are you going to give?</p>
        <InputGroup
          id="tokens_given"
          type="number"
          name="tokens_given"
          span="Tokens"
          placeholder="0"
        />
      </div>
    </>
  );
};
export default TokensGiven;
