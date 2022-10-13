import React, { useContext } from "react";
import { ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import styles from "@/styles/register.module.css";
import Message from "@/components/feedback/message";
import RadioField from "@/components/inputs/radioField";
import { ValuesContext } from "pages/register";

const RoleCompanyForm = () => {
  const { values } = useContext(ValuesContext);
  return (
    <>
      {values.company_type == "company_campany" ? (
        <>
          <h5>Tell us about your role in the company</h5>
          <div className={`${styles.stepsForm}`}>
            <RadioField
              id="role_one"
              value="only_director_and_significant_shareholder"
              label="I am the only director and significant shareholder"
              name="company_role"
            />

            <RadioField
              id="role_two"
              value="serval_director_or_significiant_shareholders"
              label={
                <>
                  I am one of several directors or significant shareholders
                  <p className={`${styles.labelExeplination}`}>
                    There are other directors or shareholders with greater than
                    25% ownership
                  </p>
                </>
              }
              name="company_role"
            />
            <ErrorMessage
              name="company_role"
              render={(error) => <Error error={error} />}
            />
          </div>
        </>
      ) : (
        <>
          <Message>
            <p className="text-black nav-link" style={{ fontSize: "1rem" }}>
              Well done!
            </p>
            <p className="text-black nav-link" style={{ fontSize: "1rem" }}>
              Now tell us about yourself.
            </p>
          </Message>
        </>
      )}
    </>
  );
};

export default RoleCompanyForm;
