import React, { useContext } from "react";
import globals_styles from "@/styles/globals_register.module.css";
import { Textarea } from "@/components/inputs/textarea";
import SmartContractAudit from "./token_information_economics/smartContractAudit";
import RunningNetwork from "./token_information_economics/runningNetwork";
import CurrencyListed from "./token_information_economics/currencyListed";
import { TextField } from "@/components/inputs/textField";
import Switcher from "@/components/inputs/switcher";
import { ContextValues } from "pages/pre-register";

const TokenInformationEconomics = () => {
  const { values } = useContext(ContextValues);

  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <Textarea
          id="token_name"
          name="token_name"
          type="text"
          placeholder="Your token name (optional)"
          label="Token Name, if available"
        />

        <Textarea
          id="token_symbol"
          name="token_symbol"
          type="text"
          placeholder="Your token symbol (optional)"
          label="Token Symbol, if available"
        />

        <SmartContractAudit />
        <div className="mt-4">
          <Switcher
            label="Is your token an utility token?"
            name="utility_token"
            id="utility_token"
          />
        </div>

        {values.utility_token ? (
          <div className="mt-4">
            <Textarea
              id="token_use_case"
              name="token_use_case"
              label="What is the primary use case, the utility of your token?"
              min={5}
              max={100}
            />
            <Textarea
              id="other_token_use_case"
              name="other_token_use_case"
              type="text"
              label="Where else can your token be used, what other utilities does your
            token have?"
              min={5}
              max={100}
            />

            <TextField
              id="total_token_supply"
              name="total_token_supply"
              type="number"
              label="What is the total supply of your token?"
            />

            <TextField
              id="circulating_token_supply"
              name="circulating_token_supply"
              type="number"
              label="What is the circulating supply of your token?"
            />

            <Textarea
              id="breakdown_token"
              name="breakdown_token"
              placeholder="E.g Advisors 2.5%, Treasury 15%, LPs and Bonding 40%, Team 15%, Staking 2.5%, Strategic Sale 15%, please be as precise as possible"
              label="Please provide a breakdown of your tokenomics, inclusive of your CloudFunding"
              min={5}
              max={50}
            />
            <Textarea
              id="breakdown_tokenomics"
              name="breakdown_tokenomics"
              label="Please provide a specific breakdown of the tokenomics of your
            CloudFunding"
              min={5}
              max={50}
            />
            <Textarea
              id="team_wallet"
              name="team_wallet"
              label="Please provide a list of team wallets that hold your token. If the token is not issued yet, would you provide this information to the community as soon as it is available?"
              min={5}
              max={50}
            />

            <Textarea
              id="hold_lockup"
              name="hold_lockup"
              label=" Please provide all lockups if in place for the holders and future holders of the token"
              min={5}
              max={50}
            />
            <div className="mt-3">
              <RunningNetwork />
            </div>
            <div className="mt-3">
              <CurrencyListed />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TokenInformationEconomics;
