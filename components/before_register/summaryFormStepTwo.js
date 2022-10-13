import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import Dropzone from "@/components/inputs/dropzone";
import Error from "@/components/feedback/error";
import { TextField } from "@/components/inputs/textField";
import { Preview } from "@/components/inputs/preview";
import { ContextValues } from "pages/pre-register";

const SummaryFormStepTwo = () => {
  const { changeValue, values } = useContext(ContextValues);
  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <Textarea
          id="team_member_role"
          name="team_member_role"
          placeholder="Team members, their roles and responsibilities..."
          label="What is your current team size? Please list each core member of the project team, and outline their roles and responsibilities"
        />
        <Textarea
          id="team_member_linkedin"
          name="team_member_linkedin"
          placeholder="Each team member's linkedIn"
          label="LinkedIn profiles of core team members"
        />

        <TextField
          id="project_website"
          name="project_website"
          type="url"
          placeholder="E.g https://cloudfunding.com"
          label="Project's Website"
        />

        <TextField
          id="twitter"
          name="twitter"
          type="url"
          placeholder="https://twitter.com/CloudFundLena"
          label="Twitter"
        />

        <TextField
          id="linkedin"
          name="linkedin"
          type="url"
          placeholder="Not mandatory but, better if provided"
          label=" LinkedIn"
        />

        <TextField
          id="instagram"
          name="instagram"
          type="url"
          placeholder="Optional"
          label="Instagram"
        />

        <TextField
          id="facebook"
          name="facebook"
          type="url"
          placeholder="Optional"
          label="Facebook"
        />

        <TextField
          id="discord"
          name="discord"
          type="url"
          placeholder="Optional"
          label="Discord"
        />

        <TextField
          id="project_whitepaper"
          name="project_whitepaper"
          type="url"
          label="Share a link to your project's whitepaper"
          placeholder="E.g https://cloudfunding.com"
        />

        <div className="row">
          <div className="col-lg-5 col-md-12">
            <TextField
              id="roadmap_url"
              name="roadmap_url"
              type="url"
              label="Share a link to your roadmap"
              placeholder="E.g https://roadmap.com"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center col-lg-2 col-md-12">
            Or
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="form-group mb-3">
              <label className="fw-500" htmlFor="roadmap_image">
                Upload a pdf file
              </label>
              <Field name="roadmap_image" id="roadmap_image">
                {({ form, meta }) => {
                  return (
                    <Dropzone
                      form={form}
                      field_name="roadmap_image"
                      _className={`form-control ${
                        meta.error && meta.touched && "border-danger bg-danger"
                      }`}
                    />
                  );
                }}
              </Field>
              <Preview
                preview={values.roadmap_image}
                field_name="roadmap_image"
                changeValue={changeValue}
              />
              <ErrorMessage
                name="roadmap_image"
                render={(error) => <Error error={error} />}
              />
            </div>
          </div>
        </div>
        <Textarea
          id="position_on_roadmap"
          name="position_on_roadmap"
          placeholder="Share your progress"
          label="Where are you right now in your roadmap?"
        />
      </div>
    </>
  );
};

export default SummaryFormStepTwo;
