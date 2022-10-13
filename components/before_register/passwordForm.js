import React, { useState, useEffect, useContext } from "react";
import { Field, ErrorMessage } from "formik";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

import globals_styles from "@/styles/globals_register.module.css";
import Error from "@/components/feedback/error";

import { ContextValues } from "pages/pre-register";

const PasswordForm = () => {
  const { values } = useContext(ContextValues);

  const [isHidden, setIsHidden] = useState(true);
  const [isCorrectLength, setIsCorrectLength] = useState(false);
  const [isCorrectNumbers, setIsCorrectNumbers] = useState(false);
  const [isCorrectLetters, setIsCorrectLetters] = useState(false);
  const [isCorrectSpecialCharacters, setIsCorrectSpecialCharacters] =
    useState(false);

  useEffect(() => {
    setIsCorrectLength(values.password.length >= 8);
    setIsCorrectNumbers(/[0-9]/.test(values.password));
    setIsCorrectLetters(/[a-zA-Z]/.test(values.password));
    setIsCorrectSpecialCharacters(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password)
    );
  }, [values.password]);

  const handlePassword = (value) => {
    setIsCorrectLength(value.length >= 8);
    setIsCorrectNumbers(/[0-9]/.test(value));
    setIsCorrectLetters(/[a-zA-Z]/.test(value));
    setIsCorrectSpecialCharacters(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
    );
  };
  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <label className="fw-500" htmlFor="password">
          Create your password, it will be needed shortly
        </label>
        <div className="input-group">
          <Field name="password">
            {({ field, form, meta }) => {
              const { handleChange } = form;
              return (
                <input
                  {...field}
                  onChange={(e) => {
                    handleChange(e);
                    handlePassword(e.target.value);
                  }}
                  type={isHidden ? "password" : "text"}
                  id="password"
                  placeholder="The safer, the better"
                  className={`${globals_styles.formControl} ${
                    meta.error && meta.touched && "border-danger"
                  } border-end-0 form-control  mt-2`}
                  aria-describedby="show-hide-password"
                />
              );
            }}
          </Field>
          <span
            className={`${globals_styles.textIcons} input-group-text mt-2`}
            id="show-hide-password"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? (
              <AiFillEye className={`${globals_styles.icons}`} />
            ) : (
              <AiFillEyeInvisible className={`${globals_styles.icons}`} />
            )}
          </span>
        </div>
        <div className="mt-3">
          <ul className="list-unstyled">
            <li>Your password must contain:</li>
            <li className={`${isCorrectLength && "text-success"}`}>
              <BsCheckLg className="me-2" /> 8 or more characters
            </li>
            <li className={`${isCorrectNumbers && "text-success"}`}>
              <BsCheckLg className="me-2" /> Numbers
            </li>
            <li className={`${isCorrectLetters && "text-success"}`}>
              <BsCheckLg className="me-2" /> Letters
            </li>
            <li className={`${isCorrectSpecialCharacters && "text-success"}`}>
              <BsCheckLg className="me-2" /> At least 1 special character
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex p-1 mt-2 justify-content-center">
        <ErrorMessage name="password" render={(msg) => <Error error={msg} />} />
      </div>
    </>
  );
};

export default PasswordForm;
