import React from "react";
import Image from "next/image";
import styles from "@/styles/submissions_components.module.css";

const CampaignDisplay = ({ id, image, title, description, nextStep }) => {
  // handle the decline api
  const handleDeclineClick = () => {
    console.log(id);
  };

  // handle the Validate api
  const handleValidateClick = () => {
    console.log(id);
  };

  return (
    <div>
      <h4 className="text-center">{title}</h4>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center w-50 p-4">
          <div className="w-100">
            <Image
              src={image}
              width="350"
              height="350"
              layout="responsive"
              alt="placeholdre image"
            />
          </div>
        </div>
        <div className="w-50 p-4">
          <p>{description}</p>
        </div>
      </div>
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
