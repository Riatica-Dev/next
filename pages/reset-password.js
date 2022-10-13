import React from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import Title from "@/components/utils/title";
import { TextField } from "@/components/inputs/textField";
import styles from "@/styles/auth.module.css";
import globals_styles from "@/styles/globals_register.module.css";

const initialValues = {
  password: "",
  confirm_password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  password: Yup.string()
    .matches(
      /[a-zA-Z]/,
      "Your Password must have at leat one uppercase letter."
    )
    .matches(/[0-9]/, "Your password must have at least one number.")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Your Password should contain at least 1 special character."
    )
    .min(8, "Your password must contain at least 8 characters.")
    .required("Please enter your password."),
  confirm_password: Yup.string()
    .required("Please enter the confirmation password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const ResetPassword = () => {
  return (
    <>
      <Title pageName="Reset Password" />
      <div className="d-flex">
        <div
          className="w-100 d-flex flex-column justify-content-between"
          style={{ minHeight: "100vh" }}
        >
          <div className="m-3">
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
            className={`${styles.login} px-2 w-100 d-flex justify-content-center align-items-center `}
          >
            <div>
              <p className="h3">Reset your password</p>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({ formik }) => {
                  return (
                    <Form>
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        _className={`${styles.field}`}
                      />
                      <TextField
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                        label="Password Confrimation"
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
            </div>
          </div>
          <div className="m-3">
            <p className="text-center">
              &copy; CloudFunding 2022. All Rights Reserved
            </p>
          </div>
        </div>
        <div
          className={`${styles.backgroundImage} ${styles.roundedLeft}`}
        ></div>
      </div>
    </>
  );
};

export default ResetPassword;
