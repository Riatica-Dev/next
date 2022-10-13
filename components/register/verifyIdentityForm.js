import React from "react";
import CountryID from "@/utils/verify_identity/country_id";
import IdentityType from "@/utils/verify_identity/identity_type";
import DropzoneIdentity from "@/utils/verify_identity/dropzone_identity";

const VerifyIdentityForm = () => {
  return (
    <>
      <h5>Verify your identity</h5>
      <CountryID />
      <IdentityType />
      <DropzoneIdentity />
    </>
  );
};

export default VerifyIdentityForm;
