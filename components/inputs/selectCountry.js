import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import countries from "assets/countriesList";

const SelectCountry = ({ name, placeholder = "Choose a country" }) => {
  const [_country, setCountry] = useState("");
  return (
    <div className="form-group mb-3">
      <Field name={name}>
        {({ form, meta }) => {
          const { setFieldValue } = form;
          return (
            <div className="btn-group w-100">
              <button
                type="button"
                className={`${globals_styles.formControl} form-control dropdown-toggler text-start`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {!_country ? placeholder : _country}
              </button>
              <ul className={`${globals_styles.dropdownMenu} dropdown-menu`}>
                {countries.map((country) => {
                  return (
                    <li
                      style={{
                        backgroundColor: `${
                          country.name == _country ? "#e9ecef" : "#FFFFFF"
                        }`,
                      }}
                      key={country.code}
                      className="dropdown-item d-flex cursor-pointer"
                      onClick={() => {
                        setCountry(country.name);
                        setFieldValue(name, country.name);
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url("${`https://flagcdn.com/h60/${country.code.toLocaleLowerCase()}.png`}")`,
                        }}
                        className={`${globals_styles.dropdownImage}`}
                      ></div>
                      <div className="ms-3 d-flex align-items-center">
                        {country.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} render={(error) => <Error error={error} />} />
    </div>
  );
};

export default SelectCountry;
