import React from "react";
import Image from "next/image";

const BackwardButton = ({
  activeStep,
  handlePreviousStep,
  description = "Please fill in the form to post a new campaign on our website.",
}) => {
  return (
    <div className="d-flex">
      <div>
        {activeStep > 0 && (
          <div style={{ width: "45px" }}>
            <button className="btn" onClick={handlePreviousStep}>
              <Image
                src="/images/svg/arrow_back.svg"
                alt="back word"
                height={20}
                width={20}
              />
            </button>
          </div>
        )}
      </div>
      <div className="w-100">
        <p
          className="text-muted text-center"
          style={{ marginRight: `${activeStep > 0 && "45px"}` }}
        >
          {activeStep != 0 && description}
        </p>
      </div>
    </div>
  );
};

export default BackwardButton;
