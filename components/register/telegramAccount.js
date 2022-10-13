import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/components/feedback/error";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/register.module.css";

const TelegramAccount = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <h5>How can we reach you?</h5>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">Your Telegram username</p>
        <div className="input-group">
          <span
            className={`${globals_styles.textIcons} ${
              isFocused && `${styles.borderGray}`
            } ${error && "border-danger"}  input-group-text my-2`}
            id="telegramAccount"
          >
            @
          </span>
          <Field name="telegram_account">
            {({ field, meta, form }) => {
              const { handleBlur } = form;
              setTimeout(() => setError(meta.error && meta.touched));
              return (
                <input
                  {...field}
                  id="telegram_account"
                  onFocus={() => setIsFocused(true)}
                  onBlur={(e) => {
                    handleBlur(e);
                    setIsFocused(false);
                  }}
                  placeholder="Telegram account"
                  className={`${globals_styles.formControl} ${
                    meta.error && meta.touched && "border-danger"
                  } 
                   border-start-0 my-2 form-control`}
                  aria-describedby="telegramAccount"
                />
              );
            }}
          </Field>
        </div>
        <ErrorMessage
          name="telegram_account"
          render={(msg) => <Error error={msg} />}
        />
      </div>
    </>
  );
};

export default TelegramAccount;
