import React from "react";
import { Field, ErrorMessage } from "formik";
import Switch from "react-switch";
import Error from "@/components/feedback/error";

const Switcher = ({
  label,
  name,
  _className = "",
  _classNameLabel = "",
  _styleLabel = "",
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`${_classNameLabel} d-flex justify-content-between`}
        style={{ _styleLabel }}
      >
        <span>{label}</span>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <Switch
                {...field}
                checked={value}
                onChange={(e) => {
                  setFieldValue(name, e);
                }}
                className={`${_className} react-switch`}
                activeBoxShadow="0px 0px 0px 0px #ffffff00"
                onColor="#000000"
                uncheckedIcon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                id={name}
              />
            );
          }}
        </Field>
      </label>
      <ErrorMessage name={name} render={(error) => <Error error={error} />} />
    </>
  );
};

export default Switcher;

const UncheckedIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "white",
        paddingRight: 2,
        height: 30,
      }}
    >
      No
    </div>
  );
};

const CheckedIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "white",
        paddingRight: 2,
        height: 30,
      }}
    >
      Yes
    </div>
  );
};
