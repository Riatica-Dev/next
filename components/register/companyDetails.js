import React, { useContext } from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { TextField } from "@/components/inputs/textField";
import { ValuesContext } from "pages/register";
import TokenUtilities from "./tokenUtilities";

const CompanyDetailsForm = () => {
  const { values } = useContext(ValuesContext);
  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <TextField
          name="company_webpage"
          label={`${
            values.company_type == "non_profit_company"
              ? "Not For Profit"
              : "Company"
          } webpage (if different from project's webpage)`}
          type="url"
          placeholder="E.g https://www.cloudfunding.com"
        />
        <TextField
          name="company_objective"
          label={`${
            values.company_type == "non_profit_company"
              ? "Not For Profit"
              : "Company"
          }'s official objective (as stated at the registration with its government body)`}
          type="text"
        />
        <TextField
          name="jurisdictions_compliance"
          label="Are you compliant in all jurisdictions that your service operates in?"
          type="text"
        />
        <TokenUtilities />
      </div>
    </>
  );
};

export default CompanyDetailsForm;
