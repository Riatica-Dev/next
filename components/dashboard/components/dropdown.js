import React from "react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogin,
} from "react-icons/ai";
import { IoMdHelp } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/dashboard/layout.module.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className={`${styles.dropmenuBtn} btn dropdown-toggle d-flex align-items-center`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image
          src="/images/user_placeholder.png"
          alt="user name image placeholder"
          height="40px"
          width="40px"
        />
        <span className="ms-2">Mohcen Mnassri</span>
      </button>
      <button
        className={`${styles.settingBtn} btn`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <AiOutlineSetting fontSize="25px" />
      </button>
      <ul className="dropdown-menu border-0 shadow">
        <li>
          <Link href="/dashboard/personal-details">
            <a className="dropdown-item">
              <AiOutlineUser className="me-2" /> Profile
            </a>
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <TbDeviceAnalytics className="me-2" /> Analytics
          </a>
        </li>
        <li>
          <Link href="/dashboard/personal-details/setting">
            <a className="dropdown-item">
              <AiOutlineSetting className="me-2" /> Setting & privacy
            </a>
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <IoMdHelp className="me-2" /> Help
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <AiOutlineLogin className="me-2" /> Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
