import React from "react";
import { TbSearchOff } from "react-icons/tb";
const AutoComplete = ({ value }) => {
  return (
    <div className="text-center pb-2 pt-4">
      <TbSearchOff fontSize="50px" />
      <p className="h3">
        No results for {`"`}
        <span className="fw-bold">{value}</span>
        {`"`}
      </p>
    </div>
  );
};

export default AutoComplete;
