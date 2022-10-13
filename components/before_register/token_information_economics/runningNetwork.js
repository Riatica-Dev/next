import React, { useContext } from "react";
import { Textarea } from "@/components/inputs/textarea";
import Switcher from "@/components/inputs/switcher";
import { ContextValues } from "pages/pre-register";

const RunningNetwork = () => {
  const { values } = useContext(ContextValues);
  return (
    <>
      <Switcher
        label="Is the token currently running on
          any network other than Songbird/Flare? If yes, is there a
          swap/migration plan?"
        name="running_network_currency"
        id="running_network_currency"
      />
      {values.running_network_currency ? (
        <Textarea
          id="running_network_currency_type"
          name="running_network_currency_type"
          placeholder="Is there a swap/migration plan?"
          min={5}
          max={30}
        />
      ) : null}
    </>
  );
};

export default RunningNetwork;
