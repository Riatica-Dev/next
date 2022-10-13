import React from "react";
import styles from "@/styles/register.module.css";
import globals_styles from "@/styles/globals_register.module.css";
import SelectCountry from "@/components/inputs/selectCountry";

const CountryId = () => {
  return (
    <div className={`${globals_styles.stepsForm}`}>
      <p className="py-1">Where are you from?</p>
      <div>
        <SelectCountry name="identity_country" />

        <p className={`${styles.labelExeplination} mt-3`}>
          Please be prepared to submit the following:
        </p>
        <ul className="list-unstyled ms-3">
          <li>
            <div
              className={`${styles.ulCircle}  d-inline-flex justify-content-center align-items-center rounded-circle mt-2 me-1`}
            >
              1
            </div>
            Official personal document
          </li>
          <li>
            <div
              className={`${styles.ulCircle} d-inline-flex justify-content-center align-items-center rounded-circle mt-2 me-1`}
            >
              2
            </div>
            Photo of you holding your document
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryId;
