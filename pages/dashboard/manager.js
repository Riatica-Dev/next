import React from "react";
import Layout from "@/components/dashboard/layout";
import globals_styles from "@/styles/globals_register.module.css";
import { Formik, Form } from "formik";
import { TextField } from "@/components/inputs/textField";
import { InputGroup } from "@/components/inputs/inputGroup";

const initialValues = {
  wallet_address: "",
  fees_percentage: "",
  new_wallet_address: "",
};

const Manager = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Layout title="Manager">
      <div className="">
        <div className="container">
          <div className="bg-white p-3 mb-3 rounded-3 shadow-sm w-100">
            <div className="d-flex justify-content-center">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={`${globals_styles.form}`}>
                  <TextField
                    name="wallet_address"
                    label="Address"
                    id="wallet_address"
                    type="text"
                  />
                  <InputGroup
                    name="fees_percentage"
                    label="Fee's Percentage"
                    id="fees_percentage"
                    type="number"
                    span="%"
                  />
                  <TextField
                    name="new_wallet_address"
                    label="New Address"
                    id="new_wallet_address"
                    type="text"
                  />
                  <div className="d-flex justify-content-center pt-2">
                    <button
                      type="submit"
                      className={`${globals_styles.btn} btn rounded-3 py-2`}
                    >
                      Confirm
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manager;
