import React, { useContext } from "react";
import { Formik, Form } from "formik";
import styles from "@/styles/submissions_components.module.css";
import { TextFieldRead } from "@/components/inputs/textField";
import { PreRegisterLayoutContext } from "pages/dashboard/submissions/pre-register";

const PersonalDetails = () => {
  const { singleResult, backStep } = useContext(PreRegisterLayoutContext);

  // handle update api
  const handleSubmit = (values, action) => {
    console.log(values);
  };

  return (
    <div className="bg-white py-3 mb-3 rounded-3 shadow-sm">
      <div className="h5 text-center">Please validate below information</div>
      <div>
        <Formik initialValues={singleResult} onSubmit={handleSubmit}>
          <Form>
            <div className="px-5">
              <TextFieldRead
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Please provide us with your email address."
              />
            </div>
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
    </div>
  );
};

export default PersonalDetails;
