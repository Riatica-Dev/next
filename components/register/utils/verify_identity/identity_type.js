import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { AiOutlineCar } from "react-icons/ai";
import { GiPassport } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import globals_styles from "@/styles/globals_register.module.css";
import Error from "@/components/feedback/error";
import styles from "@/styles/register.module.css";

const IdentityType = () => {
  const [error, setError] = useState(false);
  return (
    <div className={`${globals_styles.stepsForm}`}>
      <p className="py-1">Choose your verification type</p>

      <div
        className={`${styles.radioInput} d-flex rounded-3 ${
          error && "border-danger"
        } `}
      >
        <Field name="identity_type">
          {({ field, meta }) => {
            setTimeout(() => setError(meta.error && meta.touched));
            return (
              <input
                {...field}
                type="radio"
                name="identity_type"
                id="driving_licence"
                value="driving_licence"
                className={`${styles.inputRadioButton}`}
              />
            );
          }}
        </Field>
        <label className={`${styles.formRadioLabel}`} htmlFor="driving_licence">
          <AiOutlineCar className={`${styles.iconsRadio}`} /> Driving licence
        </label>
      </div>

      <div
        className={`${styles.radioInput} d-flex my-2 rounded-3 ${
          error && "border-danger"
        } `}
      >
        <Field
          type="radio"
          name="identity_type"
          id="passport"
          value="passport"
          className={`${styles.inputRadioButton}`}
        />
        <label className={`${styles.formRadioLabel}`} htmlFor="passport">
          <GiPassport className={`${styles.iconsRadio}`} /> Passport
        </label>
      </div>

      <div
        className={`${styles.radioInput} d-flex rounded-3 ${
          error && "border-danger"
        } `}
      >
        <Field
          type="radio"
          name="identity_type"
          id="national_identity_card"
          value="national_identity_card"
          className={`${styles.inputRadioButton}`}
        />
        <label
          className={`${styles.formRadioLabel}`}
          htmlFor="national_identity_card"
        >
          <HiOutlineIdentification className={`${styles.iconsRadio}`} />{" "}
          National identity card
        </label>
      </div>
      <ErrorMessage
        name="identity_type"
        render={(msg) => <Error error={msg} />}
      />
    </div>
  );
};

export default IdentityType;
