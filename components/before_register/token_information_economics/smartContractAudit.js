import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import { TextField } from "@/components/inputs/textField";
import Dropzone from "@/components/inputs/dropzone";
import Switcher from "@/components/inputs/switcher";
import { Preview } from "@/components/inputs/preview";
import { ContextValues } from "pages/pre-register";

export const SmartContractAuditYes = () => {
  const { values, changeValue } = useContext(ContextValues);
  return (
    <div className="row mt-2">
      <div className="col-md-6 col-sm-12">
        <TextField
          id="audit_link"
          name="audit_link"
          type="url"
          label="Link to smart contracts audit"
          placeholder="E.g https://omniscia.io/reports/cloudfunding-crowdfunding-system"
        />
      </div>

      <div className="col-md-6 col-sm-12">
        <label className="fw-500" htmlFor="audit_pdf">
          Drag and drop smart contracts audit
        </label>
        <Field name="audit_pdf">
          {({ form, meta }) => {
            return (
              <Dropzone
                form={form}
                field_name="audit_pdf"
                _className={`${
                  meta.error && meta.touched && "border-danger bg-danger"
                } form-control mt-1`}
              />
            );
          }}
        </Field>
        <Preview
          preview={values.audit_pdf}
          field_name="audit_pdf"
          changeValue={changeValue}
        />
        <ErrorMessage
          name="audit_pdf"
          render={(error) => <Error error={error} />}
        />
      </div>
    </div>
  );
};

export const SmartContractAuditNo = () => {
  return (
    <div className="form-group mb-3">
      <Field
        name="audit_down_road"
        className="form-check-input"
        type="checkbox"
        id="audit_down_road"
      />
      <label className="form-check-label ms-2 fw-500" htmlFor="audit_down_road">
        Request smart contracts audit
      </label>
      <div
        id="audit_down_road_helper"
        style={{ marginTop: "-5px" }}
        className="form-text ms-4 "
      >
        No problem, we will assist you with that!
      </div>
    </div>
  );
};

const SmartContractAudit = () => {
  const { values } = useContext(ContextValues);
  return (
    <>
      <Switcher
        _className="mb-1"
        label="Did you audit your smart contracts?"
        name="smart_contract_audit"
        id="smart_contract_audit"
      />
      <>
        {values.smart_contract_audit ? (
          <SmartContractAuditYes />
        ) : !values.smart_contract_audit ? (
          <SmartContractAuditNo />
        ) : null}
      </>
    </>
  );
};

export default SmartContractAudit;
