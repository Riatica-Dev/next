import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";

const SummaryFormStepThree = () => {
  return (
    <div className={`${globals_styles.stepsForm}`}>
      <Textarea
        id="bussiness_model"
        name="bussiness_model"
        label="What is your project's business model?"
        max={150}
      />

      <Textarea
        id="bussiness_future"
        name="bussiness_future"
        label="What is the potential user base and market opportunity?"
        max={150}
      />
    </div>
  );
};

export default SummaryFormStepThree;
