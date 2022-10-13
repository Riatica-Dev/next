import React, { useContext } from "react";
import { Textarea } from "@/components/inputs/textarea";
import Switcher from "@/components/inputs/switcher";
import { ContextValues } from "pages/pre-register";

const CurrencyListed = () => {
  const { values } = useContext(ContextValues);
  return (
    <>
      <Switcher
        label="Is the token currently listed on any exchange?"
        id="currency_listed"
        name="currency_listed"
      />
      <>
        {values.currency_listed ? (
          <Textarea
            id="exchange_name"
            name="exchange_name"
            placeholder="What are they?"
            min={5}
            max={30}
          />
        ) : null}
      </>
    </>
  );
};

export default CurrencyListed;
