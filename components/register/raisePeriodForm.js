import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { InputGroup } from "@/components/inputs/inputGroup";

const RaisePeriodForm = () => {
  return (
    <>
      <h5>How long is the raise period?</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">
          How long should the raise period be? (maximum = Deadline of the raise
          period)
        </p>
        <InputGroup
          id="raise_period"
          type="number"
          name="raise_period"
          span="Days"
          placeholder="0"
        />
      </div>
    </>
  );
};

export default RaisePeriodForm;
