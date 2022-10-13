import React, { useState, createContext } from "react";
import { Form, Formik } from "formik";
import globals_styles from "@/styles/globals_register.module.css";
import Title from "@/components/utils/title";
import Footer from "@/components/surfaces/footer";
import stepsContentArray from "@/components/before_register/utils/steps";
import initialValues from "@/components/before_register/utils/initialValues";
import validationSchemaArray from "@/components/before_register/utils/validationSchema";
import BackwardButton from "@/components/inputs/backwardButton";
import BlackNavbar from "@/components/surfaces/navs/blackNavbar";

export const ContextValues = createContext();
// handles the api request when the user finished the registration
const handleForm = (values, actions) => {
  // disables the button if the request sin't finished
  actions.setSubmitting(false);
  console.log(values);
};
const BeforeRegister = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep == stepsContentArray.length - 1;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      handleForm(values, actions);
      setIsAgree(values.terms_conditions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  // handles send email confirmation number
  const SendComfirmationEmailNumber = (values, actions) => {
    // Checks if the email is unique or not
    if (values.email != "test@example.com") {
      // simple console log for debugging
      console.log("your email is" + values.email);
      // function for leting the user go to the next step
      setActiveStep(activeStep + 1);
    } else {
      // if the email is not unique the erros message is stored here
      actions.setFieldError("email", "Oops! this email is already exists.");
    }
  };
  // Handles the email verfication number api
  const handleConfirmationEmailNumber = (values, actions) => {
    // simple console log for debugging
    console.log(typeof values.validation_email_number);
    // if the confirmation number is correct
    if (values.validation_email_number == 123456) {
      // function for leting the user go to the next step
      setActiveStep(activeStep + 1);
    } else {
      // if the confirmation number is not correct the erros message is stored here
      // does't let the user complete the registration
      actions.setFieldError(
        "validation_email_number",
        "Oops! Incorrect email confirmation number."
      );
    }
  };
  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };
  const returnToEmail = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Title pageName="Pre-Registration" />
      <BlackNavbar />
      <div className="container">
        <div
          className={`${globals_styles.minHeight} d-flex align-items-center justify-content-center`}
        >
          <div className="w-100">
            <h2 className="text-center fw-bold">
              {stepsContentArray[activeStep].title}
            </h2>
            <BackwardButton
              activeStep={activeStep}
              handlePreviousStep={handlePreviousStep}
              description={stepsContentArray[activeStep].description}
            />
            <div className="d-flex justify-content-center">
              <Formik
                initialValues={initialValues}
                onSubmit={
                  activeStep == 0
                    ? SendComfirmationEmailNumber
                    : activeStep == 1
                    ? handleConfirmationEmailNumber
                    : handleSubmit
                }
                // validationSchema={validationSchemaArray[activeStep]}
              >
                {(formik) => {
                  return (
                    <Form className={`${globals_styles.form}`}>
                      <div
                        className={`${globals_styles.formContent} bg-white rounded-20`}
                      >
                        <ContextValues.Provider
                          value={{
                            returnToEmail,
                            values: formik.values,
                            changeValue: formik.setFieldValue,
                          }}
                        >
                          {stepsContentArray[activeStep].component}
                        </ContextValues.Provider>
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
    </>
  );
};
export default BeforeRegister;
