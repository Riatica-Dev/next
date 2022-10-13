import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import { TextField } from "@/components/inputs/textField";
import SelectCountry from "@/components/inputs/selectCountry";
import { ValuesContext } from "pages/register";
import DateField from "../inputs/dateField";

const BusinessRecords = () => {
  const { values } = useContext(ValuesContext);

  return (
    <>
      <h5>
        Your{" "}
        {values.company_type == "non_profit_company"
          ? "Not For Profit"
          : "business"}{" "}
        records
      </h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">
          Please provide us with some more information about your{" "}
          {values.company_type == "non_profit_company"
            ? "Not For Profit"
            : "business"}
        </p>
        <SelectCountry
          name="business_country_record"
          placeholder="Country of registration"
        />
        {values.company_type == "non_profit_company" && (
          <TextField
            name="legal_bussiness_name"
            type="number"
            placeholder="Charity number"
          />
        )}

        <TextField
          name="bussiness_name"
          placeholder={`Please share the public name for your ${
            values.company_type == "non_profit_company"
              ? "Not For Profit"
              : "business"
          }`}
          type="text"
        />

        {values.company_type == "company_campany" && (
          <TextField
            name="house_registeration_number"
            type="number"
            placeholder="Government registration number"
          />
        )}
        <DateField
          name="incorporation_date"
          placeholder="Incorporation date mm/dd/yyyy"
        />

        {values.company_type == "company_campany" && (
          <div className="form-group mb-3">
            <Field name="business_type">
              {({ field, meta }) => {
                return (
                  <select
                    {...field}
                    className={`${globals_styles.formControl} ${
                      meta.error && meta.touched && "border-danger"
                    } form-control mt-2 text-muted`}
                    id="company_compaigbusiness_typen_countries"
                  >
                    <option value="" disabled defaultValue>
                      Business type
                    </option>
                    <option value="fintech">Fintech</option>
                    <option value="information_technology">
                      Information Technology
                    </option>
                    <option value="construction">Construction</option>
                    <option value="finance">Finance</option>
                    <option value="mining">Mining</option>
                    <option value="advertising">Advertising</option>
                    <option value="security">Security</option>
                    <option value="social">Social</option>
                    <option value="utilities">Utilities</option>
                    <option value="services">Services</option>
                    <option value="financial">Financial</option>
                    <option value="realestate">Realestate</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                );
              }}
            </Field>
            <ErrorMessage
              name="business_type"
              render={(error) => <Error error={error} />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessRecords;
