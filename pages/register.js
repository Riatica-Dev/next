import React, { useState, createContext } from "react";
import { Formik, Form } from "formik";
import globals_styles from "@/styles/globals_register.module.css";
import Footer from "@/components/surfaces/footer";
import Title from "@/components/utils/title";
import stepContentArray from "@/components/register/utils/steps";
import initialValues from "@/components/register/utils/initialValues";
import BackwardButton from "@/components/inputs/backwardButton";
import validationSchemaArray from "@/components/register/utils/validationSchema";
import BlackNavbar from "@/components/surfaces/navs/blackNavbar";

export const ValuesContext = createContext();

// handles the api request when the user finishes the registration
const handleForm = (values, actions) => {
  // disables the button if the request isn't finished
  actions.setSubmitting(false);

  console.log(values);
};

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const isLastStep = activeStep == stepContentArray.length - 1;

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      handleForm(values, actions);
    } else {
      setPercentage(Math.floor(percentage + 5.8));
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handlePreviousStep = () => {
    setPercentage(Math.ceil(percentage - 5.8));
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="content">
      <Title pageName="Register" />
      <BlackNavbar />
      <div className="container">
        <div
          className={`${globals_styles.minHeight} d-flex align-items-center justify-content-center`}
        >
          <div className="w-100">
            {activeStep != 0 && (
              <h2 className="text-center ">Launch a new campaign</h2>
            )}
            <BackwardButton
              activeStep={activeStep}
              handlePreviousStep={handlePreviousStep}
            />
            <div className="d-flex justify-content-center">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchemaArray[activeStep]}
              >
                {(formik) => {
                  return (
                    <Form className={`${globals_styles.form}`}>
                      <div
                        className={`${globals_styles.formContent} bg-white rounded-20`}
                      >
                        <ValuesContext.Provider
                          value={{
                            values: formik.values,
                            changeValue: formik.setFieldValue,
                          }}
                        >
                          {stepContentArray[activeStep]}
                        </ValuesContext.Provider>
                      </div>
                      <div className="d-flex justify-content-center pb-4 pt-2">
                        <button
                          type="submit"
                          className={`${globals_styles.btn} btn rounded-3 py-2`}
                        >
                          {activeStep == 0
                            ? "Start"
                            : isLastStep
                            ? "submit"
                            : "Continue"}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
