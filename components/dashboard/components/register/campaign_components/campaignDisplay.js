import React from "react";
import Image from "next/image";
import styles from "@/styles/submissions_components.module.css";

const CampaignDisplay = ({ id, nextStep }) => {
  // handle the decline id
  const handleDeclineClick = () => {
    console.log(id);
  };

  // handle the Validate api
  const handleValidateClick = () => {
    console.log(id);
  };

  return (
    <div className="w-100">
      <h4 className="text-center">placeholder</h4>
      <div className="d-flex justify-content-around mt-3">
        <button className={`${styles.btn} btn`} onClick={nextStep}>
          Edit
        </button>
        <button className={`${styles.btn} btn`} onClick={handleDeclineClick}>
          Decline
        </button>
        <button className={`${styles.btn} btn`} onClick={handleValidateClick}>
          Validate
        </button>
      </div>
    </div>
  );
};

export default CampaignDisplay;
