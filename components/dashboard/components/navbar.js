import React from "react";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import Dropdown from "@/components/dashboard/components/dropdown";
import styles from "@/styles/dashboard/layout.module.css";
import SearchModal from "./searchModal";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className={`${styles.nav} d-flex justify-content-between`}>
        <div className="d-flex align-items-center">
          <div className="me-2">{children}</div>

          <div className={`${styles.seachInput}`}>
            <form className={`${styles.searchForm}`}>
              <div className={`${styles.inputGroup} input-group rounded`}>
                <span
                  className={`${styles.inputGroupText} input-group-text bg-transparent border-0`}
                >
                  <IoMdSearch fontSize="23px" />
                </span>
                <input
                  type="search"
                  className={`${styles.formControl} form-control`}
                  placeholder="Search for a campaign name"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex">
          <button
            type="button"
            className={`${styles.searchBtn} btn`}
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <IoMdSearch fontSize="25px" />
          </button>

          <div className="d-flex align-items-center me-2">
            <IoMdNotifications className="fs-4" />

            {/* fix the notification alert */}

            {/* {true && (
            <BsDot
              className={`${styles.notification} text-danger`}
              fontSize={25}
            />
          )} */}
          </div>
          <Dropdown />
        </div>
      </nav>

      <SearchModal />
    </>
  );
};

export default Navbar;
