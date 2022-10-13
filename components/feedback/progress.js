import React from "react";
import styles from "@/styles/progress_bar.module.css";
const index = () => {
  return (
    <>
      <span className="h4"> $ 999 </span>
      <div className="w-100">
        <div className={`${styles.progressCore} progress rounded-pill`}>
          <div
            className={`${styles.bar} progress-bar`}
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <p>
        <span>100%</span> of <span>$300.000</span>
      </p>
    </>
  );
};

export default index;
