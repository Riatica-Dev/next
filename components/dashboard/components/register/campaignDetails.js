import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { RegisterContext } from "pages/dashboard/submissions/register";
import styles from "@/styles/submissions_components.module.css";
import { TextFieldRead } from "@/components/inputs/textField";
import { InputGroupRead } from "@/components/inputs/inputGroup";

const CampaignDetails = () => {
  const { nextStep, backStep, singleResult } = useContext(RegisterContext);

  const handleSubmit = (values, actions) => {
    console.log(values);
    if (true) {
      nextStep();
    }
  };

  return (
    <div className="bg-white p-3 mb-3 rounded-3 shadow-sm">
      <Formik onSubmit={handleSubmit} initialValues={singleResult}>
        <Form>
          {/* {singleResult.crypto_fund} */}
          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">
              How many SGB/FLR do you want your community to wrap:
            </label>
            <div>{singleResult.crypto_fund}</div>
          </div>
          {singleResult.crypto_fund == "SGB" ? (
            <InputGroupRead
              id="money_fund_by_sgb"
              type="number"
              name="money_fund_by_sgb"
              span="SGB"
              placeholder="0"
              label="Singbird amount"
            />
          ) : singleResult.crypto_fund == "FLR" ? (
            <InputGroupRead
              id="money_fund_by_flr"
              type="number"
              name="money_fund_by_flr"
              span="FLR"
              placeholder="0"
              label="Flare amount"
            />
          ) : (
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <InputGroupRead
                  id="money_fund_by_sgb"
                  type="number"
                  name="money_fund_by_sgb"
                  span="SGB"
                  placeholder="0"
                  label="Singbird amount"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <InputGroupRead
                  id="money_fund_by_flr"
                  type="number"
                  name="money_fund_by_flr"
                  span="FLR"
                  placeholder="0"
                  label="Flare amount"
                />
              </div>
            </div>
          )}

          <InputGroupRead
            id="raise_period"
            type="number"
            name="raise_period"
            span="Days"
            placeholder="0"
            label="Raise period"
          />

          <InputGroupRead
            id="yield_period"
            type="number"
            name="yield_period"
            span="Days"
            placeholder="0"
            label="Yield period"
          />

          <InputGroupRead
            id="tokens_given"
            type="number"
            name="tokens_given"
            span="Tokens"
            placeholder="0"
            label="Tokens given"
          />

          <div className="d-flex justify-content-around mt-3">
            <button
              type="button"
              className={`${styles.btn} btn`}
              onClick={backStep}
            >
              Back
            </button>
            <button type="submit" className={`${styles.btn} btn`}>
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CampaignDetails;
