import React, { useContext } from "react";
import { ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import { InputGroup } from "@/components/inputs/inputGroup";
import RadioField from "@/components/inputs/radioField";
import { ValuesContext } from "pages/register";

const MoneyWarpForm = () => {
  const { values } = useContext(ValuesContext);
  return (
    <>
      <h5>How many SGB/FLR do you want your community to wrap?</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <RadioField id="sgb" name="crypto_fund" label="SGB" value="SGB" />

        <RadioField id="flr" name="crypto_fund" label="FLR" value="FLR" />

        <RadioField
          id="sgb/flr"
          name="crypto_fund"
          label="SGB/FLR"
          value="SGB/FLR"
        />

        <ErrorMessage
          name="crypto_fund"
          render={(error) => <Error error={error} />}
        />
      </div>

      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">Fill in the exact amount</p>
        {values.crypto_fund == "SGB" ? (
          <InputGroup
            id="money_fund_by_sgb"
            type="number"
            name="money_fund_by_sgb"
            span="SGB"
            placeholder="0"
          />
        ) : values.crypto_fund == "FLR" ? (
          <InputGroup
            id="money_fund_by_flr"
            type="number"
            name="money_fund_by_flr"
            span="FLR"
            placeholder="0"
          />
        ) : (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <InputGroup
                id="money_fund_by_sgb"
                type="number"
                name="money_fund_by_sgb"
                span="SGB"
                placeholder="0"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <InputGroup
                id="money_fund_by_flr"
                type="number"
                name="money_fund_by_flr"
                span="FLR"
                placeholder="0"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoneyWarpForm;
