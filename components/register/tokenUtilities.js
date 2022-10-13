import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import Dropzone from "@/components/inputs/dropzone";
import Switcher from "@/components/inputs/switcher";
import { Preview } from "@/components/inputs/preview";
import { ValuesContext } from "pages/register";

export const TokenUtilitiesAuditYes = () => {
  const { values, changeValue } = useContext(ValuesContext);
  return (
    <div className="form-group mb-3">
      <label className="fw-500 mt-2" htmlFor="legal_opinion_pdf">
        Drag and drop your token&apos;s legal opinion
      </label>
      <Field name="legal_opinion_pdf">
        {({ form, meta }) => {
          return (
            <Dropzone
              form={form}
              field_name="legal_opinion_pdf"
              _className={`${
                meta.error && meta.touched && "border-danger bg-danger"
              } form-control`}
            />
          );
        }}
      </Field>
      <Preview
        preview={values.legal_opinion_pdf}
        field_name="legal_opinion_pdf"
        changeValue={changeValue}
      />
      <ErrorMessage
        name="legal_opinion_pdf"
        render={(error) => <Error error={error} />}
      />
    </div>
  );
};

export const TokenUtilitiesAuditNo = () => {
  return (
    <div className="form-group mb-3">
      <Field
        name="legal_opinion_down_road"
        className="form-check-input"
        type="checkbox"
        id="legal_opinion_down_road"
      />
      <label
        className="form-check-label ms-2 fw-500"
        htmlFor="legal_opinion_down_road"
      >
        Request legal opinion
      </label>
      <div
        id="legal_opinion_down_road_helper"
        style={{ marginTop: "-5px" }}
        className="form-text ms-4 "
      >
        No worries, we will help you out!
      </div>
    </div>
  );
};

const TokenUtilities = () => {
  const { values } = useContext(ValuesContext);
  return (
    <>
      <Switcher
        _className="mb-1"
        label="Were you legally advised that your token has one or multiple utilities?"
        name="legal_opinion_switch"
        id="legal_opinion_switch"
      />
      <>
        {values.legal_opinion_switch ? (
          <TokenUtilitiesAuditYes />
        ) : !values.legal_opinion_switch ? (
          <TokenUtilitiesAuditNo />
        ) : null}
      </>
    </>
  );
};

export default TokenUtilities;
