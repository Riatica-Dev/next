import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import { TextField } from "@/components/inputs/textField";
import Dropzone from "@/components/inputs/dropzone";
import { Preview } from "@/components/inputs/preview";
import { ContextValues } from "pages/pre-register";

const SummaryFormStepOne = () => {
  const { values, changeValue } = useContext(ContextValues);
  return (
    <div className={`${globals_styles.stepsForm}`}>
      <TextField
        id="project_name"
        name="project_name"
        type="text"
        label="Name of project"
        placeholder="E.g Lena Instruments"
      />
      <TextField
        id="asset_page"
        name="asset_page"
        type="url"
        label="Link to your asset page on SongBird or/and Flare, if available"
        placeholder="E.g https://cloudfunding.xyz"
      />

      <TextField
        id="client_name_position"
        name="client_name_position"
        type="text"
        label="Your name and position"
      />

      <Textarea
        id="project_pitch"
        name="project_pitch"
        label="A one-sentence pitch about your project"
        max={20}
      />

      <Textarea
        id="project_planing"
        name="project_planing"
        label="What are you planning to achieve with your project?"
        min={20}
        max={150}
      />
      <div className="form-group mb-3">
        <label className="fw-500" htmlFor="campaign_logo">
          Project logo
        </label>
        <div className={`${styles.dropzoneInput}`}>
          <Field name="compaign_logo" id="campaign_logo">
            {({ form, meta }) => {
              return (
                <Dropzone
                  form={form}
                  field_name="compaign_logo"
                  _className={`${
                    meta.error && meta.touched && "border-danger bg-danger"
                  } form-control`}
                />
              );
            }}
          </Field>
          <Preview
            preview={values.compaign_logo}
            field_name="compaign_logo"
            changeValue={changeValue}
          />
          <ErrorMessage
            name="compaign_logo"
            render={(error) => <Error error={error} />}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryFormStepOne;
