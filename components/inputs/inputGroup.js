import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Image from "next/image";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";

export const InputGroup = ({
  name,
  id,
  type,
  placeholder,
  span,
  label,
  _className = "",
  _style = "",
  _classNameLabel = "",
  _styleLabel = "",
}) => {
  return (
    <div className="form-group mb-3">
      {label && (
        <label
          className={`${_classNameLabel} fw-500`}
          style={{ _styleLabel }}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="input-group">
        <Field name={name}>
          {({ field, meta }) => {
            return (
              <input
                {...field}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`${globals_styles.formControl} ${_className}  ${
                  meta.error && meta.touched && "border-danger"
                } border-end-0 form-control mt-2`}
                style={{ _style }}
              />
            );
          }}
        </Field>
        <span
          className={`${globals_styles.inputTextForm} ${globals_styles.textIcons} border-none input-group-text mt-2`}
          id={id}
        >
          {span}
        </span>
        <ErrorMessage name={name} render={(error) => <Error error={error} />} />
      </div>
    </div>
  );
};

export const InputGroupRead = ({
  label,
  name,
  id,
  type,
  placeholder,
  _className = "",
  _style = "",
  span,
  _classNameLabel = "",
  _styleLabel = "",
}) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <div className="form-group mb-3">
      {label && (
        <label
          className={`${_classNameLabel} fw-500 d-flex`}
          style={{ _styleLabel }}
          htmlFor={id}
        >
          {label}
          <button
            className="btn p-0 ms-3"
            onClick={() => setIsReadOnly(!isReadOnly)}
          >
            <Image
              src="/images/svg/edit.svg"
              alt="edit icon"
              width="20"
              height="20"
            />
          </button>
        </label>
      )}
      <div className="input-group">
        <Field name={name}>
          {({ field, meta }) => {
            return (
              <input
                {...field}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`${globals_styles.formControl} ${_className}  ${
                  meta.error && meta.touched && "border-danger"
                } border-end-0 form-control mt-2`}
                style={{ _style }}
                readOnly={isReadOnly}
              />
            );
          }}
        </Field>
        <span
          className={`${globals_styles.inputTextForm} ${globals_styles.textIcons} border-none input-group-text mt-2`}
          style={{ backgroundColor: `${isReadOnly ? "#E9ECEF" : "white"}` }}
          id={id}
        >
          {span}
        </span>
        <ErrorMessage name={name} render={(error) => <Error error={error} />} />
      </div>
    </div>
  );
};
