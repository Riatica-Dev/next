import React, { createContext, useState, useEffect } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import styles from "@/styles/dashboard/layout.module.css";
import global_styles from "@/styles/dashboard/dashboard.module.css";
import Title from "@/components/utils/title";
import SideNavbar from "@/components/dashboard/components/sidebar";
import Navbar from "@/components/dashboard/components/navbar";
import Footer from "@/components/dashboard/components/footer";

const Layout = ({ children, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Title pageName={title} />
      <div
        className={`${styles.wrapper} ${
          isOpened ? `${styles.toggled}` : ""
        } d-flex`}
      >
        <SideNavbar />

        <div className={`${styles.pageContentWrapper} h-100`}>
          <Navbar>
            <RiBarChartHorizontalLine
              onClick={() => setIsOpened(!isOpened)}
              className={`${styles.toggleBtn} fs-4`}
            />
          </Navbar>
          <div className={`${global_styles.bgDashboad}`}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
