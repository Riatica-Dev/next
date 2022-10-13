import React from "react";
import { Field } from "formik";

const RadioField = ({
  label,
  name,
  id,
  value,
  _className = "",
  _style = "",
  _classNameLabel = "",
  _styleLabel = "",
}) => {
  return (
    <div className="form-check">
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <input
              {...field}
              name={name}
              type="radio"
              className={`${
                meta.error && meta.touched && "border-danger"
              } form-check-input ${_className}`}
              id={id}
              value={value}
              style={{ _style }}
              checked={value == field.value}
            />
          );
        }}
      </Field>
      <label
        className={`${_classNameLabel} form-check-label`}
        htmlFor={id}
        style={{ _styleLabel }}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioField;
