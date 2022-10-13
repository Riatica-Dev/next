import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Image from "next/image";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";

export const TextField = ({
  label,
  name,
  id,
  type,
  placeholder,
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
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <input
              {...field}
              onKeyPress={
                type == "number"
                  ? (event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }
                  : null
              }
              id={id}
              type={type}
              placeholder={placeholder}
              className={`${globals_styles.formControl} ${_className} ${
                meta.error && meta.touched && "is-invalid"
              } form-control`}
              style={{ _style }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} render={(error) => <Error error={error} />} />
    </div>
  );
};

export const TextFieldRead = ({
  label,
  name,
  id,
  type,
  placeholder,
  _className = "",
  _style = "",
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
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <input
              {...field}
              onKeyPress={
                type == "number"
                  ? (event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }
                  : null
              }
              id={id}
              type={type}
              placeholder={placeholder}
              className={`${globals_styles.formControl} ${_className} ${
                meta.error && meta.touched && "is-invalid"
              } form-control`}
              style={{ _style }}
              readOnly={isReadOnly}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} render={(error) => <Error error={error} />} />
    </div>
  );
};
