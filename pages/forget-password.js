import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import Title from "@/components/utils/title";
import { TextField } from "@/components/inputs/textField";
import styles from "@/styles/auth.module.css";
import globals_styles from "@/styles/globals_register.module.css";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
});

const ForgetPassword = () => {
  const [message, setMessage] = useState(false);

  // handle forgot password api
  const onSubmit = ({ email }, actions) => {
    // if email is exist return true
    if (email === "example@gmail.com") {
      console.log(email);
      // change state to true for show the massege to the user
      setMessage(true);
    }
    // if the email does not exist return error message
    else {
      // stored the error message
      actions.setFieldError("email", "Oops! this email does not exist!");
    }
  };

  useEffect(() => {
    setTimeout(() => setMessage(false), 3000);
  }, [message]);

  return (
    <>
      <Title pageName="Forget Password" />
      <div className="d-flex">
        <div
          className={`${styles.backgroundImage} ${styles.roundedRight}`}
        ></div>
        <div
          className="w-100 d-flex flex-column justify-content-between "
          style={{ minHeight: "100vh" }}
        >
          <div className="m-3 d-flex justify-content-end">
            <Link href="/">
              <a>
                <Image
                  src="/images/black-logo.png"
                  width="200"
                  height="41"
                  className="img-fluid"
                  alt="logo cloudfunding"
                />
              </a>
            </Link>
          </div>
          <div
            className={`${styles.forgtePassowrd} px-2 w-100 d-flex justify-content-center align-items-center `}
          >
            <div>
              {message ? (
                <div
                  className={`${styles.text} text-center d-flex justify-content-center mb-5`}
                >
                  <p>
                    Instructions to reset your password will be sent to you
                    shortly. Please check your email.
                  </p>
                </div>
              ) : null}
              <p className="h3">Find your email</p>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({ formik }) => {
                  return (
                    <Form>
                      <TextField
                        id="email"
                        name="email"
                        type="email"
                        _className={`${styles.field}`}
                      />
                      <div className="d-flex justify-content-center pb-4 pt-2">
                        <button
                          className={`${globals_styles.btn} btn rounded-3 py-2`}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="m-3 text-center">
                <Link href="/login">
                  <a className="href text-muted text-decoration-none">
                    Go back to login page
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="m-3">
            <p className="text-center">
              &copy; CloudFunding 2022. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
