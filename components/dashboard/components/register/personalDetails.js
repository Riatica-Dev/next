import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { RegisterContext } from "pages/dashboard/submissions/register";
import styles from "@/styles/submissions_components.module.css";
import { TextFieldRead } from "@/components/inputs/textField";
import { PreviewRead } from "@/components/inputs/preview";

const PersonalDetails = () => {
  const { nextStep, backStep, singleResult } = useContext(RegisterContext);

  const handleSubmit = (values, actions) => {
    console.log(values);
    if (true) {
      nextStep();
    }
  };

  console.log(singleResult);

  return (
    <div className="bg-white p-3 mb-3 rounded-3 shadow-sm">
      <Formik onSubmit={handleSubmit} initialValues={singleResult}>
        <Form>
          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">Company Type:</label>
            <div>
              {singleResult.company_type == "company_campany"
                ? "I want to start a company campaign"
                : "I want to start a Not for profit campaign"}
            </div>
          </div>

          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">Country of incorporation:</label>
            <div>{singleResult.country_legal_register}</div>
          </div>

          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">Role in the company:</label>
            <div>
              {singleResult.company_role ==
              "only_director_and_significant_shareholder"
                ? "I am the only director and significant shareholder"
                : "I am one of several directors or significant shareholders"}
            </div>
          </div>

          <TextFieldRead
            name="first_name"
            type="text"
            placeholder="First Name"
            label="Your first name"
          />
          <TextFieldRead
            name="last_name"
            type="text"
            placeholder="Last Name"
            label="Your last name"
          />
          <TextFieldRead
            name="date_birthday"
            type="date"
            placeholder="Last Name"
            label="Date of birth"
            _className="text-muted"
          />

          <TextFieldRead
            name="home_zip_code"
            type="text"
            placeholder="Zip Code"
            label="Zip Code"
          />
          <TextFieldRead
            name="home_address_one"
            type="text"
            placeholder="Address One"
            label="Address One"
          />
          <TextFieldRead
            name="home_address_two"
            type="text"
            placeholder="Address Two (Optional)"
            label="Address Two"
          />
          <TextFieldRead
            name="home_city"
            type="text"
            placeholder="City"
            label="City"
          />

          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">Country of the indentity:</label>
            <div>{singleResult.identity_country}</div>
          </div>

          <div className="d-flex justify-content-between form-group mb-3">
            <label className="fw-500 d-flex">verification type:</label>
            <div>
              {singleResult.identity_type == "driving_licence"
                ? "Driving licence"
                : singleResult.identity_type == "passport"
                ? "Passport"
                : "National identity card"}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <PreviewRead
              label={
                singleResult.id_image.side_2
                  ? "Idenetity Image side 1:"
                  : "Identity Image"
              }
              dataTarget="idImageSideOne"
              preview={singleResult.id_image.side_1}
            />
            {singleResult.id_image.side_2 ? (
              <PreviewRead
                label="Identity Image side 2:"
                dataTarget="idImageSideTwo"
                preview={singleResult.id_image.side_2}
              />
            ) : null}
          </div>

          <PreviewRead
            label="Selfie image:"
            dataTarget="selfieImage"
            preview={singleResult.selfie_image}
          />

          <div className="d-flex justify-content-around mt-3">
            <button
              type="button"
              className={`${styles.btn} btn`}
              onClick={backStep}
            >
              Back
            </button>
            <button type="submit" className={`${styles.btn} btn`}>
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetails;
