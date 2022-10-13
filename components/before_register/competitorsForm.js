import React from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";

const CompetitorsForm = () => {
  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <Textarea
          id="competitors_peers"
          name="competitors_peers"
          placeholder="Please list them here"
          label="Who do you view as your current competitors/peers?"
        />
        <Textarea
          id="competitive_adventage"
          name="competitive_adventage"
          placeholder="Take your time to answer this"
          label="What is your project's competitive advantage over existing or potential future solutions? "
        />
      </div>
    </>
  );
};

export default CompetitorsForm;
