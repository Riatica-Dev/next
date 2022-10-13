import React, { useContext, useState, useEffect } from "react";
import styles from "@/styles/submissions_components.module.css";
import { PreRegisterLayoutContext } from "pages/dashboard/submissions/pre-register";
import CampaignDisplay from "./campaignDisplay";
const SubmissionsResult = () => {
  const [sort, setSort] = useState("date");
  const [isActive, setIsActive] = useState("");
  const { results, changeData, singleResult, nextStep, sortDataBy } =
    useContext(PreRegisterLayoutContext);

  useEffect(() => {
    setIsActive(results[0]._id);
  }, [results]);

  const handleSelectCampaign = (id) => {
    changeData(id);
    setIsActive(id);
  };

  const sortBy = (e) => {
    setSort(e.target.value);
    sortDataBy(sort);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline py-2">
        <div className="h5">Select the campaign that you to verify</div>
        <div>
          <form>
            <select
              className="form-control rounded-3"
              value={sort}
              onChange={sortBy}
              style={{ border: "1px solid" }}
            >
              <option value="date">Date</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </form>
        </div>
      </div>
      <div className="d-flex">
        <div className={`${styles.titles}`}>
          {results.map((result) => {
            return (
              <div
                className={`${styles.singleTitle} ${
                  result._id == isActive && `${styles.active}`
                } rounded-3 my-1 p-2 `}
                key={`${result._id}`}
                onClick={() => handleSelectCampaign(result._id)}
              >
                <span className={`${styles.radioButton} me-2`}></span>
                <span className={`${styles.title}`}>{result.project_name}</span>
              </div>
            );
          })}
        </div>

        <CampaignDisplay
          image={singleResult.compaign_logo[0].preview}
          id={singleResult._id}
          description={singleResult.project_planing}
          title={singleResult.project_name}
          nextStep={nextStep}
        />
      </div>
    </>
  );
};

export default SubmissionsResult;
