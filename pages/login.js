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
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password."),
});
const Login = () => {
  return (
    <>
      <Title pageName="Login" />
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
              <p className="h3">Login in to your account</p>
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
                        label="Email"
                        _className={`${styles.field}`}
                      />
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
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
              <Link href="/forget-password">
                <div className="text-center">
                  <a className="href text-muted text-decoration-none">
                    Forgot your password?
                  </a>
                </div>
              </Link>
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

export default Login;
