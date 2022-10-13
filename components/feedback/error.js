import React from "react";
import PropTypes from "prop-types";
const Error = ({ error }) => {
  return <div className="is-invalid-feedback">{error}</div>;
};
Error.defaultProps = {
  error: "This Field is required",
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
