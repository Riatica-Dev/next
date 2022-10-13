import React, { useContext, useState, useEffect } from "react";
import { Field } from "formik";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/register.module.css";
import { ValuesContext } from "pages/register";
import axios from "axios";

const HelperUser = () => {
  const [smartContractAudit, setSmartContractAudit] = useState(true);
  const { values } = useContext(ValuesContext);
  const { legal_opinion_switch } = values;
  // fetch per-register field
  const url = ""; // define the url  endpoint
  useEffect(() => {
    // fetch the pre-register api endpoint
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setSmartContractAudit(data[0].smart_contract_audit);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h5 className="mb-5">What else can we do for you?</h5>
      <h6>Before your raise:</h6>
      <div className={`${globals_styles.stepsForm}`}>
        <div className="form-group mb-3">
          <div className="form-check">
            {legal_opinion_switch ? (
              <Field
                name="legal_opinion_hepler"
                type="checkbox"
                className="form-check-input"
                id="legal_opinion_hepler"
                disabled={legal_opinion_switch}
                checked={legal_opinion_switch}
              />
            ) : (
              <Field
                name="legal_opinion_hepler"
                type="checkbox"
                className="form-check-input"
                id="legal_opinion_hepler"
                disabled={legal_opinion_switch}
              />
            )}
            <label className="form-check-label" htmlFor="legal_opinion_hepler">
              Legal opinion
              <p
                className={`${styles.labelExeplination}`}
                style={{ marginTop: "5px", textAlign: "justify" }}
              >
                Our Legal department will work around the clock to assess your
                application based on the information and documents you have
                shared, and deliver an opinion in the most relevant jurisdiction
                for your case.
              </p>
            </label>
          </div>
        </div>
        <div className="form-group mb-3">
          <div className="form-check">
            {smartContractAudit ? (
              <Field
                name="smart_contract_hepler"
                type="checkbox"
                className="form-check-input"
                id="smart_contract_hepler"
                disabled={smartContractAudit}
                checked={smartContractAudit}
              />
            ) : (
              <Field
                name="smart_contract_hepler"
                type="checkbox"
                className="form-check-input"
                id="smart_contract_hepler"
                disabled={smartContractAudit}
              />
            )}

            <label className="form-check-label" htmlFor="smart_contract_hepler">
              Smart contract audit report
              <p
                className={`${styles.labelExeplination}`}
                style={{ marginTop: "5px", textAlign: "justify" }}
              >
                We will always give you the best possible deal. Our services are
                top notch and usually 25-40% cheaper than the top firms in the
                industry.
              </p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelperUser;
