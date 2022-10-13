import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import Dropzone from "@/components/inputs/dropzone";
import { Preview } from "@/components/inputs/preview";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import { TextField } from "@/components/inputs/textField";
import { ContextValues } from "pages/pre-register";

const FundForm = () => {
  const { values, changeValue } = useContext(ContextValues);

  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <Textarea
          id="tech_innovation"
          name="tech_innovation"
          label="What are your project's technological innovations, if any?"
        />

        <TextField
          id="code_repo_location"
          name="code_repo_location"
          type="url"
          placeholder="E.g. https://github.com/cardano-foundation"
          label="Where are your code repositories located? "
        />
        <div>
          <Textarea
            id="product_demo"
            name="product_demo"
            placeholder="Your products Ui and/or demos"
            label="Do you have any products or UI demos that you can share publicly? If yes, please share them with us"
          />
          <div className="form-group mb-3">
            <div>
              <Field name="product_demo_image" id="product_demo_image">
                {({ form, meta }) => {
                  return (
                    <Dropzone
                      form={form}
                      field_name="product_demo_image"
                      _className={`${
                        meta.error && meta.touched && "border-danger bg-danger"
                      } form-control`}
                    />
                  );
                }}
              </Field>
              <Preview
                preview={values.product_demo_image}
                field_name="product_demo_image"
                changeValue={changeValue}
              />
              <ErrorMessage
                name="product_demo_image"
                render={(error) => <Error error={error} />}
              />
            </div>
          </div>
        </div>

        <Textarea
          id="progress_plan"
          name="progress_plan"
          placeholder="Your progress updates plan"
          label="Are you happy to release progress updates on our websites?"
        />
        <Textarea
          id="host_plan"
          name="host_plan"
          placeholder="Your AMAs hosting plan"
          label="Are you happy to host monthly or bi-monthly AMAs on our channel?"
        />
      </div>
    </>
  );
};

export default FundForm;
