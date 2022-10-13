import React, { useContext } from "react";
import { ContextValues } from "pages/pre-register";
import { Textarea } from "@/components/inputs/textarea";
import Switcher from "@/components/inputs/switcher";
const FundraisingForm = () => {
  const { values } = useContext(ContextValues);
  return (
    <>
      <div className="mb-3">
        <Switcher
          label="Did you conduct any type of fundraising before?"
          name="fundraising"
          id="fundraising"
        />
      </div>
      <>
        {values.fundraising && (
          <>
            <Textarea
              name="fundraising_details"
              placeholder="When was it?"
              min={5}
              max={50}
            />
            <Textarea
              id="amount_raised"
              name="amount_raised"
              placeholder="Amount and currency"
              label="How much in total did you raise?"
              min={5}
              max={50}
            />
            <Textarea
              id="token_spent"
              name="token_spent"
              placeholder="Amount and currency"
              label="How much have you spent in total so far? What have you spent these funds on?"
              max={5}
            />
          </>
        )}
      </>
    </>
  );
};

export default FundraisingForm;
