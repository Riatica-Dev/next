import React from "react";
import styles from "@/styles/submissions_components.module.css";

export const PreRegisterNav = ({ pathname, isUnderline }) => {
  const [zero, one, two] = isUnderline;

  return (
    <ul className="nav nav-pills nav-fill bg-white mb-3 rounded-3 shadow-sm">
      <li
        className={`${
          pathname == "campaigns" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${zero && `${styles.navUnderline}`} `}
      >
        Campaigns
      </li>
      <li
        className={`${
          pathname == "campaignDetails" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${one && `${styles.navUnderline}`} `}
      >
        Campaign Details
      </li>
      <li
        className={`${
          pathname == "personalDetails" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${two && `${styles.navUnderline}`} `}
      >
        Personal Details
      </li>
    </ul>
  );
};

export const RegisterNav = ({ pathname, isUnderline }) => {
  const [zero, one, two, three] = isUnderline;

  return (
    <ul className="nav nav-pills nav-fill bg-white mb-3 rounded-3 shadow-sm">
      <li
        className={`${
          pathname == "campaigns" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${zero && `${styles.navUnderline}`} `}
      >
        Campaigns
      </li>
      <li
        className={`${
          pathname == "campaignDetails" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${one && `${styles.navUnderline}`} `}
      >
        Campaign Details
      </li>
      <li
        className={`${
          pathname == "personalDetails" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${two && `${styles.navUnderline}`} `}
      >
        Personal Details
      </li>
      <li
        className={`${
          pathname == "companyDetails" ? "text-black" : "text-grey-300"
        } nav-item py-3 ${three && `${styles.navUnderline}`} `}
      >
        Company Details
      </li>
    </ul>
  );
};
