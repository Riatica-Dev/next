import React from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import Title from "@/components/utils/title";
import BlackNavbar from "@/components/surfaces/navs/blackNavbar";
import Footer from "@/components/surfaces/footer";
import { TextField } from "@/components/inputs/textField";
import globals_styles from "@/styles/globals_register.module.css";
import Message from "@/components/feedback/message";

const Wrap = () => {
  const onSubmit = (values, actions) => {
    console.log(values.wrap_amount);
  };
  return (
    <>
      <Title pageName="Contrubite" />
      <BlackNavbar />
      <div className="container">
        <div
          className={`d-flex justify-content-center ${globals_styles.minHeight}  align-items-center`}
        >
          <Formik
            initialValues={{
              wrap_amount: "",
            }}
            onSubmit={onSubmit}
          >
            <Form className={`${globals_styles.form}`}>
              <h1 className="text-center text-bodoni mb-4">Wrap</h1>
              <TextField
                id="wrap_amount"
                type="number"
                name="wrap_amount"
                placeholder="Wrap your SGB"
              />
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className={`${globals_styles.btn} btn rounded-3 py-2`}
                >
                  Warp
                </button>
              </div>
              <Message>
                <p className="mt-4 ">
                  By clicking &quot;Wrap&quot; you acknowledge that you have
                  read, understand, and completely agree to these{" "}
                  <Link href="/terms-contributor" passHref>
                    <a
                      target="_blank"
                      rel="noopener"
                      className="text-decoration-none"
                    >
                      CloudFunding Platform Terms of Service
                    </a>
                  </Link>
                </p>
              </Message>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wrap;
