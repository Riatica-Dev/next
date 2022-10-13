import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import styles from "@/styles/dashboard/layout.module.css";
import AutoComplete from "./autoComplete";

const SearchModal = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    setSearchResult(searchValue);
  };
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <form>
              <div className={`${styles.inputGroup} input-group rounded`}>
                <span
                  className={`${styles.inputGroupText} input-group-text bg-transparent border-0`}
                >
                  <IoMdSearch fontSize="23px" />
                </span>
                <input
                  type="search"
                  value={searchValue}
                  onChange={handleSearchInput}
                  className={`${styles.formControl} form-control`}
                  placeholder="Search for a campaign name"
                />
              </div>
            </form>
            <AutoComplete value={searchResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
