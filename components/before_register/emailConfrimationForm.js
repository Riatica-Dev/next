import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import PinField from "react-pin-field";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/before_register.module.css";
import { ContextValues } from "pages/pre-register";

const EmailConfrimationForm = () => {
  const { returnToEmail, values } = useContext(ContextValues);

  // Handle the api for send the email verfivaction
  const ResendConfirmationNumber = () => {
    console.log(`The email confirmation: ${values.email}`);
  };

  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1 text-center">
          If you haven&apos;t received it, ensure you entered your email address
          correctly and check your spam folder.
          <button
            className="btn btn-link p-0  ms-1 text-decoration-none"
            type="button"
            onClick={returnToEmail}
          >
            Edit your email
          </button>
        </p>
        <div
          className={`${styles.pinWidth} d-flex justify-content-between mx-auto mb-2`}
        >
          <Field name="validation_email_number">
            {({ form, meta }) => {
              const { setFieldValue } = form;
              return (
                <PinField
                  length={6}
                  validate={"0123456789"}
                  onComplete={(value) => {
                    setFieldValue("validation_email_number", value);
                  }}
                  className={`${globals_styles.formControl} ${
                    styles.validationDigit
                  } ${
                    meta.error && meta.touched && "border-danger"
                  } form-control text-center border-none`}
                />
              );
            }}
          </Field>
        </div>
        <div className="text-center">
          <ErrorMessage
            name="validation_email_number"
            render={(error) => <Error error={error} />}
          />
        </div>

        <p className="text-center">
          Didn&apos;t receive your code?
          <button
            className="btn btn-link p-0  ms-1 text-decoration-none"
            type="button"
            onClick={ResendConfirmationNumber}
          >
            Resend the code
          </button>
        </p>
      </div>
    </>
  );
};

export default EmailConfrimationForm;
