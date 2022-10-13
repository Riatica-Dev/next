import React from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import styles from "@/styles/register.module.css";
import SelectCountry from "@/components/inputs/selectCountry";

const SelectCompaignTypeForm = () => {
  return (
    <>
      <div className="form-group mb-3">
        <div className="form-check">
          <Field name="company_type">
            {({ meta, field }) => {
              const { value } = field;
              return (
                <input
                  {...field}
                  type="radio"
                  className={`${
                    meta.error && meta.touched && "border-danger"
                  } form-check-input`}
                  id="company_company"
                  value="company_campany"
                  checked={"company_campany" == value}
                />
              );
            }}
          </Field>

          <label className="form-check-label" htmlFor="company_company">
            I want to start a company campaign
            <p
              className={`${styles.labelExeplination}`}
              style={{ marginTop: "-5px" }}
            >
              The company has a registered number and operates as a legal entity
            </p>
          </label>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <Field name="company_type">
            {({ meta, field }) => {
              const { value } = field;
              return (
                <input
                  {...field}
                  type="radio"
                  className={`${
                    meta.error && meta.touched && "border-danger"
                  } form-check-input`}
                  id="non_profit_company"
                  value="non_profit_company"
                  checked={"non_profit_company" == value}
                />
              );
            }}
          </Field>
          <label className="form-check-label" htmlFor="non_profit_company">
            I want to start a Not for profit campaign
            <p
              className={`${styles.labelExeplination}`}
              style={{ marginTop: "-5px" }}
            >
              The Not for profit has a charity number and operates as a legal
              entity
            </p>
          </label>
        </div>
        <ErrorMessage
          name="company_type"
          render={(error) => <Error error={error} />}
        />
        <div className="form-group">
          <SelectCountry
            name="country_legal_register"
            placeholder="Country of incorporation"
          />
        </div>
      </div>
    </>
  );
};

export default SelectCompaignTypeForm;
