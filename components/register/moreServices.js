import React from "react";
import { Field } from "formik";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/more_services.module.css";

const MoreServices = () => {
  return (
    <>
      <h5 className="text-start  mb-2">
        Is there anything else we can do for you?
      </h5>
      <div className={`${globals_styles.stepsForm}`}>
        <div className="form-group mb-3">
          <div className="form-check">
            <Field
              name="service_one"
              type="checkbox"
              className="form-check-input"
              id="service_one"
            />
            <label
              className="form-check-label text-uppercase fw-bold"
              htmlFor="service_one"
            >
              Bootstrapping solutions
            </label>
            <hr></hr>
            <p
              className={`${styles.labelExeplination}`}
              style={{ textAlign: "justify" }}
            >
              Push your product faster, cheaper, and more effectively, for
              example by:
              <br />
              Improving your website, logo, whitepaper, your tokenomics, your
              internet marketing, and your brand identity, your Frontend needs,
              your Backend needs.
            </p>
          </div>
        </div>
        <Textarea
          id="client_needs"
          name="client_needs"
          placeholder="What can we help you with?"
          max={100}
        />
        <div className="form-group mb-3">
          <div className="form-check">
            <Field
              name="service_two"
              type="checkbox"
              className="form-check-input"
              id="service_two"
            />
            <label
              className="form-check-label text-uppercase fw-bold"
              htmlFor="service_two"
            >
              Fiat and digital Assets solutions with Lena Trust{" "}
            </label>
            <hr></hr>
            <p className={`${styles.labelExeplination} text-justify`}>
              With the information you&apos;ve previously provided us, we have
              90% of what we need to set up your Trust account within one
              business day, if our checks are completed by then. You will then
              be able to enjoy full access to Fiat and various crypto solutions
              including but not limited to cold storage, staking, Over The
              Counter trading, as well as a set of modern private banking and
              asset protection solutions, while enjoying the confidentiality and
              efficiency of a Neo Trust. We will get in touch with you as soon
              as possible to finalise your onboarding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreServices;
