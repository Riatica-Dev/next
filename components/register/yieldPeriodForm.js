import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { InputGroup } from "@/components/inputs/inputGroup";

const YieldPeriodForm = () => {
  return (
    <>
      <h5>How long should the Yield Period be?</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">
          How long you do want your community to wrap the SGB/FLR?
        </p>
        <InputGroup
          id="yield_period"
          type="number"
          name="yield_period"
          span="Days"
          placeholder="0"
        />
      </div>
    </>
  );
};

export default YieldPeriodForm;
