import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextareaAutosize from "react-textarea-autosize";
import Image from "next/image";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";

export const Textarea = ({
  name,
  placeholder,
  id,
  label = "",
  _className = "",
  _style = "",
  _classNameLabel = "",
  _styleLabel = "",
  max,
  min,
}) => {
  const [isHide, setIshide] = useState(true);
  const [strLength, setStrLength] = useState(0);
  const worldCounter = (str) => {
    const regex = /\s+/gi;
    let wordCount = 0;
    if (Number(Number(str.length) - 1) != 0) {
      wordCount = str.trim().replace(regex, " ").split(" ").length;
    }
    setStrLength(wordCount);
  };
  return (
    <div className="form-group mb-3">
      {label && (
        <label
          className={`${_classNameLabel} fw-500`}
          htmlFor={id}
          style={{ _styleLabel }}
        >
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, form, meta }) => {
          const { handleChange, handleBlur, values } = form;
          return (
            <>
              <TextareaAutosize
                {...field}
                id={id}
                className={`${globals_styles.formControl} ${_className} ${
                  globals_styles.formControlTextarea
                } ${
                  meta.error && meta.touched && "is-invalid"
                } form-control border-none`}
                onFocus={() => {
                  setStrLength(strLength);
                  setIshide(false);
                }}
                onBlur={(e) => {
                  setIshide(true);
                  handleBlur(e);
                }}
                cacheMeasurements
                onChange={(e) => {
                  worldCounter(values[name]);
                  handleChange(e);
                }}
                placeholder={placeholder}
              />
              <div
                className={`${
                  isHide && "d-none"
                } d-flex justify-content-between text-black `}
              >
                <ErrorMessage
                  name={name}
                  render={(error) => <Error error={error} />}
                />
                <div></div>
                <div
                  className="d-flex justify-content-end"
                  style={{ minWidth: "70px" }}
                >
                  {max && `${strLength} / ${max}`}
                </div>
              </div>
              {isHide ? (
                <ErrorMessage
                  name={name}
                  render={(error) => <Error error={error} />}
                />
              ) : null}
            </>
          );
        }}
      </Field>
    </div>
  );
};

export const TextareaRead = ({
  name,
  placeholder,
  id,
  label = "",
  _className = "",
  _classNameLabel = "",
  _styleLabel = "",
  max,
}) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isHide, setIshide] = useState(true);
  const [strLength, setStrLength] = useState(0);
  const worldCounter = (str) => {
    const regex = /\s+/gi;
    let wordCount = 0;
    if (Number(Number(str.length) - 1) != 0) {
      wordCount = str.trim().replace(regex, " ").split(" ").length;
    }
    setStrLength(wordCount);
  };
  return (
    <div className="form-group mb-3">
      {label && (
        <label
          className={`${_classNameLabel} fw-500 d-flex `}
          htmlFor={id}
          style={{ _styleLabel }}
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
        {({ field, form, meta }) => {
          const { handleChange, handleBlur, values } = form;
          return (
            <>
              <TextareaAutosize
                readOnly={isReadOnly}
                {...field}
                id={id}
                className={`${globals_styles.formControl} ${_className} ${
                  globals_styles.formControlTextarea
                } ${
                  meta.error && meta.touched && "is-invalid"
                } form-control border-none`}
                onFocus={() => {
                  setStrLength(strLength);
                  setIshide(false);
                }}
                onBlur={(e) => {
                  setIshide(true);
                  handleBlur(e);
                }}
                cacheMeasurements
                onChange={(e) => {
                  worldCounter(values[name]);
                  handleChange(e);
                }}
                placeholder={placeholder}
              />
              <div
                className={`${
                  isHide && "d-none"
                } d-flex justify-content-between text-black `}
              >
                <ErrorMessage
                  name={name}
                  render={(error) => <Error error={error} />}
                />
                <div></div>
                <div
                  className="d-flex justify-content-end"
                  style={{ minWidth: "70px" }}
                >
                  {max && `${strLength} / ${max}`}
                </div>
              </div>
              {isHide ? (
                <ErrorMessage
                  name={name}
                  render={(error) => <Error error={error} />}
                />
              ) : null}
            </>
          );
        }}
      </Field>
    </div>
  );
};
