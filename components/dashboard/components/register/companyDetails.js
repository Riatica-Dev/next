import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { RegisterContext } from "pages/dashboard/submissions/register";
import styles from "@/styles/submissions_components.module.css";
import { TextFieldRead } from "@/components/inputs/textField";
import { PreviewRead } from "@/components/inputs/preview";

const CompanyDetails = () => {
  const { nextStep, backStep, singleResult } = useContext(RegisterContext);

  const handleSubmit = (values, actions) => {
    console.log(values);
    if (true) {
      console.log("It's ok to submit");
    }
  };

  return (
    <div className="bg-white p-3 mb-3 rounded-3 shadow-sm">
      <Formik onSubmit={handleSubmit} initialValues={singleResult}>
        <Form>
          <TextFieldRead
            name="company_webpage"
            label={`${
              singleResult.company_type == "non_profit_company"
                ? "Not For Profit"
                : "Company"
            } webpage (if different from project's webpage)`}
            type="url"
            placeholder="E.g https://www.cloudfunding.com"
          />
          <TextFieldRead
            name="company_objective"
            label={`${
              singleResult.company_type == "non_profit_company"
                ? "Not For Profit"
                : "Company"
            }'s official objective (as stated at the registration with its government body)`}
            type="text"
          />
          <TextFieldRead
            name="jurisdictions_compliance"
            label="Are you compliant in all jurisdictions that your service operates in?"
            type="text"
          />

          {singleResult.legal_opinion_switch ? (
            <PreviewRead
              label="Token legal opinion:"
              dataTarget="legalOpinionPdf"
              preview={singleResult.legal_opinion_pdf}
            />
          ) : (
            <div className="d-flex justify-content-between form-group mb-3">
              <label className="fw-500 d-flex">Request legal opinion:</label>
              <div>{singleResult.legal_opinion_down_road ? "Yes" : "No"}</div>
            </div>
          )}

          <TextFieldRead
            name="business_address_one"
            type="text"
            placeholder="Address One"
            label="Business Address One"
          />
          <TextFieldRead
            name="business_address_two"
            type="text"
            placeholder="Address Two (Optional)"
            label="Business Address Two"
          />
          <TextFieldRead
            name="business_city"
            type="text"
            placeholder="City"
            label="City"
          />
          <TextFieldRead
            name="business_zip_code"
            type="text"
            placeholder="Zip Code"
            label="Zip Code"
          />

          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">Business Country Record :</label>
            <div>{singleResult.business_country_record}</div>
          </div>

          {singleResult.company_type == "non_profit_company" && (
            <TextFieldRead
              name="legal_bussiness_name"
              type="number"
              placeholder="Charity number"
              label="Charity number"
            />
          )}

          <TextFieldRead
            name="bussiness_name"
            placeholder={`Please share the public name for your ${
              singleResult.company_type == "non_profit_company"
                ? "Not For Profit"
                : "business"
            }`}
            type="text"
            label={`Please share the public name for your ${
              singleResult.company_type == "non_profit_company"
                ? "Not For Profit"
                : "business"
            }`}
          />

          {singleResult.company_type == "company_campany" && (
            <TextFieldRead
              name="house_registeration_number"
              type="number"
              placeholder="Government registration number"
              label="Government registration number"
            />
          )}

          {singleResult.company_type == "company_campany" && (
            <div className="d-flex justify-content-between form-group mb-3">
              <label className="fw-500 d-flex"> The business type :</label>
              <div>{singleResult.business_type}</div>
            </div>
          )}

          <div className="d-flex justify-content-around mt-3">
            <button
              type="button"
              className={`${styles.btn} btn`}
              onClick={backStep}
            >
              Back
            </button>
            <button type="submit" className={`${styles.btn} btn`}>
              Validate
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CompanyDetails;
