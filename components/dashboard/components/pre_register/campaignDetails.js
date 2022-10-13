import React, { useContext } from "react";
import { Formik, Form } from "formik";
import styles from "@/styles/submissions_components.module.css";
import { TextareaRead } from "@/components/inputs/textarea";
import { TextFieldRead } from "@/components/inputs/textField";
import { PreRegisterLayoutContext } from "pages/dashboard/submissions/pre-register";
import { PreviewRead } from "@/components/inputs/preview";

const CampaignDetails = () => {
  const { singleResult, nextStep, backStep } = useContext(
    PreRegisterLayoutContext
  );

  // handle update api
  const handleSubmit = (values, actions) => {
    console.log(values);

    if (true) {
      nextStep();
    }
  };
  return (
    <div className="bg-white py-3 mb-3 rounded-3 shadow-sm">
      <div className="h5 text-center">Please validate below information</div>
      <div>
        <Formik initialValues={singleResult} onSubmit={handleSubmit}>
          <Form>
            <div className="px-5">
              <>
                <div className="h4">Project Summary</div>
                <hr />
                <div className="px-3">
                  <TextFieldRead
                    id="project_name"
                    name="project_name"
                    type="text"
                    label="Name of project"
                    placeholder="E.g Lena Instruments"
                  />
                  <TextFieldRead
                    id="asset_page"
                    name="asset_page"
                    type="url"
                    label="Link to your asset page on SongBird or/and Flare, if available"
                    placeholder="E.g https://cloudfunding.xyz"
                  />

                  <TextFieldRead
                    id="client_name_position"
                    name="client_name_position"
                    type="text"
                    label="Your name and position"
                  />

                  <TextareaRead
                    id="project_pitch"
                    name="project_pitch"
                    label="A one-sentence pitch about your project"
                    max={20}
                  />

                  <TextareaRead
                    id="project_planing"
                    name="project_planing"
                    label="What are you planning to achieve with your project?"
                    min={20}
                    max={150}
                  />

                  <PreviewRead
                    label="Project logo"
                    dataTarget="projectLogo"
                    preview={singleResult.compaign_logo}
                  />
                  <TextareaRead
                    id="team_member_role"
                    name="team_member_role"
                    placeholder="Team members, their roles and responsibilities..."
                    label="What is your current team size? Please list each core member of the project team, and outline their roles and responsibilities."
                  />

                  <TextareaRead
                    id="team_member_linkedin"
                    name="team_member_linkedin"
                    placeholder="Each team member's linkedIn"
                    label="LinkedIn profiles of core team members"
                  />

                  <TextFieldRead
                    id="project_website"
                    name="project_website"
                    type="url"
                    placeholder="E.g https://cloudfunding.com"
                    label="Project's Website"
                  />

                  <TextFieldRead
                    id="twitter"
                    name="twitter"
                    type="url"
                    placeholder="https://twitter.com/CloudFundLena"
                    label="Twitter"
                  />

                  <TextFieldRead
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="Not mandatory but, better if provided"
                    label=" Linkedin"
                  />

                  <TextFieldRead
                    id="instagram"
                    name="instagram"
                    type="url"
                    placeholder="Optional"
                    label="Instagram"
                  />

                  <TextFieldRead
                    id="facebook"
                    name="facebook"
                    type="url"
                    placeholder="Optional"
                    label="Facebook"
                  />

                  <TextFieldRead
                    id="discord"
                    name="discord"
                    type="url"
                    placeholder="Optional"
                    label="Discord"
                  />

                  <TextFieldRead
                    id="project_whitepaper"
                    name="project_whitepaper"
                    type="url"
                    label="Share a link to your project's whitepaper"
                    placeholder="E.g https://cloudfunding.com"
                  />

                  {singleResult.roadmap_image && (
                    <TextFieldRead
                      id="roadmap_url"
                      name="roadmap_url"
                      type="url"
                      label="Share a link to your roadmap"
                      placeholder="E.g https://roadmap.com"
                    />
                  )}

                  {singleResult.roadmap_image.length != 0 && (
                    <PreviewRead
                      label="Roadmap pdf"
                      dataTarget="roadmapImage"
                      preview={singleResult.roadmap_image}
                    />
                  )}

                  <TextareaRead
                    id="position_on_roadmap"
                    name="position_on_roadmap"
                    placeholder="Share your progress"
                    label="Where are you right now in your roadmap?"
                  />
                </div>
              </>

              <>
                <div className="h4">Token Information & Economics</div>
                <hr />
                <div className="px-3">
                  <TextareaRead
                    id="bussiness_model"
                    name="bussiness_model"
                    label="What is your project's business model?"
                    max={150}
                  />

                  <TextareaRead
                    id="bussiness_future"
                    name="bussiness_future"
                    label="What is the potential user base and market opportunity?"
                    max={150}
                  />

                  <TextFieldRead
                    id="token_name"
                    name="token_name"
                    type="text"
                    placeholder="Your token name (optional)"
                    label="Token Name , if available"
                  />

                  <TextFieldRead
                    id="token_symbol"
                    name="token_symbol"
                    type="text"
                    placeholder="Your token Symbol (optional)"
                    label="Token Symbol , if available"
                  />

                  {singleResult.audit_link && (
                    <TextFieldRead
                      id="audit_link"
                      name="audit_link"
                      type="url"
                      label="Link to smart contracts audit"
                      placeholder="E.g https://omniscia.io/reports/cloudfunding-crowdfunding-system"
                    />
                  )}

                  {singleResult.audit_pdf.length != 0 && (
                    <PreviewRead
                      label="smart contracts audit"
                      dataTarget="auditPdf"
                      preview={singleResult.audit_pdf}
                    />
                  )}
                  {/* audit_down_road */}

                  {singleResult.audit_down_road && (
                    <div className="d-flex justify-content-between form-group mb-3">
                      <label className="fw-500 d-flex">
                        Request smart contracts audit
                      </label>
                      <div>Yes</div>
                    </div>
                  )}
                  <TextareaRead
                    id="token_use_case"
                    name="token_use_case"
                    label="What is the primary use case, the utility of your token?"
                    min={5}
                    max={100}
                  />
                  <TextareaRead
                    id="other_token_use_case"
                    name="other_token_use_case"
                    type="text"
                    label="Where else can your token be used, what other utilities does your
            token have?"
                    min={5}
                    max={100}
                  />

                  <TextFieldRead
                    id="total_token_supply"
                    name="total_token_supply"
                    type="number"
                    label="What is the total supply of your token?"
                  />

                  <TextFieldRead
                    id="circulating_token_supply"
                    name="circulating_token_supply"
                    type="number"
                    label="What is the circulating supply of your token?"
                  />

                  <TextareaRead
                    id="breakdown_token"
                    name="breakdown_token"
                    placeholder="E.g Advisors 2.5%, Treasury 15%, LPs and Bonding 40%, Team 15%, Staking 2.5%, Strategic Sale 15%, please be as precise as possible"
                    label="Please provide a breakdown of your tokenomics, inclusive of your CloudFunding"
                    min={5}
                    max={50}
                  />
                  <TextareaRead
                    id="breakdown_tokenomics"
                    name="breakdown_tokenomics"
                    label="Please provide a specific breakdown of the tokenomics of your
            CloudFunding."
                    min={5}
                    max={50}
                  />
                  <TextareaRead
                    id="team_wallet"
                    name="team_wallet"
                    label="Please provide a list of team wallets that hold your token. If the token is not issued yet, would you provide this information to the community as soon as it is available?"
                    min={5}
                    max={50}
                  />

                  <TextareaRead
                    id="hold_lockup"
                    name="hold_lockup"
                    label=" Please provide all lockups if in place for the holders and future holders of the token."
                    min={5}
                    max={50}
                  />
                  {singleResult.running_network_currency ? (
                    <TextareaRead
                      id="running_network_currency_type"
                      name="running_network_currency_type"
                      placeholder="Is there a swap/migration plan?"
                      label="Is the token currently running on
                  any network other than Songbird/Flare? If yes, is there a
                  swap/migration plan?"
                      min={5}
                      max={30}
                    />
                  ) : (
                    <div className="d-flex justify-content-between form-group mb-3">
                      <label className="fw-500 d-flex">
                        Is the token currently running on any network other than
                        Songbird/Flare? If yes, is there a swap/migration plan?
                      </label>
                      <div>No</div>
                    </div>
                  )}
                  {singleResult.currency_listed ? (
                    <TextareaRead
                      id="exchange_name"
                      name="exchange_name"
                      label="Is the token currently listed on any exchange?"
                      placeholder="What are they?"
                      min={5}
                      max={30}
                    />
                  ) : (
                    <div className="d-flex justify-content-between form-group mb-3">
                      <label className="fw-500 d-flex">
                        Is the token currently listed on any exchange?
                      </label>
                      <div>No</div>
                    </div>
                  )}
                </div>
              </>

              <>
                <div className="h4">Treasury</div>
                <hr />
                <div className="px-3">
                  {singleResult.fundraising ? (
                    <>
                      <TextareaRead
                        name="fundraising_details"
                        placeholder="When was it?"
                        min={5}
                        max={50}
                      />
                      <TextareaRead
                        id="amount_raised"
                        name="amount_raised"
                        placeholder="Amount and currency"
                        label="How much in total did you raise?"
                        min={5}
                        max={50}
                      />
                      <TextareaRead
                        id="token_spent"
                        name="token_spent"
                        placeholder="Amount and currency"
                        label="How much have you spent in total so far? What have you spent these funds on?"
                        max={5}
                      />
                    </>
                  ) : (
                    <div className="d-flex justify-content-between form-group mb-3">
                      <label className="fw-500 d-flex">
                        Did you conduct any type of fundraising before?
                      </label>
                      <div>No</div>
                    </div>
                  )}

                  <TextareaRead
                    id="project"
                    name="project"
                    label="How much runway does your project require to ship the final product?"
                    min={5}
                    max={50}
                  />

                  <TextareaRead
                    id="currency_coin_token"
                    name="currency_coin_token"
                    label="What currency/coins/tokens do you plan to hold your funds in?"
                    min={5}
                    max={20}
                  />

                  <TextareaRead
                    id="policy"
                    name="policy"
                    label="What's your coin storage/conversion policy? Do you only convert to fiat when you spend?"
                    min={5}
                    max={20}
                  />

                  <TextareaRead
                    id="spendings"
                    name="spendings"
                    placeholder="Yes, no, share any comments or other plans you may have"
                    label="Do you plan to publish your spendings each month during the yield period and publish a
          quarterly report for the following year?"
                    min={5}
                    max={20}
                  />
                </div>
              </>

              <>
                <div className="h4">Development</div>
                <hr />
                <div className="px-3">
                  <TextareaRead
                    id="tech_innovation"
                    name="tech_innovation"
                    label="What are your project's technological innovations, if any?"
                  />

                  <TextFieldRead
                    id="code_repo_location"
                    name="code_repo_location"
                    type="url"
                    placeholder="E.g. https://github.com/cardano-foundation"
                    label="Where are your code repositories located? "
                  />

                  <TextareaRead
                    id="product_demo"
                    name="product_demo"
                    placeholder="Your products Ui and/or demos"
                    label="Do you have any products or UI demos that you can share publicly? If yes, please share them with us"
                  />
                  <PreviewRead
                    label="smart contracts audit"
                    dataTarget="productDemoImage"
                    preview={singleResult.product_demo_image}
                  />
                  <TextareaRead
                    id="progress_plan"
                    name="progress_plan"
                    placeholder="Your progress updates plan"
                    label="Are you happy to release progress updates on our websites?"
                  />
                  <TextareaRead
                    id="host_plan"
                    name="host_plan"
                    placeholder="Your AMAs hosting plan"
                    label="Are you happy to host monthly or bi-monthly AMAs on our channel?"
                  />
                </div>
              </>

              <>
                <div className="h4">Competitors</div>
                <hr />
                <div className="px-3">
                  <TextareaRead
                    id="competitors_peers"
                    name="competitors_peers"
                    placeholder="Please list them here"
                    label="Who do you view as your current competitors/peers?"
                  />
                  <TextareaRead
                    id="competitive_adventage"
                    name="competitive_adventage"
                    placeholder="Take your time to answer this"
                    label="What is your project's competitive advantage over existing or potential future solutions? "
                  />
                </div>
              </>
            </div>

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
    </div>
  );
};

export default CampaignDetails;
