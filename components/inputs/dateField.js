import React, { useRef } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";

const DateField = ({
  label,
  name,
  id,
  placeholder,
  _className = "",
  _style = "",
  _classNameLabel = "",
  _styleLabel = "",
}) => {
  const dateRef = useRef();
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
              ref={dateRef}
              {...field}
              placeholder={placeholder}
              onFocus={() => {
                dateRef.current.type = "date";
              }}
              id={id}
              type="text"
              className={`${globals_styles.formControl} ${_className} ${
                meta.error && meta.touched && "is-invalid"
              } form-control ${label ? "mt-1" : "mb-3"} `}
              style={{ _style }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} render={(error) => <Error error={error} />} />
    </div>
  );
};

export default DateField;
